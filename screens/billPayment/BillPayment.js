import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SearchBar } from 'react-native-elements';

import styles from './BillPaymentStyles'
import { stringConstants } from "../../utils/constants";
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


const BillPayment = () => {

    const [searchText, setSearchText] = useState('')


    const updateSearchText = (text) => {
        setSearchText(text)
    }

    return (
        <SafeAreaView style={styles.grandContainer}>
            {/* search bar */}
            <View style={styles.searchBarContainer}>
                <SearchBar
                    containerStyle={styles.searchBarContainerStyle}
                    inputContainerStyle={styles.searchBarInputContainerStyle}
                    placeholder="Search"
                    onChangeText={updateSearchText}
                    value={searchText}
                />
            </View>

            {/* airtime providers */}
            <View style={styles.serviceProviderContainer}>
                <Text>{stringConstants.AIRTIME_TEXT}</Text>
                <View style={styles.serviceProviders}>
                    <View style={styles.provider}>
                        <MTN />
                        <Text>{stringConstants.MTN_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Airtel />
                        <Text>{stringConstants.AIRTEL_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <NineMobile />
                        <Text>{stringConstants.NINE_MOBILE_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Glo />
                        <Text>{stringConstants.GLO_TEXT}</Text>
                    </View>
                </View>
            </View>

            {/* electricity providers */}
            <View style={styles.serviceProviderContainer}>
                <Text>{stringConstants.ELECTRICITY_TEXT}</Text>
                <View style={styles.serviceProviders}>
                    <View style={styles.provider}>
                        <Ikedc />
                        <Text>{stringConstants.IKEDC_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Ekedc />
                        <Text>{stringConstants.EKEDC_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Aedc />
                        <Text>{stringConstants.AEDC_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Aedc />
                        <Text>{stringConstants.AEDC_TEXT}</Text>
                    </View>
                </View>
                <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
            </View>

            {/* Cable TV service providers */}
            <View style={styles.serviceProviderContainer}>
                <Text>{stringConstants.ELECTRICITY_TEXT}</Text>
                <View style={styles.serviceProviders}>
                    <View style={styles.provider}>
                        <DSTV />
                        <Text>{stringConstants.DSTV_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <GOTV />
                        <Text>{stringConstants.DSTV_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <DSTV />
                        <Text>{stringConstants.DSTV_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <DSTV />
                        <Text>{stringConstants.DSTV_TEXT}</Text>
                    </View>
                </View>
                <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
            </View>

            {/* Internet service providers */}
            <View style={styles.serviceProviderContainer}>
                <Text>{stringConstants.ELECTRICITY_TEXT}</Text>
                <View style={styles.serviceProviders}>
                    <View style={styles.provider}>
                        <Smile />
                        <Text>{stringConstants.SMILE_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Spectranet />
                        <Text>{stringConstants.SPECTRANET_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Spectranet />
                        <Text>{stringConstants.SPECTRANET_TEXT}</Text>
                    </View>
                    <View style={styles.provider}>
                        <Spectranet />
                        <Text>{stringConstants.SPECTRANET_TEXT}</Text>
                    </View>
                </View>
                <Text style={styles.viewAllText}>{stringConstants.VIEW_ALL}</Text>
            </View>
        </SafeAreaView>
    )
}

export default BillPayment