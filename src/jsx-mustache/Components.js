"use strict";
exports.__esModule = true;
var React = require("react");
var Loop = function (_a) {
    var collectionName = _a.collectionName, children = _a.children;
    return (React.createElement(EmptyWrapper, null,
        React.createElement(MustacheTag, { prefix: "#", content: collectionName }),
        children,
        React.createElement(MustacheTag, { prefix: "/", content: collectionName })));
};
exports.Loop = Loop;
var EmptyWrapper = function (_a) {
    var children = _a.children;
    return React.createElement("emptywrapper", null, children);
};
exports.EmptyWrapper = EmptyWrapper;
var MustacheTag = function (_a) {
    var prefix = _a.prefix, content = _a.content;
    return React.createElement("mustachetag", { "data-prefix": prefix, "data-content": content });
};
exports.MustacheTag = MustacheTag;
var MustacheVariable = function (_a) {
    var name = _a.name;
    return React.createElement("mustachetag", { "data-prefix": '', "data-content": name });
};
exports.MustacheVariable = MustacheVariable;
var MustacheImage = function (_a) {
    var src = _a.src;
    return React.createElement("img", { src: "{{" + src + "}}" });
};
exports.MustacheImage = MustacheImage;
