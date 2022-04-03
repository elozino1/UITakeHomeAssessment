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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    greetingContainer: {

    },
    greetingMargin: {
        marginTop: 10,
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
        paddingHorizontal: 20,
    },
    featureContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.FEATURE_CONTAINER,
        justifyContent: 'center',
        marginBottom: 5,
    },
    singleFeatureContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.FEATURE_CONTAINER,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    featureAndText: {
        alignItems: 'center',
    },
    horizontalFeatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -20,
    },
    featureImage: {
        alignSelf: 'center',
    },
    accountNumberInfo: {
        flexDirection: 'row',
        borderRadius: 30,
        width: '70%',
        backgroundColor: colors.FEATURE_CONTAINER,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 15,
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
        paddingHorizontal: 0,
    },
    searchBarInputContainerStyle: {
        backgroundColor: colors.GREY,
        paddingLeft: 10,
        borderRadius: 10,
        borderBottomWidth: 0,
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
        marginTop: 30,
    },
    serviceProviders: {
        marginRight: 20
    },
    profileInfo: {
        
    },
})
