import * as FreeStyle from 'free-style'

describe('styles generation', () => {
  it('freestyle api', () => {
    const rules = [
      { style: { color: 'green' }, selector: '.c9c3f3bf' },
    ]
    const style = FreeStyle.create()
    const classNames = []
    rules.forEach(rule => {
      classNames.push(style.registerStyle(rule.style))
    })
    const serializedFirstRule = `.${classNames[0]}${JSON.stringify(rules[0].style).replace(/"/g,'')}`
    expect(style.getStyles()).toEqual(serializedFirstRule)
  })
})
