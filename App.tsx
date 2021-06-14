import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from './src/components/radiobutton';

const propRadionButton = [
	{
		key: '1',
		text: '1',
	},
	{
		key: '2',
		text: '2',
	},
	{
		key: '3',
		text: '30,00 ------- 1x 180,00',
	},
	{
		key: '4',
		text: '4',
  },
];


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioButton prop={propRadionButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47e10'
  }
});