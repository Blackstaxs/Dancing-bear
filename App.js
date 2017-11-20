import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';      

import HomeScreenComponent from "./components/HomeScreenComponent";
import CameraRollComponent from "./components/CameraComponent";
import SlideShow from "./components/SlideShow";
import Animation from "./components/Animation";


export const SimpleApp = StackNavigator({
	
	Home: {
		screen: HomeScreenComponent
	},
	CameraRoll: {
		screen: CameraRollComponent
	},
	SlideShow: {
		screen: SlideShow
	},
	Animation: {
		screen: Animation
	}
	
});


export default class App extends React.Component {
  render() {
    return (
		
		
      <SimpleApp>   
		</SimpleApp>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
	
});
