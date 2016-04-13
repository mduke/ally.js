define(function(require) {
  'use strict';

  var bdd = require('intern!bdd');
  var expect = require('intern/chai!expect');
  var pollUntil = require('intern/dojo/node!leadfoot/helpers/pollUntil');

  // NOTE: The SafariDriver does *not* behave like Safari in regards to
  // how mouse events are processed. While Safari, when used directly,
  // exhibits bug https://bugs.webkit.org/show_bug.cgi?id=139945,
  // Safari when used via WebDriver (and thus SafariDriver), does NOT.
  // Chrome 27 is the last of the WebKit based versions and exhibits
  // the same bug. However, BrowserStack's Chrome 27 won't run our Intern suite.
  // This means we cannot test fix/pointer-focus-parent.js in a way that
  // actually proves the script does something the browser would otherwise not.

  bdd.describe('fix/pointer-focus-parent', function() {
    var timeout = 120000;

    function makeFocusClickTest(prefix, hasTarget) {
      return function() {
        this.timeout = timeout;
        return this.remote
          // make sure we're failing without the fix
          .findById(prefix + 'fail-source')
            .click()
            .end()
          .sleep(500)
          .execute('return document.activeElement.id || document.activeElement.nodeName')
          .then(function(activeElementId) {
            var expected = hasTarget ? (prefix + 'fail-target') : (prefix + 'fail-source');
            if (activeElementId === expected) {
              this.skip('Element focused naturally');
            }
          }.bind(this))

          // I have no clue why, but IE11 needs this for
          // the next click to actually focus something.
          .findByCssSelector('body')
            .click()
            .end()
          .sleep(500)

          // make sure we're not failing with the fix
          .findById(prefix + 'fixed-source')
            .click()
            .end()
          .sleep(500)
          .execute('return document.activeElement.id || document.activeElement.nodeName')
          .then(function(activeElementId) {
            var expected = hasTarget ? (prefix + 'fixed-target') : (prefix + 'fixed-source');
            expect(activeElementId).to.equal(expected);
          });
      };
    }

    bdd.before(function() {
      return this.remote
        .get(require.toUrl('test/pages/fix.pointer-focus-parent.test.html'))
        .setPageLoadTimeout(timeout)
        .setFindTimeout(timeout)
        .setExecuteAsyncTimeout(timeout)
        // This fix is only relevant to WebKit
        .then(pollUntil('return window.platform'))
        .then(function(platform) {
          if (!platform.is.WEBKIT) {
            this.skip('irrelevant to current browser');
          }
        }.bind(this));
    });

    bdd.it('should handle links nested in focusable containers', makeFocusClickTest('link-', false));
  });
});
