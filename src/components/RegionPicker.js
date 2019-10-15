import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import { View,Text, Picker, Form ,Icon, Item} from "native-base";

export default class RegionPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noPeople:35,
      selected: '- - - - - - - - - - - -',
      options:['- - - - - - - - - - - -',
               'dolnośląskie',
               'kujawsko-pomorskie',
               'lubelskie',
               'lubuskie',
               'łódzkie',
               'małopolskie',
               'mazowieckie',
               'opolskie',
               'podkarpackie',
               'podlaskie',
               'pomorskie',
               'śląskie',
               'świętokrzyskie',
               'warmińsko-mazurskie',
               'wielkopolskie',
               'zachodniopomorskie'
               ]
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    let greeting = (this.state.selected!=this.state.options[0]) ? (
      <Text>There are {this.state.noPeople} of us in:</Text>) : (<Text>pick your region</Text>)
    let pickers = this.state.options.map(e => <Picker.Item style={styles.pickerItem} label={e}  value={e}/>)
    //placeholder and related attributer work on IOS only.  
    //will be USED when selectedValue undefined
    //could be removed from here currently unused       
    return (
          <View style={styles.container}>
          {greeting}
   
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                
                style={styles.picker}
                placeholder={this.state.options[0]}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              > 
               {pickers}
              </Picker>
        </View> 
    );
  }
}
const styles = StyleSheet.create({
  picker:{
    minWidth:250,
    maxWidth: '100%',
    flex:-1,
    //textAlign:'center',
    //justifyContent: 'center',
    //alignItems: 'center',
  },

  container: {
    flex:1,
    borderColor:'green',
    borderWidth:5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});