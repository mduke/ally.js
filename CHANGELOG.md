# ally.js change log

## master

* Reducing minified size from 127K to 76K (28K to 23K gzipped) by running [rollupify](https://github.com/nolanlawson/rollupify/).

---

* fixing `supports/focus-in-hiden-iframe` to avoid `document.write()` - [issue #126](https://github.com/medialize/ally.js/issues/126)
* adding [`ally.element.focus`][ally/element/focus] - [issue #121](https://github.com/medialize/ally.js/issues/121)
* removing `svgelement.prototype.focus` as this should be covered more elegantly by [`ally.element.focus`][ally/element/focus]
* fixing [`ally.element.disabled`][ally/element/disabled] to remove SVG links from the document's tabbing order in Firefox
* fixing [`ally.maintain.disabled`][ally/maintain/disabled] to *not* disable ancestors `filter` elements
* adding [rollupify](https://github.com/nolanlawson/rollupify/) to the build job

## 1.1.0 - Reality Strikes Back

*March 18th 2016.* We're continuing our journey to *make accessibility simpler*. Version 1.1.0 - the first major update follows 4 months after making ally.js public in November 2015. In this time we've released [5 beta versions](https://github.com/medialize/ally.js/releases) and pushed [about 330 commits](https://github.com/medialize/ally.js/compare/1.0.1...1.1.0) in an effort to increase browser support and fix the myriad of bugs typically encountered in version one of any software.


### The highlights

* We got rid of those pesky console warnings triggered by the library's initial tests.
* We added full support for Internet Explorer 9 and made the library *loadable but not executable* in IE8 and NodeJS.
* While version 1.0.0 was targeting *specific browsers*, version 1.1.0 is targeting *rendering engines* and thereby adding support for blink based Opera and Yandex Browser, as well as WebKit based browsers.
* We've considerably increased compatibility with browser behavior in regard to what's "focusable". The test suite we used in version 1.0.0 was flawed in many ways. A complete rewrite of the browser tests and the subsequent overhaul of the [what browsers consider focusable](http://allyjs.io/data-tables/focusable.html) tables now paint a much more accurate picture of what's going on. And all of that is covered by ally.js, as the new tables [differences between browsers and ally.js](http://allyjs.io/data-tables/focusable.is.html) show.

Even though this is a "stability release" a few new features snuck in, most notably:

* The improved [`ally.when.key`][ally/when/key] now supports modifier keys (shift, alt, control, meta) in a simple notation.
* With [`ally.maintain.tabFocus`][ally/maintain/tab-focus] we can now trap <kbd>TAB</kbd> focus in the tabsequence.


### The numbers

* ☻ We've increased test coverage from ~93% to ~99%
* ☹ The library grew from ~20KB to ~28KB gzipped (~80KB to ~126KB minified) - *yes, we grew by 50%*

A few numbers explaining the increased file size:

* ~20KB added for ever more tests and logic to identify what's focus-relevant/focusable/tabbable
* ~6KB added by sorting mechanisms for [`ally.query.tabsequence`][ally/query/tabsequence]
* ~3KB added by [domtokenlist](https://www.npmjs.com/package/domtokenlist-shim)
* ~3KB added for improved ShadowDOM support
* ~2KB added for improved keyboard event handling


### The changes

The following lists show the changes to the library grouped by domain.

#### Browsers

* Adding full support for Internet Explorer 9 - [issue #71](https://github.com/medialize/ally.js/issues/71)
* Adding full support for Microsoft Edge 12, 13
* Adding full support for Opera 34 (Blink based, behaves like Chrome)
* Adding manual focusable tests for Safari 6 and 8 on OSX
* Dropping manual focusable tests for Safari on iOS 8, keeping Safari on iOS 9
* Dropping manual focusable tests for Mobile Chrome on Android 4.4, keeping Mobile Chrome on Android 5.1

#### Dependencies

* upgrading [css.escape](https://github.com/mathiasbynens/CSS.escape) to version 1.5.0 to work around [WebKit 149175](https://bugs.webkit.org/show_bug.cgi?id=149175)
* upgrading [platform.js](https://github.com/bestiejs/platform.js) to version 1.3.1
* adding [domtokenlist-shim](https://github.com/jwilsson/domtokenlist) for IE9 DOM `classList` and SVG `classList` in IE11

#### Browser Behavior

* fixing [`ally.fix.pointerFocusChildren`][ally/fix/pointer-focus-children] to use focus identity exceptions - [issue #103](https://github.com/medialize/ally.js/issues/103)
* fixing [`ally.fix.pointerFocusInput`][ally/fix/pointer-focus-input] to properly target nested content of `<button>` and `<label>` elements

#### Focusable detection

* adding [`ally.get.focusRedirectTarget`][ally/get/focus-redirect-target] to identify elements focus is forwarded to
* adding [`ally.is.activeElement`][ally/is/active-element] to identify if an element is the activeElement within its context
* adding option `includeOnlyTabbable` to [`ally.query.firstTabbable`][ally/query/first-tabbable], [`ally.query.focusable`][ally/query/focusable], [`ally.query.tabbable`][ally/query/tabbable], [`ally.query.tabsequence`][ally/query/tabsequence] - [issue #100](https://github.com/medialize/ally.js/issues/100)
* changing [`ally.is.focusRelevant`][ally/is/focus-relevant] and [`ally.is.focusable`][ally/is/focusable] to regard `<keygen>` and `<embed>` focus-relevant but *not* focusable - [issue #82](https://github.com/medialize/ally.js/issues/82)
* changing [`ally.is.validArea`][ally/is/valid-area] to properly handle `<area href="…">` vs. `<area>` - [issue #72](https://github.com/medialize/ally.js/issues/72)
* changing [`ally.is.focusRelevant`][ally/is/focus-relevant] to properly handle `<object type="application/x-shockwave-flash">` in IE9 - [Issue #71](https://github.com/medialize/ally.js/issues/71)
* refactoring [`ally.is.focusRelevant`][ally/is/focus-relevant] to identify all elements that are either focusable, tabbable, only-tabbable or redirect focus
* refactoring [`ally.query.tabsequence`][ally/query/tabsequence] to extract `util/merge-dom-order` and `util/sort-dom-order`
* fixing [`ally.is.focusRelevant`][ally/is/focus-relevant] to identify Flexbox Layout in IE10 and IE11
* fixing [`ally.is.focusRelevant`][ally/is/focus-relevant] to consider Shadow DOM host elements
* fixing [`ally.is.focusRelevant`][ally/is/focus-relevant] to properly identify scrollable containers in Internet Explorer
* fixing [`ally.is.focusRelevant`][ally/is/focus-relevant] to consider all `<area>` elements focus relevant, moving the focusable to verification to [`ally.is.focusable`][ally/is/focusable]
* fixing [`ally.is.focusRelevant`][ally/is/focus-relevant] to properly identify SVG links in IE9
* fixing [`ally.is.focusable`][ally/is/focusable], [`ally.is.tabbable`][ally/is/tabbable] and [`ally.is.onlyTabbable`][ally/is/only-tabbable] to consider the state of the hosting `<iframe>` or `<object>` element
* fixing [`ally.is.focusable`][ally/is/focusable] to compensate Chrome being able to focus hidden `<object>` elements - [Blink 586191](https://code.google.com/p/chromium/issues/detail?id=586191)
* fixing [`ally.is.tabbable`][ally/is/tabbable] to consider `<iframe>` elements not tabbable
* fixing [`ally.is.onlyTabbable`][ally/is/only-tabbable] to not consider `<object>` elements only tabbable anymore
* fixing [`ally.is.onlyTabbable`][ally/is/only-tabbable] to not require elements to satisfy [`ally.is.visible`][ally/is/visible]
* fixing [`ally.is.visible`][ally/is/visible] to consider the state of the hosting `<iframe>` or `<object>` element
* fixing [`ally.is.disabled`][ally/is/disabled] to properly handle `<form disabled>` in IE9 - IE11
* fixing [`ally.get.focusTarget`][ally/get/focus-target] to resolve elements redirecting focus to other elements
* fixing [`ally.query.tabsequence`][ally/query/tabsequence] to return `<area>` elements at the correct position - [issue #5](https://github.com/medialize/ally.js/issues/5)
* fixing [`ally.query.tabsequence`][ally/query/tabsequence] to properly sort within Shadow DOM - [issue #6](https://github.com/medialize/ally.js/issues/6)

#### Keyboard support

* adding [`ally.maintain.tabFocus`][ally/maintain/tab-focus] to trap <kbd>TAB</kbd> focus in the tabsequence - [issue #63](https://github.com/medialize/ally.js/issues/63)
* changing [`ally.when.key`][ally/when/key] to handle modifier keys and respect `context` and `filter` options - [issue #59](https://github.com/medialize/ally.js/issues/59)
* changing [`ally.map.keycode`][ally/map/keycode] to provide alphanumeric keys and aliasing

#### Various

* adding [`ally.query.shadowHosts`][ally/query/shadow-hosts] to find elements hosting `ShadowRoot`s - [issue #110](https://github.com/medialize/ally.js/issues/110)
* adding [`ally.observe.shadowMutations`][ally/observe/shadow-mutations] to register `MutationObserver`s across nested `ShadowRoot`s - [issue #110](https://github.com/medialize/ally.js/issues/110)
* fixing [`ally.maintain.disabled`][ally/maintain/disabled] to properly handle `tabindex` attribute changes
* fixing [`ally.maintain.disabled`][ally/maintain/disabled] to properly disengage within ShadowHosts - [issue #107](https://github.com/medialize/ally.js/issues/107), [PR #108](https://github.com/medialize/ally.js/pull/108)
* fixing [`ally.maintain.disabled`][ally/maintain/disabled] to properly observe within ShadowHosts - [issue #110](https://github.com/medialize/ally.js/issues/110)
* fixing [`ally.maintain.disabled`][ally/maintain/disabled] to handle initially disabled elements - [issue #123](https://github.com/medialize/ally.js/issues/123)
* fixing [`ally.get.parents`][ally/get/parents] to resolve ancestry for `SVGElement` in Internet Explorer
* fixing [`ally.style.focusWithin`][ally/style/focus-within] to support SVG in IE10 and IE11

#### Internals

* adding `ally/util/get-content-document` to obtain the browsing context of `<object>` and `<iframe>` elements
* adding `ally/util/get-frame-element` to obtain the host element (`<object>` or `<iframe>`) of browsing context elements
* adding `supports/focus-in-hidden-iframe` to identify if content within a hidden iframe is focusable
* adding `supports/focus-object-svg-hidden` to identify if a hidden `<object>` element is focusable
* changing modules to be able to load in non-browser environments - [issue #92](https://github.com/medialize/ally.js/issues/92)
* changing user agent sniffing from detecting browser to rendering engine - [issue #97](https://github.com/medialize/ally.js/issues/97)
* refactoring `is/is.util.js` to extract image map related functions into `utils/image-map`
* refactoring `is/focus-relevant` and `is/tabbable` to allow running the identification with execptions via `is/focus-relevant.rules` and `is/tabbable.rules`, while maintaining module signature
* refactoring `console.log()` to go through `util/logger`
* refactoring `selector/focusable` to extract `util/select-in-shadows` 
* fixing `ally.is.*` to work with other documents (e.g. iframes) - [issue #78](https://github.com/medialize/ally.js/issues/78)
* fixing `supports/*` to not raise network errors - [issue #68](https://github.com/medialize/ally.js/issues/68)
* fixing `supports/*` to run when required instead of on script load, restore scroll position - [issue #60](https://github.com/medialize/ally.js/issues/60)
* fixing `supports/supports-cache` to respect ally.js version change
* fixing `supports/focus-label-tabindex` in Chrome 49
* fixing ShadowDOM related unit tests in WebKit
* fixing `SVGElement.prototype.focus` to identify Microsoft Edge 13

#### Testing

Intern unit and functional tests have been run for the following browsers, covering 99% of the library's code:

* Internet Explorer 9, 10, 11
* Edge 13
* Safari 6.2, 7.1, 8, 9
* Chrome 47
* Firefox 42, 42 with ShadowDOM enabled

#### Sources

* renamed `src/util/sort-elements-by-tabindex.js` to `src/query/tabsequence.sort-tabindex.js`


## 1.0.1 (November 20th 2015)

* aligning `package.json` in repository and npm artifact for compatibility with cdnjs


## 1.0.0 - A New Hope

*November 18th 2015.* We're embarking on a journey to *make accessibility simpler*. Version 1.0.0 - the official release - of ally.js has been 14 months in the making, but it's only the beginning of a long story - or so I hope.


### The mission

**Making accessibility simpler** (for developers) by providing

* providing core functionality (not complete solutions)
* documentation to learn about accessibility requirements
* the basis figure out how specifications need to evolve
* a common ground for the community to collaborate


### The plan

I've laid the foundation for collaboration. My [goals](https://github.com/medialize/ally.js/tree/master/GOALS.md) are laid out. *Everything* is done on github, in the open. *Everything* is up for discussion. *Anyone* can join. See [contributing to ally.js](http://allyjs.io/contributing/index.html) for more.


### The past

Version `1.0.0` is a complete rewrite from the the early `0.0.x` releases, there are no breaking changes, it *is* a giant breaking change. More than 400 commits have been made since `0.0.7`, resulting in a few changes:

* moving dependencies from bower to npm (in fact, abandoning bower altogether)
* moving source from AMD to ES6 Module Syntax
* unifying API of all functions, see the [API docs](docs/api/)
* adding ES6 build infrastructure - [issue #1](https://github.com/medialize/ally.js/issues/1)
* adding unit tests - [issue #2](https://github.com/medialize/ally.js/issues/2) (>90% coverage!)
* adding [`ally.query.firstTabbable`][ally/query/first-tabbable] (replacing `focus/first`) to find the first keyboard focusable element in a sub-tree
* adding `strategy: 'strict'` option to [`ally.query.focusable`][ally/query/focusable] to find elements by filters unavailable to `querySelectorAll()` - i.e. Shadow DOM without the "Shadow Piercing Descendant Combinator", scrollable containers, `-webkit-user-modify: read-write` - [issue #17](https://github.com/medialize/ally.js/issues/17), [issue #21](https://github.com/medialize/ally.js/issues/21)
* [`ally.query.focusable`][ally/query/focusable] no longer considers `<html>` and `<body>` focusable - [issue #31](https://github.com/medialize/ally.js/issues/31)
* adding [`ally.is.focusRelevant`][ally/is/focus-relevant] to identify technically focusable elements (refactored from [`ally.is.focusable`][ally/is/focusable])
* adding [`ally.is.onlyTabbable`][ally/is/only-tabbable] to identify elements that cannot be focused by script, but by keyboard
* adding [`ally.element.disabled`][ally/element/disabled] (refactored from `focus/disabled`) - [issue #33](https://github.com/medialize/ally.js/issues/33)
* adding [`ally.when.key`][ally/when/key] to observe simple keyboard input - [issue #47](https://github.com/medialize/ally.js/issues/47)
* adding [`ally.get.insignificantBranches`][ally/get/insignificant-branches] to find branches not relevant to a given set of elements - [issue #32](https://github.com/medialize/ally.js/issues/32)
* adding [`ally.maintain.hidden`][ally/maintain/hidden] to hide everything in the DOM that is not relevant to a given set of elements - [issue #46](https://github.com/medialize/ally.js/issues/46)
* fixing [`ally.is.visible`][ally/is/visible] by removing dimension constraint - [issue #14](https://github.com/medialize/ally.js/issues/14)
* fixing [`ally.is.focusable`][ally/is/focusable] to also identify "edge-cases" - [issue #17](https://github.com/medialize/ally.js/issues/17), [issue #20](https://github.com/medialize/ally.js/issues/20), [issue #21](https://github.com/medialize/ally.js/issues/21)

#### Breaking changes (compared to 0.0.7)

* ally.js is no longer available through bower, other than by [downloading the built archive](http://allyjs.io/getting-started.html#Installing-via-Package-Manager)
* `src/` was ES5 and AMD, it is now ES6. AMD modules are available in `dist/amd/`
* dropping `focus/first` in favor of [`ally.query.firstTabbable`][ally/query/first-tabbable]
* dropping `focus/trap` in favor of [`ally.maintain.disabled`][ally/maintain/disabled]
* [`ally.is.validArea`][ally/is/valid-area] (`dom/is-valid-area`) now returns `false` for elements that are not `<area>`
* [`ally.is.validTabindex`][ally/is/valid-tabindex] (`dom/is-valid-tabindex`) now returns `false` for elements without `tabindex` attribute
* [`ally.style.focusSource`][ally/style/focus-source] has methods `.next()` and `.repeat()` removed

#### Renamed Files

* renamed `dom/active-elements.js` to `get/active-elements.js`
* renamed `dom/focus-target.js` to `get/focus-target.js`
* renamed `dom/is-disabled.js` to `is/disabled.js`
* renamed `dom/is-focusable.js` to `is/focusable.js`
* renamed `dom/is-shadowed.js` to `is/shadowed.js`
* renamed `dom/is-tabbable.js` to `is/tabbable.js`
* renamed `dom/is-valid-area.js` to `is/valid-area.js`
* renamed `dom/is-valid-tabindex.js` to `is/valid-tabindex.js`
* renamed `dom/is-visible.js` to `is/visible.js`
* renamed `dom/node-array.js` to `util/node-array.js`
* renamed `dom/path.js` to `get/parents.js`
* renamed `dom/query-focusable.js` to `query/focusable.js`
* renamed `dom/query-tabbable.js` to `query/tabbable.js`
* renamed `dom/query-tabsequence.js` to `query/tabsequence.js`
* renamed `dom/shadow-host-ancestors.js` to `get/shadow-host-parents.js`
* renamed `dom/when-visible.js` to `when/visible-area.js`
* renamed `dom/shadow-host.js` to `get/shadow-host.js`
* renamed `dom/sort-tabindex.js` to `util/sort-elements-by-tabindex.js`
* renamed `dom/visible-quotient.js` to `util/visible-area.js`
* renamed `event/interaction-type-listener.js` to `observe/interaction-type.js`
* renamed `focus/source.js` to `style/focus-source.js`
* renamed `focus/when-visible.js` to `when/focusable.js`
* renamed `focus/within.js` to `style/focus-within.js`
* renamed `focus/disable-focus` to `maintain/disabled`


## 0.0.7 (July 8th 2015) ##

* adding `event/shadow-focus` to emit custom event when focus changes within the Shadow DOM - extracted from `focus/within`
* adding `event/interaction-type-listener` to track user input to differentiate keyboard and pointer input
* adding [`focus/source`](http://allyjs.io/examples/focus-source.html) to allow styling of `:focus` dependent on user input (keyboard, pinter, script)
* adding [`focus/disable-focus`](http://allyjs.io/examples/disable-focus.html) to render elements inert and remove them from the document's focus navigation sequence
* deprecating [`focus/trap`](http://allyjs.io/examples/trap-focus.html), use [`focus/disable-focus`](http://allyjs.io/examples/disable-focus.html) instead


## 0.0.6 (June 17th 2015) ##

* fixing [`dom/visible-quotient`](http://allyjs.io/examples/visible-quotient.html) to subtract scrollbars from visible space


## 0.0.5 (June 15th 2015) ##

* adding [`dom/when-visible`](http://allyjs.io/examples/focus-when-visible.html) to execute callback when an element becomes visible
* improving [`dom/when-visible`](http://allyjs.io/examples/focus-when-visible.html) to also wait until an element becomes focusable


## 0.0.4 (February 3rd 2015) ##

* adding [`dom/visible-quotient`](http://allyjs.io/examples/visible-quotient.html)
* adding [`focus/when-visible`](http://allyjs.io/examples/focus-when-visible.html)
* fixing [`fix-browser/pointer-focus-children`](http://allyjs.io/examples/fix-pointer-focus-children.html) to temporarily disable transitions


## 0.0.3 (January 7th 2015) ##

* adding [`fix-browser/pointer-focus-children`](http://allyjs.io/examples/fix-pointer-focus-children.html)
* adding `dom/focus-target` to find the first focusable element in an element's ancestry
* improving [`fix-browser/pointer-focus-parent`](http://allyjs.io/examples/fix-pointer-focus-parent.html) for less complexity
* improving `fix-browser` by only engaging handlers for affected browsers (yes, *user agent sniffing*, deal with it)
* fixing `dom/is-visible` to look at computed styles, not the element's styles (duh!)


## 0.0.2 (January 5th 2015) ##

* adding [`fix-browser/pointer-focus-input`](http://allyjs.io/examples/fix-pointer-focus-input.html)
* adding [`dom/active-elements`](http://allyjs.io/examples/active-elements.html) to identify the actually focsued element and its host elements in ShadowDOM
* adding [`focus/within`](http://allyjs.io/examples/focus-within.html) to "polyfill" [`:focus-within`](http://dev.w3.org/csswg/selectors-4/#the-focus-within-pseudo)
* adding warning to browser support detection when document does not have focus
* adding `supports/supports-cache` to store browser compatibility data
* adding `focus/first` to identify and focus the first `[autofocus]` or non positive tabindex (`[tabindex=1]`) element
* adding `dom/query-domsequence` to separate sorting and mutating the list from `dom/query-tabbable`
* improving [`fix-browser/pointer-focus-parent`](http://allyjs.io/examples/fix-pointer-focus-parent.html) for fewer DOM interactions and less code
* improving [`focus/trap`](http://allyjs.io/examples/trap-focus.html) to allow nothing being focus and re-acquire focus when required
* improving `selector/focusable` (thus `dom/query-focusable`) by also finding focusable shadowed elements (via `>>>` or `/deep/`, ShadowDOM) - [#11](https://github.com/medialize/ally.js/issues/11)
* fixing `event/active-element` to be dispatched on `document` rather than `document.body`
* fixing `prototype/svgelement.prototype.focus` to also cover `SVGElement.prototype.blur`
* fixing linting errors


## 0.0.1 (December 25th 2014) ##

* initial release "focus"


[ally/element/disabled]: http://allyjs.io/api/element/disabled.html
[ally/element/focus]: http://allyjs.io/api/element/focus.html
[ally/event/active-element]: http://allyjs.io/api/event/active-element.html
[ally/event/shadow-focus]: http://allyjs.io/api/event/shadow-focus.html
[ally/fix/pointer-focus-children]: http://allyjs.io/api/fix/pointer-focus-children.html
[ally/fix/pointer-focus-input]: http://allyjs.io/api/fix/pointer-focus-input.html
[ally/fix/pointer-focus-parent]: http://allyjs.io/api/fix/pointer-focus-parent.html
[ally/get/active-elements]: http://allyjs.io/api/get/active-elements.html
[ally/get/focus-target]: http://allyjs.io/api/get/focus-target.html
[ally/get/focus-redirect-target]: http://allyjs.io/api/get/focus-redirect-target.html
[ally/get/insignificant-branches]: http://allyjs.io/api/get/insignificant-branches.html
[ally/get/parents]: http://allyjs.io/api/get/parents.html
[ally/get/shadow-host-parents]: http://allyjs.io/api/get/shadow-host-parents.html
[ally/get/shadow-host]: http://allyjs.io/api/get/shadow-host.html
[ally/is/active-element]: http://allyjs.io/api/is/active-element.html
[ally/is/disabled]: http://allyjs.io/api/is/disabled.html
[ally/is/focus-relevant]: http://allyjs.io/api/is/focus-relevant.html
[ally/is/focusable]: http://allyjs.io/api/is/focusable.html
[ally/is/only-tabbable]: http://allyjs.io/api/is/only-tabbable.html
[ally/is/shadowed]: http://allyjs.io/api/is/shadowed.html
[ally/is/tabbable]: http://allyjs.io/api/is/tabbable.html
[ally/is/valid-area]: http://allyjs.io/api/is/valid-area.html
[ally/is/valid-tabindex]: http://allyjs.io/api/is/valid-tabindex.html
[ally/is/visible]: http://allyjs.io/api/is/visible.html
[ally/maintain/disabled]: http://allyjs.io/api/maintain/disabled.html
[ally/maintain/hidden]: http://allyjs.io/api/maintain/hidden.html
[ally/maintain/tab-focus]: http://allyjs.io/api/maintain/tab-focus.html
[ally/map/attribute]: http://allyjs.io/api/map/attribute.html
[ally/map/keycode]: http://allyjs.io/api/map/keycode.html
[ally/observe/interaction-type]: http://allyjs.io/api/observe/interaction-type.html
[ally/observe/shadow-mutations]: http://allyjs.io/api/observe/shadow-mutations.html
[ally/query/first-tabbable]: http://allyjs.io/api/query/first-tabbable.html
[ally/query/focusable]: http://allyjs.io/api/query/focusable.html
[ally/query/shadow-hosts]: http://allyjs.io/api/query/shadow-hosts.html
[ally/query/tabbable]: http://allyjs.io/api/query/tabbable.html
[ally/query/tabsequence]: http://allyjs.io/api/query/tabsequence.html
[ally/style/focus-source]: http://allyjs.io/api/style/focus-source.html
[ally/style/focus-within]: http://allyjs.io/api/style/focus-within.html
[ally/when/focusable]: http://allyjs.io/api/when/focusable.html
[ally/when/key]: http://allyjs.io/api/when/key.html
[ally/when/visible-area]: http://allyjs.io/api/when/visible-area.html
[ally/prototype]: http://allyjs.io/api/prototype.html
[ally/selector]: http://allyjs.io/api/selector.html
[ally/supports]: http://allyjs.io/api/supports.html
[ally/util]: http://allyjs.io/api/util.html
