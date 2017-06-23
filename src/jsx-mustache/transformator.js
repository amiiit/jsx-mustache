// @flow
import parser from 'vdom-parser'
import select from 'vtree-select'
import toHtml from 'vdom-to-html'
import ReactDOMServer from 'react-dom/server'
import React from 'react'


const toMustache = vNode => {
  const {attributes} = vNode.properties
  const prefix = attributes['data-prefix']
  const content = attributes['data-content']
  return `{{ ${prefix}${content} }}`
}

const MUSTACHE_TAG_REGEX = /<mustachetag[^>]*>(<\/mustachetag>)?g/

const mTags = {}

const transform = (jsx: React$Element<any>) => {
  const string = ReactDOMServer.renderToStaticMarkup(jsx)
  return transformString(string)
}

const transformString = (middleTemplate: string) => {
  const tree = parser(middleTemplate)
  select('mustachetag')(tree).forEach((mt, index) => {
    mt.id = `mustagetagid_${index}`
    mTags[mt.id] = {
      string: toHtml(mt),
      vNode: mt,
      mustache: toMustache(mt)
    }
  })
  let treeString = toHtml(tree)
  for (let id in mTags) {
    treeString = treeString.replace(mTags[id].string, mTags[id].mustache)
  }
  treeString = treeString.replace(/<\/?emptywrapper>/g,'')
  return treeString
}

export {transformString, transform}