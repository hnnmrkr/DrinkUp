import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: colors.blackBg    },
    title: {
        color: colors.white,
        fontSize: 90,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 50,
        textTransform: "uppercase",
        fontFamily: 'Jomhuria'
    },
    subtitle: {
        color: colors.white,
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: "uppercase",
        marginTop: 10,
        fontFamily: 'Jomhuria'
    },
    list: {
        marginTop: 60
    }
})