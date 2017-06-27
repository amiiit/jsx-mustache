import {parseMustacheTag, transformString, transform} from '../transformator'
import {Loop, MustacheImage} from '../Components'
import React from 'react'

const SectionA = () => <div> </div>

describe('Ordering', () => {

  it('Different orders', () => {
    const tag = `<div>
    <div>
        <mustachetag data-prefix="#" data-content="images"></mustachetag>
        <img src="{{ src }}"/>
        <mustachetag data-prefix="/" data-content="images"></mustachetag>
    </div>
</div>`
    const string = transformString(tag)

    expect(string.replace(/\s{2,}/g, ' ').replace(/\n/g, ''))
      .toBe("<div> <div> {{ #images }} <img src=\"{{ src }}\"> {{ /images }} </div></div>")
  })

  it('Transform loop', () => {
    const jsx = (<Loop collectionName="images">
      <MustacheImage src="src"/>
    </Loop>)
    const string = transform(jsx)
    expect(string).toBe('{{ #images }}<img src="{{ src }}">{{ /images }}')
  })
})