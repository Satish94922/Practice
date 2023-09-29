import React from 'react'
import {Image} from 'react-native'

const CustomImage = ({focused}) => {
  return (
    <Image source={focused? require('Myproject/assets/home.png') :require('Myproject/assets/1.png')}
      style={{width:24,height:24}}
    />
    )
}

export default CustomImage