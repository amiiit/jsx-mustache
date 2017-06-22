const Image = ({src}) => {
  return <img src={`{{ ${src} }}`}/>
}

export {Image}