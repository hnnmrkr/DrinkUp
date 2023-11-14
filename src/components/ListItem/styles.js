import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItem: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20
    },
    itemTitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '400',
        textTransform: "uppercase",
        marginTop: 10,
        fontFamily: 'Inter'
    },
    image: {
        width: 120,
        height: 120,
        overflow: "visible"
    }
})