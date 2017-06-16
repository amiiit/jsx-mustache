import parser from 'vdom-parser'
import select from 'vtree-select'
import toHtml from 'vdom-to-html'

const toMustache = vNode => {
  const {attributes} = vNode.properties
  const prefix = attributes['data-prefix']
  const content = attributes['data-content']
  return `{{ ${prefix}${content} }}`
}

const MUSTACHE_TAG_REGEX = /<mustachetag[^>]*>(<\/mustachetag>)?g/

const mTags = {}

const transform = middleTemplate => {
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
    const tagString = mTags[id].string
    const mustacheString = mTags[id].mustache
    // console.log('tag', tagString)
    // console.log('mustacheString', mustacheString)
    treeString = treeString.replace(mTags[id].string, mTags[id].mustache)
  }
  return treeString
}

export {transform, MUSTACHE_TAG_REGEX}