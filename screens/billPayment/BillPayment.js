import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';

import styles from './BillPaymentStyles'
import { colors, stringConstants } from "../../utils/constants";
import MTN from '../../assets/images/mtn.svg';
import NineMobile from '../../assets/images/9mobile.svg';
import Airtel from '../../assets/images/airtel.svg';
import Glo from '../../assets/images/glo.svg';
import Ikedc from '../../assets/images/ikeja.svg';
import Ekedc from '../../assets/images/eko.svg';
import Aedc from '../../assets/images/abuja.svg';
import DSTV from '../../assets/images/DStv.svg';
import GOTV from '../../assets/images/GOtv.svg';
import Smile from '../../assets/images/smile.svg';
import Spectranet from '../../assets/images/spectranet.svg';
import Search from '../../assets/images/searchicon.svg';


const BillPayment = ({ navigation }) => {

    const [searchText, setSearchText] = useState('')


    const updateSearchText = (text) => {
        setSearchText(text)
    }

    const buyAirtime = () => {
        navigation.navigate('Airtime')
    }

    return (
        <SafeAreaView style={styles.grandContainer}>
            <StatusBar />
            {/* search bar */}
            <View style={styles.searchBarContainer}>
            <Input
                containerStyle={styles.searchBarContainerStyle}
                inputContainerStyle={styles.searchBarInputContainerStyle}
                placeholder="Search"
                onChangeText={updateSearchText}
                value={searchText}
                leftIcon={
                    <Search
                        name='user'
                        size={24}
                        color={colors.BLACK}
                    />
                }
            />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* airtime providers */}
                <View style={styles.serviceProviderContainer}>
                    <Text>{stringConstants.AIRTIME_TEXT}</Text>
                    <View style={styles.serviceProviders}>
                        <TouchableOpacity style={styles.provider} onPress={buyAirtime}>
                            <MTN />
                            <Text style={styles.providerName}>{stringConstants.MTN_TEXT}</Text>
                        </TouchableOpacity>
                        <View style={styles.provider}>
                            <Airtel />
                            <Text style={styles.providerName}>{stringConstants.AIRTEL_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <NineMobile />
                            <Text style={styles.providerName}>{stringConstants.NINE_MOBILE_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Glo />
                            <Text style={styles.providerName}>{stringConstants.GLO_TEXT}</Text>
                        </View>
                    </View>
                </View>

                {/* electricity providers */}
                <View style={styles.serviceProviderContainer}>
                    <Text>{stringConstants.ELECTRICITY_TEXT}</Text>
                    <View style={styles.serviceProviders}>
                        <View style={styles.provider}>
                            <Ikedc />
                            <Text style={styles.providerName}>{stringConstants.IKEDC_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Ekedc />
                            <Text style={styles.providerName}>{stringConstants.EKEDC_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Aedc />
                            <Text style={styles.providerName}>{stringConstants.AEDC_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Aedc />
                            <Text style={styles.providerName}>{stringConstants.AEDC_TEXT}</Text>
                        </View>
                    </View>
                    <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
                </View>

                {/* Cable TV service providers */}
                <View style={styles.serviceProviderContainer}>
                    <Text>{stringConstants.TVBILLS_TEXT}</Text>
                    <View style={styles.serviceProviders}>
                        <View style={styles.provider}>
                            <DSTV />
                            <Text style={styles.providerName}>{stringConstants.DSTV_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <GOTV />
                            <Text style={styles.providerName}>{stringConstants.DSTV_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <DSTV />
                            <Text style={styles.providerName}>{stringConstants.DSTV_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <DSTV />
                            <Text style={styles.providerName}>{stringConstants.DSTV_TEXT}</Text>
                        </View>
                    </View>
                    <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
                </View>

                {/* Internet service providers */}
                <View style={styles.serviceProviderContainer}>
                    <Text>{stringConstants.INTERNET_SERVICES_TEXT}</Text>
                    <View style={styles.serviceProviders}>
                        <View style={styles.provider}>
                            <Smile />
                            <Text style={styles.providerName}>{stringConstants.SMILE_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Spectranet />
                            <Text style={styles.providerName}>{stringConstants.SPECTRANET_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Spectranet />
                            <Text style={styles.providerName}>{stringConstants.SPECTRANET_TEXT}</Text>
                        </View>
                        <View style={styles.provider}>
                            <Spectranet />
                            <Text style={styles.providerName}>{stringConstants.SPECTRANET_TEXT}</Text>
                        </View>
                    </View>
                    <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BillPayment