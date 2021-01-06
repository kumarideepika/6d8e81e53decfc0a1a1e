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

export default class Details extends Component {
constructor(props){
    super(props);
  
}

render(){
    const AstroidDetails=this.props.route.params.AsteroidDetails;

    return(
        <View style={styles.container}>
            <Card style={styles.Card}>
            <Text style={{fontSize:18}}><Text style={{fontWeight:'bold'}}>Name: </Text>{" "}
            <Text style={styles.text1_sub}>{AstroidDetails.name}</Text>
            </Text>
            <View style={styles.hairline}></View>
            <Text style={styles.text1}><Text style={{fontWeight:'bold'}}>Nasa_jpl_url: </Text>{" "}
            <Text style={styles.text1_sub}>{AstroidDetails.nasa_jpl_url}</Text>
            </Text>
            <View style={styles.hairline}></View>
            <Text style={styles.text1}><Text style={{fontWeight:'bold'}}>is_potentially_hazardous_asteroid: </Text>{" "}
            <Text style={styles.text1_sub}>{AstroidDetails.is_potentially_hazardous_asteroid.toString()}</Text>
            </Text>
            <View style={styles.hairline}></View>
            

            </Card>
        </View>
    );
}
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:10
    }
    ,
    Card:{
borderWidth:1,
width:400,
height:170,
borderColor:'#ccc',
borderRadius:10,
padding:20
},
hairline:{
    backgroundColor:'#000',
    height:.5,
    width:350,
    marginLeft:0,
    marginTop:5,flex:0
},
text1:{fontSize:18,marginTop:10},
text1_sub:{color:'#562107'}
})