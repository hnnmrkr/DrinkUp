import React from "react";
import GameSplash from "../../components/GameSplash";

import images from "../../assets/img";
import { styles } from "./styles";

const Trivia = ({navigation}) => {
    return (
        <GameSplash logo={images.logos.trivia} colorTop='#F04EAF' colorBottom='#3272D1' colorButton='#2F69BA' title='Trivia' navigation={navigation}/>
    )
}
export default Trivia