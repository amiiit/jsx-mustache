import * as React from 'react'
import {CSSProperties} from "react";

const Loop = ({collectionName, children}: { collectionName: string, children: any }) => (
  <EmptyWrapper>
    <MustacheTag prefix="#" content={collectionName}/>
    {children}
    <MustacheTag prefix="/" content={collectionName}/>
  </EmptyWrapper>

)
const EmptyWrapper = ({children}: { children: any }) => <emptywrapper>{children}</emptywrapper>

const MustacheTag = ({prefix, content}: { prefix: string, content: string }) => {
  return <mustachetag data-prefix={prefix} data-content={content} />
}

const MustacheVariable = ({name}: { name: string }) => {
  return <mustachetag data-prefix='' data-content={name} />

}
const MustacheImage = ({src, style}: { src: string, style: CSSProperties }) => <img src={`{{${src}}}`} style={style}/>

export {
  MustacheTag, EmptyWrapper, Loop, MustacheImage, MustacheVariable
}