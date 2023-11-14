import React from "react";
import GameSplash from "../../components/GameSplash";

import images from "../../assets/img";
import { styles } from "./styles";

const PowerHour = ({navigation}) => {
    return (
        <GameSplash logo={images.logos.powerhour} colorTop='#FECB00' colorBottom='#3C77C8' colorButton='#2F69BA' title='Power Hour' navigation={navigation}/>
    )
}
export default PowerHour