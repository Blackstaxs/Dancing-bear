import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';


import Gallery from 'react-native-image-gallery';




export default class SlideShow extends Component {
	
	static navigationOptions = {
		title: 'Slide Show'
	};
	
	
	
	constructor(props) {
    super(props);

    this.state = {
      imageArray: this.props.navigation.state.params.selected,  
    };
  }
	
	

   
    render() {
        
		const {navigate} = this.props.navigation;
		console.log(this.state.imageArray);
		
		
		
        return (
			
			 
			
			<ScrollView>  
		 <Button
            title="Take a Spin!"
            onPress={() => navigate('Animation', { selected: this.state.imageArray } )}  
            />
		
		
      		 <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          { source: { uri: this.state.imageArray[0].uri }, dimensions: { width: 150, height: 150 } },
          { source: { uri: this.state.imageArray[1].uri }, dimensions: { width: 150, height: 150 } },
          { source: { uri: this.state.imageArray[2].uri }, dimensions: { width: 150, height: 150 } },
          { source: { uri: this.state.imageArray[3].uri }, dimensions: { width: 150, height: 150 } },
          { source: { uri: this.state.imageArray[4].uri }, dimensions: { width: 150, height: 150 } }
        ]}
      />
			
        
		</ScrollView>
            
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
  
});

