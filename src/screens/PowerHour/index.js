import React from "react";
import GameSplash from "../../components/GameSplash";

import images from "../../assets/img";
import { styles } from "./styles";

const PowerHour = () => {
    return (
        <GameSplash logo={images.logos.powerhour} backgroundColor={{backgroundColor: "#3272D1"}} buttonColor={{backgroundColor: "#2D5A9E"}}/>
    )
}
export default PowerHour