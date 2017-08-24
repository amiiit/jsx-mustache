"use strict";
exports.__esModule = true;
var React = require("react");
var storybook_1 = require("@kadira/storybook");
var example_ad_structure_json_1 = require("./example.ad_structure.json");
var example_ad_data_json_1 = require("./example.ad_data.json");
var RawTemplateView_1 = require("./RawTemplateView");
var RenderedTemplate_1 = require("./RenderedTemplate");
var transformator_1 = require("../jsx-mustache/transformator");
var Ad_1 = require("../editor/Ad");
var hogan_js_1 = require("hogan.js");
var Editor_1 = require("./Editor");
storybook_1.storiesOf('UI', module)
    .add('Show template', function () { return (React.createElement(RawTemplateView_1["default"], { ad: example_ad_structure_json_1["default"] })); })
    .add('Show rendered ad', function () {
    var template = hogan_js_1["default"].compile(transformator_1.transform(React.createElement(Ad_1["default"], { ad: example_ad_structure_json_1["default"] })));
    return React.createElement(RenderedTemplate_1["default"], { ad: template, data: example_ad_data_json_1["default"] });
})
    .add('Editor', function () {
    return React.createElement(Editor_1["default"], { ad: example_ad_structure_json_1["default"], testData: example_ad_data_json_1["default"] });
});
