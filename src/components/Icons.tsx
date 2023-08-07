import { View, Text } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

type IconProps = PropsWithChildren<{
    name : string;
}>

const Icons = ({name} : IconProps) => {
  switch (name) {
    case 'circle' :
        return   <Icon name="circle" size={50} color= 'rgb(165 140 200)' />
    case 'cross' :
         return <Icon  name="times" size={50} color= 'rgb(165 180 252)' />
    default :
        return <Icon name="window-minimize" size={50} color = {'rgb(15 23 42)'}  />
  }
}

export default Icons