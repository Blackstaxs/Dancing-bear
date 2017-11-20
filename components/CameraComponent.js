import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';
import { ImagePicker } from 'expo';

import CameraRollPicker from 'react-native-camera-roll-picker';

export default class CameraRollComponent extends Component {
	
	static navigationOptions = {
		title: 'image picker'
	};

   constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
    };
  }

     getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);                    
    console.log(this.state.selected);        
  }
	
ShowLocation() {
	
  return this.state.selected.map(function(location, i){
    return(
      <View key={i}>                           
        <Text>{location.uri}</Text>               
      </View>
    );
  });
}
	
    render() {
        
		const {navigate} = this.props.navigation;
		
        return (
			
			<View style={styles.container}>
        <View style={styles.content}>
			<Text style={styles.text}>
            <Text style={styles.bold}> </Text> Please select 5 photos
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been selected 
          </Text>
			 </View>
			 <View>
		  <Button
            title="Create Slide Show"
            onPress={() => navigate('SlideShow', { selected: this.state.selected } )} 
            />
        </View>
			
		<View>
			
			<Text style={styles.text}>
            <Text style={styles.bold}> </Text> The pictures you selected are: 
          </Text>
          
			{this.ShowLocation()}
			 </View>
			 
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          maximum={5}
          selected={this.state.selected}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages.bind(this)} />
      </View>
            
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
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
});


