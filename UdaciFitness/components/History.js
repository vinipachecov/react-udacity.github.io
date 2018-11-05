import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { receiveEntries, addEntry } from '../actions/index'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { connect } from 'react-redux'
import { fetchCalendarResults } from '../utils/api';
import UdacitFinessCalendar from 'udacifitness-calendar';
import { white } from '../utils/colors';
import DateHeader from './DateHeader';
import MetricCard from './MetricCard';
import { AppLoading } from 'expo';


export class History extends Component {  

  state = {
    ready: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    debugger
    console.log(this.props);

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      }).then(() => this.setState({ ready: true}));    
  }

  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View style={styles.item}>
      {
        today ?
        <View>
          <DateHeader date={formattedDate} />
          <Text style={styles.noDataText}>
            {today}
            </Text>
        </View>        
        :
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'EntryDetail',
            { entryId: key }
          )}
        > 
          <MetricCard metrics={metrics} date={formattedDate} />
        </TouchableOpacity>
      }
    </View>
  )

  renderEmptyDate (formmatedDate) {
    return (
      <View style={styles.item}>
        <DateHeader  date={formmatedDate}/>        
        <Text style={styles.noDataText}>
          You didn't log any data on this day.
        </Text>
      </View>
    )
  }

  render() {    
    const { entries } =  this.props;
    const { ready } = this.state;

    if (!ready) {
      return <AppLoading />
    }

    return (      
        <UdacitFinessCalendar
          items={entries}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
         />      
    )
  }
}

function mapStateToProps (entries) {
  return {
    entries
  }
}  

const styles = StyleSheet.create({
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity:  0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
})


export default connect(mapStateToProps)(History)
