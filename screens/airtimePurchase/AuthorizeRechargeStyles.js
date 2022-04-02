import { StyleSheet } from "react-native"
import { colors } from "../../utils/constants"

export default StyleSheet.create({
    grandContainer: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 20,
        paddingBottom: 30,
        justifyContent: 'space-evenly',
    },
    logoContainer: {
        alignItems: 'center',
        // marginTop: 10,
    },
    serviceProviderTextStyle: {
        marginTop: 5,
    },
    amountStyle: {
        textAlign: 'center',
    },
    promptStyle: {
        textAlign: 'center',
    },
    keypadRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    numberButton: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: colors.BACKGROUND_COLOR,
        justifyContent: 'center'
    },
    emptyNumberButton: {
        height: 70,
        width: 70,
        justifyContent: 'center'
    },
    fingerPrintButton: {
        height: 70,
        width: 70,
        justifyContent: 'center',
    },
    fingerPrint: {
        alignSelf: 'center'
    },
    number: {
        textAlign: 'center'
    },
})