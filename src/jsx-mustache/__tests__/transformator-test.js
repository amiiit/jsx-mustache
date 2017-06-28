import {parseMustacheTag, transformString, transform} from '../transformator'
import {Loop, MustacheImage} from '../Components'
import React from 'react'

describe('Transformator', () => {

  it('Transform string', () => {
    const tag = `<div>
    <div>
        <mustachetag data-prefix="#" data-content="images"></mustachetag>
        <img src="{{src}}"/>
        <mustachetag data-prefix="/" data-content="images"></mustachetag>
    </div>
</div>`
    const string = transformString(tag).replace(/\n/g, '').replace(/\s/g, '')

    expect(string)
      .toBe("<div><div>{{#images}}<img src=\"{{src}}\">{{/images}}</div></div>".replace(/\s/g, ''))
  })

  it('Transform loop', () => {
    const jsx = (<Loop collectionName="images">
      <MustacheImage src="src"/>
    </Loop>)
    const string = transform(jsx).replace(/\n/g, '').replace(/\s{2,}/g, '')
    expect(string).toBe('{{#images}}<img src="{{src}}">{{/images}}')
  })
})