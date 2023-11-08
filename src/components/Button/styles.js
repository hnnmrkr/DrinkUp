import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    title: {
        fontFamily: 'Jomhuria',
        fontSize: 40,
        textTransform: "uppercase",
        color: colors.white,
        alignItems: "center"
    }
})