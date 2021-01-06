import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TextInput, TouchableOpacity
} from 'react-native';
import {Container,Content,Card} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlatList } from 'react-native-gesture-handler';
const API_KEY="jEkasE2aSQg42AuAhhJImFBdnUSedUGLP4OFi5JE"
export default class Details extends Component {
constructor(props){
    super(props);
    this.state={
        searchtext:'',
        spinner:false,
        ListArray:[],
        IdDetails:[]
    }
}

render(){
    return(
        <View>
            <Text>jo</Text>
        </View>
    );
}
}