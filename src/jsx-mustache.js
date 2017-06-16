import React from 'react'
import ReactDOM from 'react-dom'

const MustacheLoop = ({collectionName, children}) => (
  <EmptyWrapper>
    <MustacheTag prefix="#" content={collectionName}/>
    {children}
    <MustacheTag prefix="/" content={collectionName}/>
  </EmptyWrapper>

)
const EmptyWrapper = ({children}) => <emptywrapper>{children}</emptywrapper>

const MustacheTag = ({prefix, content}) => {
  return <mustachetag data-prefix={prefix}>{content}</mustachetag>
}

const MustacheImage = (src) => <img src={`{{ src }}`}/>
export {
  MustacheTag, EmptyWrapper, MustacheLoop, MustacheImage
}