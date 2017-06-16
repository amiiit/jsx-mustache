import {parseMustacheTag, transform} from '../transformator'

describe('Transformator', () => {
  // it('Parse tag', () => {
  //   const tag = `<mustachetag prop1="value1" prop2="value2"></mustachetag>`
  //   const parsedTag = parseMustacheTag(tag)
  //   expect(parsedTag.properties.prop1).toBe('value1')
  //   expect(parsedTag.properties.prop2).toBe('value2')
  // })

  it('Transform string', () => {
    const tag = `<div>
    <div>
        <mustachetag data-prefix="#" data-content="images"></mustachetag>
        <img src="{{ src }}"/>
        <mustachetag data-prefix="/" data-content="images"></mustachetag>
    </div>
</div>`
    const string = transform(tag)

    expect(string.replace(/\s{2,}/g, ' ').replace(/\n/g, ''))
      .toBe("<div> <div> {{ #images }} <img src=\"{{ src }}\"> {{ /images }} </div></div>")
    console.log(string)
  })
})