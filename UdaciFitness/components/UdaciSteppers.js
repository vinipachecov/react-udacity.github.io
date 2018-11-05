import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { white, purple, gray } from '../utils/colors';

const UdaciSteppers = ({ max, unit, step, value, onIncrement, onDecrement }) => {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      {
        Platform.OS === 'ios' ? 
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
          style={[styles.iosBtn, { borderTopRightRadius: 0,  borderBottomRightRadius: 0}]}
          onPress={onDecrement}
          >
          <Entypo name='minus' size={30} color={purple} />
          </TouchableOpacity>        
          <TouchableOpacity 
            onPress={onIncrement}
            style={[styles.iosBtn, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}
          >
            <Entypo name='plus' size={30} color={purple} />
          </TouchableOpacity>
      </View>      
      :
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
        style={[styles.androidBtn, { borderTopRightRadius: 0,  borderBottomRightRadius: 0}]}
        onPress={onDecrement}
        >
        <FontAwesome name='minus' size={30} color={white} />
        </TouchableOpacity>        
        <TouchableOpacity 
          onPress={onIncrement}
          style={[styles.androidBtn, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}
        >
          <FontAwesome name='plus' size={30} color={white} />
        </TouchableOpacity>
      </View>     

      }
    
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
})


// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     flex: 1,
//     alignItems: 'center',
//   },
  // androidBtn: {
  //   margin: 5,
  //   backgroundColor: purple,
  //   padding: 10,
  //   borderRadius: 2,
  // },
//   iosBtn: {
//     backgroundColor: white,
//     borderColor: purple,
//     borderWidth: 1,
//     borderRadius: 3,
//     padding: 5,
//     paddingLeft: 25,
//     paddingRight: 25,
//   },

// })

export default UdaciSteppers
