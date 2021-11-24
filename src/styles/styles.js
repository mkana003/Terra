//Libraries
import React from 'react'
import { Dimensions } from 'react-native'

//Dimensions
export function x(size) {
  let width = Dimensions.get('window').width
  return (width / 600) * size
}

export function y(size) {
  let height = Dimensions.get('window').height
  return (height / 1300) * size
}

export const margin_left = x(15);
export const margin_top = x(32);