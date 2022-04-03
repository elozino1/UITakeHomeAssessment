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
    },
    serviceProviderTextStyle: {
        marginTop: 5,
    },
    amountStyle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
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
        backgroundColor: colors.GREY,
        justifyContent: 'center'
    },
    emptyNumberButton: {
        height: 70,
        width: 70,
        justifyContent: 'center'
    },
    pin: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 20,
        backgroundColor: colors.LIGHT_GREEN
    },
    pinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '40%'
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
})