import React from "react";
import {styles} from "./styles";
import { TouchableOpacity, Text, ImageBackground } from "react-native";

const Button = ({onPress, title, style, color}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style, color]} activeOpacity={0.9}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;