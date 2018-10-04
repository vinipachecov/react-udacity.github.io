import React from 'react'
import { View, Slider, Text } from 'react-native';
import PropTypes from 'prop-types'

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Slider 
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />      
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  )
}

UdaciSlider.propTypes = {

}

export default UdaciSlider

