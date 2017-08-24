"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var RawTemplateView_1 = require("./RawTemplateView");
var RenderedTemplate_1 = require("./RenderedTemplate");
var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            ad: props.ad || {},
            testData: props.testData || {}
        };
        return _this;
    }
    Editor.prototype.render = function () {
        return React.createElement("div", { className: '' },
            React.createElement(RawTemplateView_1["default"], { ad: this.state.ad }),
            React.createElement(RenderedTemplate_1["default"], { ad: this.state.ad, data: this.state.testData }));
    };
    return Editor;
}(React.Component));
exports["default"] = Editor;
