// ==UserScript==
// @name         Mendix logger script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:*/index*.html*
// @match        http://localhost:*/index-phone-preview.html*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
/* global logger,console */
'use strict';

if (window.logger && typeof logger.level !== "undefined") {
    console.log("TamperMonkey Mendix loglevel set to DEBUG");
    logger.level(logger.DEBUG);
}
