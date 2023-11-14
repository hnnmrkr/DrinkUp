import React from "react";
import GameSplash from "../../components/GameSplash";

import images from "../../assets/img";
import { styles } from "./styles";

const SpinBottle = ({navigation}) => {
    return (
        <GameSplash 
        logo={images.logos.spinthebottle} 
        colorTop='#E4B949' 
        colorBottom='#C82B2B' 
        colorButton='#B62C26' 
        title='Spin The Bottle'
        fontSize={{fontSize: 70}}
        navigation={navigation}
        gameName='SpinTheBottleSplash'
        />
    )
}
export default SpinBottle