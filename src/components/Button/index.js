import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

const Button = ({title, color}) => {
    return (
        <TouchableOpacity style={[styles.button, color]} activeOpacity={0.9}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;