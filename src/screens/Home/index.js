import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import ListItem from "../../components/ListItem";
import images from "../../assets/img";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Home = ({navigation}) => {
    const onPowerHourPress = () => {
        navigation.navigate('PowerHour');
      };
    return (
        <View style={styles.background}>
            <Text style={styles.title}>Drink Up</Text>
            <Text style={styles.subtitle}>Pick a game</Text>

            <View style={styles.list}>
                <ListItem title='Spin the bottle' image={images.pudelid}/>
                <ListItem title='Spin the bottle' image={images.kaktus}/>
                <ListItem
                    title='Power Hour'
                    image={images.olu}
                    onPress={onPowerHourPress}
                />
            </View>
        </View>
    )
}

export default Home;