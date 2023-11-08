import React from "react";
import { styles } from "./styles";
import { Text, Image, TouchableOpacity } from "react-native";

const ListItem = ({title, image, onPress}) => {
 
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.listItem}>
            <Image style={styles.image} source={image} />
            <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ListItem;