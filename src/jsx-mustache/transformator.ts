import * as parser from 'vdom-parser'
import * as select from 'vtree-select'
import * as toHtml from 'vdom-to-html'
import * as ReactDOMServer from 'react-dom/server'
import * as React from 'react'
import * as jsb from 'js-beautify'

const toMustache = vNode => {
  const { attributes } = vNode.properties
  const prefix = attributes['data-prefix']
  const content = attributes['data-content']
  return `{{${prefix}${content}}}`
}

interface CombinedMustacheTemplate {
  markup?: string,
  style? :string
}

const MUSTACHE_TAG_REGEX = /<mustachetag[^>]*>(<\/mustachetag>)?g/

const mTags = {}

const transform = (
  jsx: React.ReactElement<any>,
  options: any = { pretty: true },
): CombinedMustacheTemplate => {
  let string: any
  string = ReactDOMServer.renderToStaticMarkup(jsx)
  if (options.pretty) {
    string = jsb.html(string)
  }
  return {
    markup: transformString(string)
  }
}

const transformString = (middleTemplate: string) => {
  const tree = parser(middleTemplate);
  (select('mustachetag')(tree) || []).forEach((mt, index) => {
    mt.id = `mustagetagid_${index}`
    mTags[mt.id] = {
      string: toHtml(mt),
      vNode: mt,
      mustache: toMustache(mt),
    }
  })
  let treeString = toHtml(tree)
  for (let id in mTags) {
    treeString = treeString.replace(mTags[id].string, mTags[id].mustache)
  }
  treeString = treeString.replace(/<\/?emptywrapper>/g, '')
  return treeString
}

export { transform }
