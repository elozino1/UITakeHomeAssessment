import { StyleSheet } from "react-native"
import { colors } from "../../utils/constants"

export default StyleSheet.create({
    grandContainer: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
    },
    sectionContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    categoryStyles: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.LIGHT_GREY,
        borderRadius: 5,
    },
    sectionHeaderText: {
        marginBottom: 10,
    },
    activeCategory: {
        backgroundColor: colors.LIGHT_GREEN, 
        paddingVertical: 10, 
        width: '48%', 
        margin: 3, 
        alignItems: 'center'
    },
    activeText: {
        color: colors.DARK_GREEN,
    },
    inactiveText: {
        color: colors.BLACK,
    },
    inactiveCategory: {
        paddingVertical: 10, 
        width: '48%', 
        margin: 3, 
        alignItems: 'center'
    },
    amountTextInputStyle: {
        borderWidth: 0.5,
        borderColor: colors.LIGHT_GREY,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        padding: 10,
        width: '70%',
        color: colors.PHONE_NUMBER_INPUT_COLOR
    },
    phoneNumberInputStyle: {
        flexDirection: 'row',
    },
    contactsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.LIGHT_GREY,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: '30%',
        justifyContent: 'center',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    dividerStyle: {
        borderColor: colors.DIVIDER_COLOR,
        borderBottomWidth: 1,
        width: '40%',
    },
    walletChoice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.GREY,
        borderColor: colors.GREY,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    bankInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankNameText: {
        marginLeft: 10,
    },
    purchaseButton: {
        backgroundColor: colors.PURCHASE_BUTTON_COLOR,
        paddingVertical: 20,
        borderRadius: 15,
    },
    purchaseTextStyle: {
        color: colors.WHITE,
        textAlign: 'center',
        fontSize: 20,
    },
})