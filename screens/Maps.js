import React, { Component } from  "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Maps extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Maps</Text>
            </View>
        );
    }
}
export default  Maps;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});