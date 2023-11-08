import React from "react";
import { Image, View } from "react-native";
import {styles} from "./styles";
import Button from "../../components/Button";
import images from "../../assets/img";


const GameSplash = ({logo, backgroundColor, buttonColor}) => {
    return (
        <View style={[styles.container, backgroundColor]}>
            <Image style={styles.logo} source={logo}/>
            <Button style={styles.button} color={buttonColor} title="Start drinking"/>
        </View>
    )
}

export default GameSplash;