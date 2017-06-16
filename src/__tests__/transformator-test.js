import {parseMustacheTag, transform} from '../transformator'

describe('Transformator', () => {
  // it('Parse tag', () => {
  //   const tag = `<mustachetag prop1="value1" prop2="value2"></mustachetag>`
  //   const parsedTag = parseMustacheTag(tag)
  //   expect(parsedTag.properties.prop1).toBe('value1')
  //   expect(parsedTag.properties.prop2).toBe('value2')
  // })

  it('Transform string', () => {
    const tag = `
<div>
    <div>
        <mustachetag data-prefix="#" data-content="collection"></mustachetag>
        <mustachetag data-prefix="/" data-content="collection"></mustachetag>
    </div>
</div>`
    const string = transform(tag)
    console.log(string)
  })
})