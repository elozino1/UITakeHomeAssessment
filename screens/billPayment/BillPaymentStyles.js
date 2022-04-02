import { StyleSheet } from "react-native"
import { colors } from "../../utils/constants"

export default StyleSheet.create({
    grandContainer: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    searchBarContainer: {
    },
    searchBarContainerStyle: {
        backgroundColor: colors.WHITE, 
        borderBottomWidth: 0, 
        borderTopWidth: 0,
    },
    searchBarInputContainerStyle: {
        backgroundColor: colors.GREY,
        borderRadius: 10,
    },
    serviceProviderContainer: {
        backgroundColor: colors.WHITE,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    serviceProviders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    provider: {
        alignItems: 'center',
        marginTop: 10,
    },
    viewAllText: {
        color: colors.GREEN,
        textAlign: 'right',
        marginTop: 10,
    },
})