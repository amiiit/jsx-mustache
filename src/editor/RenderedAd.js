"use strict";
exports.__esModule = true;
var React = require("react");
var transformator_1 = require("../jsx-mustache/transformator");
var Ad_1 = require("./Ad");
var RenderedAd = function (_a) {
    var ad = _a.ad, data = _a.data;
    var template = hogan.compile(transformator_1.transform(React.createElement(Ad_1["default"], { ad: ad })));
    return React.createElement("h1", null, "bla"); //<RenderedTemplate template={template} data={data}/>
};
exports["default"] = RenderedAd;
