import { StyleSheet } from "react-native";
import { colors } from '../../utils/constants'

export default StyleSheet.create({
    grandContainer: {
        flex: 1
    },

    // header container
    headerContainer: {
        backgroundColor: colors.LIGHT_GREEN,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    greetingContainer: {

    },
    balanceContainer: {
        flexDirection: 'column'
    },
    customerBalance: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // features container
    featuresContainer: {
        backgroundColor: colors.LIGHT_GREEN,
    },
    accountNumberInfo: {
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: colors.DARK_GREEN,
        paddingHorizontal: 10,
        paddingVertical: 3,
        fontSize: 14,
    },
})
