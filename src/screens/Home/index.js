import React from "react";
import { styles } from "./styles";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import ListItem from "../../components/ListItem";
import images from "../../assets/img";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from "react-native-linear-gradient";

const Stack = createStackNavigator();


const Home = ({navigation}) => {
    const onPowerHourPress = () => {
        navigation.navigate('PowerHour');
      };
      const onTriviaPress = () => {
        navigation.navigate('Trivia')
      };
      const onSpinTheBottlePress = () => {
        navigation.navigate('SpinTheBottle')
      };
    
    return (
        
        <LinearGradient style={styles.gradient} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y:1.0}} locations={[0,0.5,0.6]} colors={['#7091D1', '#A64E8D']}>
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.title}>Drink Up!</Text>
            <Text style={styles.subtitle}>Party game</Text>

            <View style={styles.list}>
                <ListItem
                style={styles.listItem}
                title='Spin the bottle'
                image={images.pudelid}
                onPress={onSpinTheBottlePress}
                />
                <ListItem
                style={styles.listItem} 
                title='Trivia' 
                image={images.kaktus}
                onPress={onTriviaPress}
                />
                <ListItem
                    style={styles.listItem}
                    title='Power Hour'
                    image={images.olu}
                    onPress={onPowerHourPress}
                />
            </View>
        </ScrollView>
        </SafeAreaView>
        </LinearGradient> 
    )
}

export default Home;