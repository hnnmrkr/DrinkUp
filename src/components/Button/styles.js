import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    button: {
        paddingVertical: 23,
        borderRadius: 15,
        backgroundColor: '#fff',
        width: '80%',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 20,
        textTransform: "uppercase",
        alignItems: "center",
        color: colors.white
    }
})