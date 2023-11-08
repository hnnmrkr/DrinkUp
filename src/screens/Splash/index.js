import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import ListItem from "../../components/ListItem";
import images from "../../assets/img";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Splash = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Drink Up</Text>
            <Text style={styles.subtitle}>Pick a game</Text>

            <View style={styles.list}>
                <ListItem title='Spin the bottle' image={images.pudelid}></ListItem>
                <ListItem title='Spin the bottle' image={images.kaktus}></ListItem>
                <ListItem
                    title='Power Hour'
                    image={images.olu}
                    navigation={navigation}
                    gameName="Power Hour"
                />
            </View>
        </View>
    )
}

export default Splash;