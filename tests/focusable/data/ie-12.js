define(function defineDemoFocusableIE11(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "IE 12.0 32-bit (platform preview) on Windows 10 64-bit",
      "layout": "Trident",
      "manufacturer": null,
      "name": "IE",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36 Edge/12.0",
      "version": "12.0",
      "os": {
        "architecture": 64,
        "family": "Windows",
        "version": "10"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "a > img[ismap]",
      "iframe",
      "audio",
      "audio[controls]",
      "video",
      "video[controls]",
      "embed",
      "details a[href]",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "fieldset",
      "fieldset input",
      "fieldset:empty",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
    ],
    "focusEvents": [
      "input[type=text]",
      "HTML",
      "input[type=password]",
      "HTML",
      "input[type=checkbox]",
      "HTML",
      "input[type=radio]",
      "HTML",
      "input[type=submit]",
      "HTML",
      "input[type=reset]",
      "HTML",
      "select",
      "HTML",
      "textarea",
      "HTML",
      "button[type=button]",
      "HTML",
      "a[href]",
      "HTML",
      "a[href=\"\"]",
      "HTML",
      "a[href][tabindex=-1]",
      "HTML",
      "area[href].upper",
      "HTML",
      "area[href].lower",
      "HTML",
      "map.invalid-image area[href].upper",
      "HTML",
      "map.invalid-image area[href].lower",
      "HTML",
      "area[href].upper",
      "HTML",
      "map.invalid-image area[href].upper",
      "HTML",
      "area[href].upper",
      "HTML",
      "a:has([ismap])",
      "HTML",
      "a > img[ismap]",
      "HTML",
      "iframe",
      "HTML",
      "audio",
      "HTML",
      "audio[controls]",
      "HTML",
      "video",
      "HTML",
      "video[controls]",
      "HTML",
      "embed",
      "HTML",
      "details a[href]",
      "HTML",
      "details[open] a[href]",
      "HTML",
      "object[src=swf]",
      "HTML",
      "HTML",
      "object[src=swf][height=0]",
      "HTML",
      "HTML",
      "HTML",
      "HTML",
      "[contenteditable]:empty",
      "HTML",
      "[contenteditable]",
      "HTML",
      "[tabindex=-2]",
      "HTML",
      "[tabindex=-1]",
      "HTML",
      "[tabindex=0]",
      "HTML",
      "[tabindex=1]",
      "HTML",
      "[tabindex=+2]",
      "HTML",
      "[tabindex= +2]",
      "HTML",
      "[tabindex=3 ]",
      "HTML",
      "fieldset",
      "HTML",
      "fieldset input",
      "HTML",
      "fieldset:empty",
      "HTML",
      "{hidden} > a{visible}",
      "HTML",
      "{hidden} > {visible} > a",
      "HTML",
      "table tbody tr td a",
      "HTML",
      "table tbody tr{collapse} td{visible} a",
      "HTML",
      "table tbody tr{collapse} td a{visible}",
      "HTML"
    ],
    "focusRedirection": [
      "img[usemap].first --- area[href].upper",
      "img[usemap].invalid --- map.invalid-image area[href].upper",
      "img[usemap].second --- area[href].upper"
    ],
    "noFocusMethod": [
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect"
    ],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "a > img[ismap]",
      "audio[controls]",
      "video[controls]",
      "embed",
      "details a[href]",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}"
    ],
    "ally": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio",
        "audio[controls]",
        "video",
        "video[controls]",
        "embed",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "fieldset",
        "fieldset input",
        "fieldset:empty",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ],
      "tabOrder": [
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio",
        "audio[controls]",
        "video",
        "video[controls]",
        "embed",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=0]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ]
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "svg a[xlink|href]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ],
      "tabOrder": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details a[href]",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "svg a[xlink|href]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}"
      ]
    }
  };
});