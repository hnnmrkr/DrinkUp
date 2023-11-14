import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gradient: {
        height: '150%',
    },
    title: {
        color: colors.white,
        fontSize: 90,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 40,
        textTransform: "uppercase",
        fontFamily: 'Jomhuria'
    },
    subtitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: "uppercase",
        fontFamily: 'Inter',
    },
    list: {
        marginHorizontal: "auto",
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
    },
    listItem: {
        flex: 1,
    }
})