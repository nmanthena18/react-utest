'use strict';

var jsdom = require('jsdom');

var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

var win = doc.defaultView;

//added method for scroll
win['requestAnimationFrame'] = function() {
    return;
};

global.document = doc;
global.window = win;

var propagateToGlobal = function(window) {
    for (let key in window) {
        if (!window.hasOwnProperty(key)) {
            continue;
        }
        if (key in global) {
            continue;
        }

        global[key] = window[key];
    }
};

propagateToGlobal(win);
