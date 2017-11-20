import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, Image, AppRegistry, Animated, Easing, ImageBackground } from 'react-native';


import Gallery from 'react-native-image-gallery';




export default class Animation extends Component {
	
	static navigationOptions = {
		title: 'Spin Show'
	};
	
	
	
	constructor(props) {
    super(props);
	this.spinValue = new Animated.Value(0)
 	this.animatedValue = new Animated.Value(0)

    this.state = {
      imageArray: this.props.navigation.state.params.selected, 
    };
  }
	
	componentDidMount () {
  this.spin()
  this.animate()
 
  
}
	
	spin () {
  this.spinValue.setValue(0)
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 10000,
      easing: Easing.swing
    }
  ).start(() => this.spin())
}
	
		
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 30,
      duration: 60000,
      easing: Easing.linear

    }
  ).start(() => this.animate())
}

   
    render() {
        
		const {navigate} = this.props.navigation;
		console.log(this.state.imageArray);
		
		const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })
		
		 const marginLeft = this.animatedValue.interpolate({
    inputRange: [-5, 1],
    outputRange: [-100, -50]
  })
		
        return (
			
			 <ImageBackground style={styles.backgroundGif} source={{uri: 'https://gifimage.net/wp-content/uploads/2017/08/monokuma-gif-15.gif'}}>  
			<ScrollView>  
		<Animated.Image
        style={{
	  	  marginLeft,
          width: 150,
          height: 150,
	  	  left: 100,
	   	  top: -90,
          transform: [{rotate: spin}] }}
          source={{uri: this.state.imageArray[0].uri}}
      />
			
			<Animated.Image
        style={{
	  	  marginLeft,
          width: 150,
          height: 150,
	  	  left: 100,
	   	  top: -90,
          transform: [{rotate: spin}] }}
          source={{uri: this.state.imageArray[1].uri}}
      />
		
			<Animated.Image
        style={{
	  	  marginLeft,
          width: 150,
          height: 150,
	  	  left: 100,
	   	  top: -90,
          transform: [{rotate: spin}] }}
          source={{uri: this.state.imageArray[2].uri}}
      />
		
			<Animated.Image
        style={{
	  	  marginLeft,
          width: 150,
          height: 150,
	  	  left: 100,
	   	  top: -90,
          transform: [{rotate: spin}] }}
          source={{uri: this.state.imageArray[3].uri}}
      />
		
			<Animated.Image
        style={{
	  	  marginLeft,
          width: 150,
          height: 150,
	  	  left: 100,
		  flex: 1,
	   	  top: -90,
          transform: [{rotate: spin}] }}
          source={{uri: this.state.imageArray[4].uri}}
      />
		
			
			
		</ScrollView>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
	backgroundGif: {
	width: 360,
	height:  695,
},
  
});

