import { createEnumDeclaration } from "typescript";
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
        textTransform: "uppercase",
        fontFamily: 'Jomhuria',
    },
    subtitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: "uppercase",
        fontFamily: 'Inter'
    },
    container: {
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    logo: {
        width: '98%',
        height: 'auto',
        overflow: "visible",
        marginTop: 200,
        marginBottom: 200,
        padding: 10,
    },
    button: {

    }
})