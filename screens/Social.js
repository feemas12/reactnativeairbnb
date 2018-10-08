import React, { Component } from  "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Social extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Social</Text>
            </View>
        );
    }
}
export default  Social;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});