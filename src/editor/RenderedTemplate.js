"use strict";
exports.__esModule = true;
var React = require("react");
var hogan_js_1 = require("hogan.js");
var transformator_1 = require("../jsx-mustache/transformator");
var Ad_1 = require("./Ad");
var RenderedTemplate = function (_a) {
    var ad = _a.ad, data = _a.data;
    var mustache = hogan_js_1["default"].compile(transformator_1.transform(React.createElement(Ad_1["default"], { ad: ad })));
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: mustache.render(data) } });
};
exports["default"] = RenderedTemplate;
