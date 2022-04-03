import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Contacts from '../../assets/images/contact-book.svg';
import Wallet from '../../assets/images/wallet.svg';
import FCMB from '../../assets/images/FCMB.svg';
import GTBlock from '../../assets/images/GTblock.svg';
import RadioButton from '../../assets/images/radiobutton.svg';
import SelectedRadioButton from '../../assets/images/selectedradio.svg';
import styles from './AirtimeStyles';
import { colors, stringConstants } from '../../utils/constants';

const Airtime = ({ navigation, route }) => {

    const serviceProvider = route.params

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('mtn');
    const [items, setItems] = useState([
        {label: 'MTN', value: 'mtn'},
        {label: 'Airtel', value: 'airtel'},
        {label: '9Mobile', value: '9mobile'},
        {label: 'Glo', value: 'glo'},
    ]);

    const [walletInfo, setWalletInfo] = useState([
        {
            logo: <Wallet />,
            bankName: stringConstants.WALLET_TEXT,
            balance: '434,533,000',
            radioButton: <RadioButton />
        },
        {
            logo: <FCMB />,
            bankName: stringConstants.BANK_TEXT,
            balance: '23,000',
            radioButton: <RadioButton />
        },
        {
            logo: <GTBlock />,
            bankName: stringConstants.BANK_TEXT,
            balance: '23,000',
            radioButton: <RadioButton />
        }
        
    ])

    const [rechargeAmount, setRechargeAmount] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isClicked, setIsClicked] = useState(true)
    const [isSelected, setIsSelected] = useState(false)

    const setUserRechargeAmount = (amount) => {
        setRechargeAmount(amount)
    }

    const setUserPhoneNumber = (number) => {
        setPhoneNumber(number)
    }

    const toggleButton = () => {
        setIsClicked(!isClicked)
    }

    const toggleRadio = () => {
        setIsSelected(!isSelected)
    }

    const authenticateTransaction = () => {
        navigation.navigate('Airtime Recharge')
    }

    const _renderItem = ({item}) => (
        <TouchableWithoutFeedback onPress={toggleRadio}>
            <View style={styles.walletChoice}>
                <View style={styles.bankInfo}>
                    {item.logo}
                    <Text style={styles.bankNameText}>{item.bankName}</Text>
                </View>
                <View style={styles.balanceInfo}>
                    <Text>{stringConstants.BALANCE_TEXT}: </Text>
                    <Text style={{marginRight: 10}}>{item.balance}</Text>
                    {
                        isSelected ?
                        <SelectedRadioButton />
                        :
                        <RadioButton />
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <SafeAreaView style={styles.grandContainer}>
            <ScrollView>
            {/* network provider */}
            <View style={{...styles.sectionContainer, marginTop: 20}}>
                <Text style={styles.sectionHeaderText}>{stringConstants.NETWORK_PROVIDER_TEXT}</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    showTickIcon={false}
                />
            </View>

            {/* category */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeaderText}>{stringConstants.CATEGORY_TEXT}</Text>
                <View style={styles.categoryStyles}>
                    {
                        isClicked ?
                        <TouchableOpacity style={styles.activeCategory} >
                            <Text style={styles.activeText}>{stringConstants.TOPUP_TEXT}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.inactiveCategory} onPress={toggleButton}>
                            <Text style={styles.inactiveText}>{stringConstants.TOPUP_TEXT}</Text>
                        </TouchableOpacity>
                    }

                    {
                        !isClicked ?
                        <TouchableOpacity style={styles.activeCategory} >
                            <Text style={styles.activeText}>{stringConstants.BUNDLE_TEXT}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.inactiveCategory} onPress={toggleButton}>
                            <Text style={styles.inactiveText}>{stringConstants.BUNDLE_TEXT}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>

            {/* amount */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeaderText}>{stringConstants.AMOUNT_TEXT}</Text>
                <TextInput 
                    value={rechargeAmount}
                    onChangeText={setUserRechargeAmount}
                    placeholder='Enter Amount'
                    keyboardType='numeric'
                    style={{...styles.amountTextInputStyle, width: '100%', borderRadius: 5,}}
                />
            </View>

            {/* phone number */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeaderText}>{stringConstants.PHONE_NUMBER_TEXT}</Text>
                <View style={styles.phoneNumberInputStyle}>
                    <TextInput 
                        value={phoneNumber}
                        onChangeText={setUserPhoneNumber}
                        placeholder='Enter Phone Number'
                        keyboardType='numeric'
                        style={styles.amountTextInputStyle}
                    />
                    <View style={styles.contactsContainer}>
                        <Contacts />
                        <Text style={{color: colors.PHONE_NUMBER_INPUT_COLOR, marginLeft: 5}}>{stringConstants.CONTACTS_TEXT}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerStyle}></View>
                    <Text style={{fontWeight: 'bold'}}>{stringConstants.PAY_WITH_TEXT}</Text>
                    <View style={styles.dividerStyle}></View>
                </View>
            </View>

            {/* select account */}
            <View style={styles.sectionContainer}>
                <FlatList 
                    data={walletInfo}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>

            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.purchaseButton} onPress={authenticateTransaction}>
                    <Text style={styles.purchaseTextStyle}>{stringConstants.PURCHASE_TEXT}</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Airtime