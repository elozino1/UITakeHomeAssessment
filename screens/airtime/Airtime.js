import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Contacts from '../../assets/images/contact-book.svg';
import Wallet from '../../assets/images/wallet.svg';
import FCMB from '../../assets/images/FCMB.svg';
import GTBlock from '../../assets/images/GTblock.svg';
import RadioButton from '../../assets/images/radiobutton.svg';
import styles from './AirtimeStyles';
import { stringConstants } from '../../utils/constants';

const Airtime = () => {

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
            balance: '434,533,000'
        },
        {
            logo: <FCMB />,
            bankName: stringConstants.BANK_TEXT,
            balance: '23,000'
        },
        {
            logo: <GTBlock />,
            bankName: stringConstants.BANK_TEXT,
            balance: '23,000'
        }
        
    ])

    const [rechargeAmount, setRechargeAmount] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const setUserRechargeAmount = (amount) => {
        setRechargeAmount(amount)
    }

    const setUserPhoneNumber = (number) => {
        setPhoneNumber(number)
    }

    const _renderItem = ({item}) => (
        <View style={styles.walletChoice}>
            <View style={styles.bankInfo}>
                {item.logo}
                <Text style={styles.bankNameText}>{item.bankName}</Text>
            </View>
            <View style={styles.balanceInfo}>
                <Text>{stringConstants.BALANCE_TEXT}: </Text>
                <Text style={{marginRight: 10}}>{item.balance}</Text>
                <RadioButton />
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.grandContainer}>
            <StatusBar />
            {/* network provider */}
            <View style={styles.sectionContainer}>
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
                    <View style={{backgroundColor: '#548E4E', opacity: 0.08}}>
                        <Text style={{color: '#548E4E', justifyContent: 'center'}}>{stringConstants.TOPUP_TEXT}</Text>
                    </View>
                    <View>
                        <Text>{stringConstants.BUNDLE_TEXT}</Text>
                    </View>
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
                    style={styles.amountTextInputStyle}
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
                        <Text>{stringConstants.CONTACTS_TEXT}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerStyle}></View>
                    <Text>{stringConstants.PAY_WITH_TEXT}</Text>
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
                <TouchableOpacity style={styles.purchaseButton}>
                    <Text style={styles.purchaseTextStyle}>{stringConstants.PURCHASE_TEXT}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Airtime