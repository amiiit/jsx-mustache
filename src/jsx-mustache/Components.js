// @flow
import React from 'react'

const Loop = ({collectionName, children}: {collectionName: string, children: any}) => (
  <EmptyWrapper>
    <MustacheTag prefix="#" content={collectionName}/>
    {children}
    <MustacheTag prefix="/" content={collectionName}/>
  </EmptyWrapper>

)
const EmptyWrapper = ({children}: {children: any}) => <emptywrapper>{children}</emptywrapper>

const MustacheTag = ({prefix, content}: {prefix: string, content: string}) => {
  return <mustachetag data-prefix={prefix} data-content={content}></mustachetag>
}

const MustacheVariable = ({name}) => {
  return <mustachetag data-prefix='.' data-content={name}></mustachetag>

}
const MustacheImage = ({src}: {src: string}) => <img src={`{{ ${src} }}`}/>

export {
  MustacheTag, EmptyWrapper, Loop, MustacheImage, MustacheVariable
}