import React from "react";
import { Image, View, ScrollView, SafeAreaView, Text } from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import LinearGradient from "react-native-linear-gradient";


const SpinBottleGame = ({logo, colorTop, colorBottom, colorButton, title, navigation, fontSize, gameName}) => {

    const onBackToGamesPress = () => {
        navigation.goBack()
    }

    const onContinue = () => {
    
    }

    return (
        <LinearGradient style={styles.gradient} start={{x: 0.0, y: 0.0}} end={{x: 0.5, y:0.7}} locations={[0,1.0,0]} colors={[colorTop, colorBottom]}>
            <SafeAreaView>
                <ScrollView>
                    <View style={[styles.container]}>
                        <Text style={[styles.title, fontSize]}>{title}</Text>
                        <Text style={styles.subtitle}>Party game</Text>

                        <Image style={styles.logo} source={logo}/>
                        <Button style={styles.button} color={{backgroundColor: `${colorTop}`}} title="Continue" onPress={onContinue} />
                        <Button style={{marginTop: 20}} color={{backgroundColor: `${colorButton}`}} title="Back to games" onPress={onBackToGamesPress}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default SpinBottleGame;