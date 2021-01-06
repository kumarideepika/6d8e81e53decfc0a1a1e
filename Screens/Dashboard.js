import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput, TouchableOpacity
} from 'react-native';
import {Card} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlatList } from 'react-native-gesture-handler';
const API_KEY="jEkasE2aSQg42AuAhhJImFBdnUSedUGLP4OFi5JE"
export default class Dashboard extends Component {
constructor(props){
    super(props);
    this.state={
        searchtext:'',
        spinner:false,
        ListArray:[],
        IdDetails:[],
        Ismessage:false
    }
}
onChangeInput(text){
    this.setState({searchtext:text})
}

GetRandomAD(){
    this.setState({spinner:true,Ismessage:false,searchtext:''})
    return fetch ('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key='+API_KEY)
    .then((response)=>response.json())
    .then((result)=>{
    this.setState({spinner:false,ListArray:result.near_earth_objects,Ismessage:false})
    }).catch((error)=>{
    this.setState({Ismessage:true})
})
}
GetDetails=(id)=>{
    this.setState({spinner:true,ListArray:[],Ismessage:false,searchtext:id});
    return fetch ('https://api.nasa.gov/neo/rest/v1/neo/'+id+'?api_key='+API_KEY)
    .then((response)=>response.json())
    .then((result)=>{
        this.setState({spinner:false,IdDetails:result})
        if(result.code==405){
            alert("Please enter valid id");
            this.setState({spinner:false,Ismessage:false});
        }else{
            this.props.navigation.navigate('Details',{AsteroidDetails:this.state.IdDetails})
        }
    }).catch((error)=>{
        this.setState({spinner:false,Ismessage:true})
    })
}

renderItems=(item)=>{
    
    return(
        <TouchableOpacity style={styles.MainList} onPress={()=>this.GetDetails(item.item.id)}>
            <Text style={styles.textid}>{item.item.id}</Text>
        </TouchableOpacity>
    );
}
render(){
    return(
        <View style={styles.Container}>
           <Card style={styles.card}>
            <View>
                <TextInput style={styles.textinput}
                name="Asteroid"
                placeholder="Enter Asteroid ID"
                selectionColor="#999"
                onChangeText={(searchtext)=>this.onChangeInput(searchtext)}
                value={this.state.searchtext}
                />
                
            </View>
            <View>
                <Spinner
                visible={this.state.spinner}
                textContent={'Loading...'}
                textStyle={styles.spinner} />
                <TouchableOpacity onPress={()=>this.GetDetails(this.state.searchtext)} disabled={this.state.searchtext.length<1} style={[styles.submit_button,{backgroundColor:this.state.searchtext.length<1 ? '#999' : '#0947A5'}]}>
                    <Text style={styles.Submit_text}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.GetRandomAD()} style={[styles.submit_button,{marginTop:3,backgroundColor:'#0947A5'}]}><Text style={styles.Submit_text}>Random Asteroid</Text></TouchableOpacity>
            </View>
            
           </Card>
          
           <ScrollView style={styles.ScrollFlatlist} showsVerticalScrollIndicator={false}
            >
                 <View style={{alignSelf:'center',marginTop:10,fontSize:20}}>
               {this.state.Ismessage==true && 
               <View><Text>NO RECORD FOUND</Text></View>
               }
           </View>
                <FlatList 
                data={this.state.ListArray}
                renderItem={item=>this.renderItems(item)}
                
                />
            </ScrollView>
        </View>
    );
}
}

const styles = StyleSheet.create({

    Container :{
        flex:1
    },
    card:{
        marginTop:5,
        backgroundColor:'#fff',
        width:'95%',
        alignSelf:'center',
        borderRadius:6,
        height:230,


    },
    textinput:{
        padding:12,
        marginTop:25,
        width:350,
        backgroundColor:'#fff',
        borderRadius:6,
        borderWidth:1,
        borderColor:'#0f0d02',
        alignSelf:'center',
    },
    submit_button:{
        padding:14,
        width:350,
        alignSelf:'center',
        marginVertical:20,
        borderRadius:6,

    },
    Submit_text:{
        color:'#fff',
        alignSelf:'center',
        fontSize:18
    },
    spinner:{
        color:'#fff'
    },
    
    textid:{
        color:'#000',
        fontSize:18
    },
    ScrollFlatlist:{
        backgroundColor:'#fff',
        width:'97%',
        borderRadius:6,
        marginLeft:6,marginTop:-3
    },
    MainList:{
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        alignItems:'flex-start',
        marginLeft:20
    }
})