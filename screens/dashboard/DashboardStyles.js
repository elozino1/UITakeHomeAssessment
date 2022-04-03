import { StyleSheet } from "react-native";
import { colors } from '../../utils/constants'

export default StyleSheet.create({
    grandContainer: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR
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
    allFeaturesContainer: {
        backgroundColor: colors.LIGHT_GREEN,
        paddingBottom: 35,
    },
    featureContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.FEATURE_CONTAINER,
        justifyContent: 'center',
    },
    singleFeatureContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.FEATURE_CONTAINER,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    horizontalFeatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featureImage: {
        alignSelf: 'center',
    },
    accountNumberInfo: {
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: colors.FEATURE_CONTAINER,
        paddingHorizontal: 10,
        paddingVertical: 3,
        fontSize: 14,
    },

    // recent transactions
    recentTransactionsGrandContainer: {
        // marginTop: 5,
        backgroundColor: colors.WHITE,
        paddingTop: 20,
    },
    searchBarContainerStyle: {
        backgroundColor: colors.WHITE, 
        borderBottomWidth: 0, 
        borderTopWidth: 0,
        paddingBottom: 20,
        paddingHorizontal: 0,
    },
    searchBarInputContainerStyle: {
        backgroundColor: colors.GREY,
        borderRadius: 10,
    },
    recentTransaction: {
        paddingHorizontal: 20,
    },
    bankAndTransaction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    svgMargin: {
        marginRight: 15,
    },
    transactionContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.TRANSACTION_BACKGROUND_COLOR,
        borderColor: colors.GREY,
        borderWidth: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },

    // more features
    serviceProvidersGrandContainer: {
        marginBottom: 5,
        backgroundColor: colors.WHITE,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    serviceProvidersContainer: {
    },
    serviceProviders: {
        marginRight: 20
    },
    profileInfo: {
        alignContent: 'center',
    },
})
