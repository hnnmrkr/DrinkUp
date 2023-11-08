import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import images from "../../assets/img";


const GameSplash = () => {
    return (
        <View style={styles.container}>
            <Image source={images.logos.powerhour}></Image>
            <Button title="Start drinking"></Button>
        </View>
    )
}

export default GameSplash;