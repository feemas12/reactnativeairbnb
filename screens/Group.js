import React, { Component } from  "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Group extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Group</Text>
            </View>
        );
    }
}
export default  Group;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});