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
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    searchBarInputContainerStyle: {
        paddingLeft: 10,
        backgroundColor: colors.GREY,
        borderRadius: 10,
        borderBottomWidth: 0,
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
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    providerName: {
        textAlign: 'center',
        marginTop: 10,
    },
    viewAllText: {
        color: colors.GREEN,
        textAlign: 'right',
        marginTop: 10,
    },
})