"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Components_1 = require("../jsx-mustache/Components");
var uuid = require("uuid/v4");
var classnames_1 = require("classnames");
var styles = require("./ad.scss");
var Image = function (props) {
    var src;
    if (props.content.type === 'variable') {
        src = props.content.value;
    }
    else {
        console.warn('image does not contain supported content');
    }
    return React.createElement("div", { className: classnames_1["default"](props.className, styles.image) },
        React.createElement(Components_1.MustacheImage, { src: src }));
};
var Text = function (props) {
    return React.createElement("div", { className: props.className },
        React.createElement(Components_1.MustacheVariable, { name: props.content.value }));
};
var Column = function (props) {
    return React.createElement("div", { className: classnames_1["default"](props.className) }, props.content.map(function (element) { return React.createElement(Element, __assign({ key: uuid() }, element)); }));
};
var Element = function (props) {
    var instance;
    var type = props.type;
    if (type === 'image') {
        instance = React.createElement(Image, __assign({}, props));
    }
    else if (type === 'text') {
        instance = React.createElement(Text, __assign({}, props));
    }
    else if (type === 'column') {
        instance = React.createElement(Column, { content: props.content });
    }
    else {
        console.warn("No support for elements type " + props.type);
        instance = false;
    }
    if (!instance) {
        throw "No instance' " + props;
    }
    if (props.width) {
        var className = "col-" + props.width;
        instance = React.cloneElement(instance, {
            className: classnames_1["default"](instance.props.className, styles && styles[className] || className)
        });
    }
    return instance;
};
var Ad = function (props) {
    return React.createElement("div", { className: classnames_1["default"](styles && styles['ad'] || 'ad') }, props.ad.elements.map(function (element) { return React.createElement(Element, __assign({ key: uuid() }, element)); }));
};
exports["default"] = Ad;
