import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItem: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blackBgDarker,
        padding: 20,
        borderRadius: 20,
        width: '90%'
    },
    itemTitle: {
        color: colors.white,
        fontSize: 50,
        fontWeight: '700',
        textTransform: "uppercase",
        marginLeft: 40,
        fontFamily: 'Jomhuria'
    },
    image: {
        width: 40,
        height: 40,
        overflow: "visible"
    }
})