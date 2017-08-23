"use strict";
exports.__esModule = true;
var vdom_parser_1 = require("vdom-parser");
var vtree_select_1 = require("vtree-select");
var vdom_to_html_1 = require("vdom-to-html");
var ReactDOMServer = require("react-dom/server");
var pretty_1 = require("pretty");
var toMustache = function (vNode) {
    var attributes = vNode.properties.attributes;
    var prefix = attributes['data-prefix'];
    var content = attributes['data-content'];
    return "{{" + prefix + content + "}}";
};
var MUSTACHE_TAG_REGEX = /<mustachetag[^>]*>(<\/mustachetag>)?g/;
var mTags = {};
var transform = function (jsx, options) {
    if (options === void 0) { options = { pretty: true }; }
    var string;
    string = ReactDOMServer.renderToStaticMarkup(jsx);
    if (options.pretty) {
        string = pretty_1["default"](string);
    }
    return transformString(string);
};
exports.transform = transform;
var transformString = function (middleTemplate) {
    var tree = vdom_parser_1["default"](middleTemplate);
    vtree_select_1["default"]('mustachetag')(tree).forEach(function (mt, index) {
        mt.id = "mustagetagid_" + index;
        mTags[mt.id] = {
            string: vdom_to_html_1["default"](mt),
            vNode: mt,
            mustache: toMustache(mt)
        };
    });
    var treeString = vdom_to_html_1["default"](tree);
    for (var id in mTags) {
        treeString = treeString.replace(mTags[id].string, mTags[id].mustache);
    }
    treeString = treeString.replace(/<\/?emptywrapper>/g, '');
    return treeString;
};
exports.transformString = transformString;
