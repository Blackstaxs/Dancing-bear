import React, {Component} from 'react';
import Proptypes from 'prop-types';
import { Text, View, Button, StyleSheet, Image, ImageBackground} from 'react-native';
import { Constants, Audio } from 'expo';




export default class HomeScreenComponent extends Component {

	static navigationOptions = {
		title: 'Welcome'           
	};



	render () {
		
		const {navigate} = this.props.navigation;
	
  return (
 
	   <ImageBackground style={styles.backgroundGif} source={{uri: 'https://gifimage.net/wp-content/uploads/2017/08/monokuma-gif-15.gif'}}> 
	  <View style={styles.container}>
	
	 
	  <Text style={styles.bold}>Pick your photos</Text>
	  
	  <Button style={styles.buttons}
	  	onPress={() => navigate('CameraRoll')}
		title="START"
	 	/>
	  </View>
	  
	  <View style={styles.dancer}>
	  <Button                                             
          title="Do you wanna know why the bear is dancing?"
          onPress={async () => {
            const source = {
              uri: "http://66.90.93.122/ost/super-danganronpa-2-original-soundtrack/rxitzphgft/1-02-.mp3" 
            };
            
            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync(); 
            } catch(error) {
              console.error(error);
            }
	  		
          }}
        />
		</View>
		
		</ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
	flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
	dancer: {
    flex: 0.5,
	flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
	backgroundGif: {
	width: 360,
	height:  695,
},
	bold: {
    fontWeight: 'bold',
  },
	buttons:{
		padding: 10,
		margin: 15,
	}
});