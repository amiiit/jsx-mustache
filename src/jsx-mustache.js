import React from 'react'

const Loop = ({collectionName, children}) => (
  <EmptyWrapper>
    <MustacheTag prefix="#" content={collectionName}/>
    {children}
    <MustacheTag prefix="/" content={collectionName}/>
  </EmptyWrapper>

)
const EmptyWrapper = ({children}) => <emptywrapper>{children}</emptywrapper>

const MustacheTag = ({prefix, content}) => {
  return <mustachetag data-prefix={prefix} data-content={content}></mustachetag>
}

const MustacheImage = ({src}) => <img src={`{{ ${src} }}`}/>

export {
  MustacheTag, EmptyWrapper, Loop, MustacheImage
}