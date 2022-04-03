import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

import SendMoney from '../../assets/images/sendmoneyfeature.svg';
import LinkAccount from '../../assets/images/linkaccountfeature.svg';
import PayBills from '../../assets/images/paybillsfeature.svg';
import RequestMoney from '../../assets/images/requestmoneyfeature.svg';
import GTblock from '../../assets/images/GTblock.svg';
import MTN from '../../assets/images/mtn.svg';
import Airtel from '../../assets/images/airtel.svg';
import NINE_MOBILE from '../../assets/images/9mobile.svg';
import Glo from '../../assets/images/glo.svg';
import Ikedc from '../../assets/images/ikeja.svg';
import Ekedc from '../../assets/images/eko.svg';
import Kedco from '../../assets/images/kaduna.svg';
import Aedc from '../../assets/images/abuja.svg';
import Smile from '../../assets/images/smile.svg';
import Spectranet from '../../assets/images/spectranet.svg';
import Copy from '../../assets/images/copy.svg';
import Chevrondown from '../../assets/images/chevron-down.svg';
import Search from '../../assets/images/searchicon.svg';
import { colors, stringConstants } from '../../utils/constants';
import styles from './DashboardStyles';
import ProfileInfo from '../../components/ProfileInfo';

const Dashboard = ({navigation}) => {

    const [searchText, setSearchText] = useState('')
    const airtimeSVGComponents = [<MTN />, <Airtel />, <Glo />, <NINE_MOBILE />]
    const electricitySVGComponents = [<Ikedc />, <Ekedc />, <Kedco />, <Aedc />]
    const internetSVGComponents = [<Smile />, <Spectranet />]

    const _renderItem = ({ item }) => (
        <View style={styles.serviceProviders}>{item}</View>
    )

    const updateSearchText = (text) => {
        setSearchText(text)
    }

    const navigateToBills = () => {
        navigation.navigate('Bill Payments')
    }
    
    return (
        <SafeAreaView style={styles.grandContainer}>
            <StatusBar />
            {/* header */}
            <View style={styles.headerContainer}>
                <View style={styles.greetingContainer}>
                    <Text>{stringConstants.GREETING_TEXT}</Text>
                    <Text>{stringConstants.CUSTOMER_NAME}</Text>
                </View>

                <View style={styles.balanceContainer}>
                    <View style={styles.customerBalance}>
                        <Text>0.00</Text>
                        <Chevrondown size={24} />
                    </View>
                    <Text>{stringConstants.WALLET_BALANCE_TEXT}</Text>
                </View>
            </View>

            {/* features */}
            <View style={styles.allFeaturesContainer}>
                <View style={styles.features}>
                    {/* single feature */}
                    <View style={styles.featureAndText}>
                        <View style={styles.singleFeatureContainer}>
                            <SendMoney style={styles.featureImage}/>
                        </View>
                        <Text style={styles.singleFeatureTextStyle}>{stringConstants.SEND_MONEY_TEXT}</Text>
                    </View>

                    {/* two features one row */}
                    <View style={styles.horizontalFeatureContainer}>
                        <View style={styles.featureAndText}>
                            <View style={styles.featureContainer}>
                                <LinkAccount style={styles.featureImage} />
                            </View>
                            <Text style={styles.singleFeatureTextStyle}>{stringConstants.LINK_ACCOUNT_TEXT}</Text>
                        </View>

                        <View style={styles.featureAndText}>
                        <TouchableWithoutFeedback onPress={navigateToBills}>
                            <View>
                                <View style={styles.featureContainer}>
                                    <PayBills style={styles.featureImage} />
                                </View>
                                <Text style={styles.singleFeatureTextStyle} onPress={navigateToBills}>
                                    {stringConstants.PAY_BILLS_TEXT}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                    </View>

                    {/* single feature */}
                    <View style={{...styles.featureAndText, marginTop: -20}}>
                        <View style={styles.singleFeatureContainer}>
                            <RequestMoney style={styles.featureImage} />
                        </View>
                        <Text style={styles.singleFeatureTextStyle}>{stringConstants.REQUEST_MONEY_TEXT}</Text>
                    </View>
                </View>

                <View style={styles.accountNumberInfo}>
                    <Text>{stringConstants.ACCOUNT_NUMBER_TEXT} -</Text>
                    <Text>1007856777</Text>
                    <Copy width={15} height={15}/>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

            {/* recent transactions */}
            <View style={styles.recentTransactionsGrandContainer}>
                <View style={styles.recentTransaction}>

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
                              color='black'
                            />
                          }
                    />

                    <Text style={{marginBottom: 20, fontWeight: 'bold'}}>{stringConstants.RECENT_TRANSACTION_TEXT}</Text>
                    <Text style={{marginBottom: 15}}>{stringConstants.DATE}</Text>
                </View>

                <View style={styles.transactionContainerStyle}>
                    <View style={styles.bankAndTransaction}>
                        <GTblock style={styles.svgMargin}/>
                        <View>
                            <Text>{stringConstants.CUSTOMER_FULL_NAME_TEXT}</Text>
                            <Text>{stringConstants.CREDIT_DESCRIPTION_TEXT}</Text>
                        </View>
                    </View>
                    <Text style={{...styles.transactionAmount, color: colors.GREEN}}>100.00</Text>
                </View>
                <View style={styles.transactionContainerStyle}>
                    <View style={styles.bankAndTransaction}>
                        <GTblock style={styles.svgMargin} />
                        <View>
                            <Text>{stringConstants.CUSTOMER_FULL_NAME_TEXT}</Text>
                            <Text>{stringConstants.DEBIT_DESCRIPTION_TEXT}</Text>
                        </View>
                    </View>
                    <Text style={{...styles.transactionAmount, color: colors.RED}}>100.00</Text>
                </View>
            </View>

            {/* show more */}
            <View>
                <View style={styles.serviceProvidersGrandContainer}>
                    <View style={styles.customerBalance}>
                        <Text>{stringConstants.SHOW_MORE_TEXT}</Text>
                        <Chevrondown size={24} />
                    </View>

                    <Text>{stringConstants.BILL_PAYMENT_TEXT}</Text>

                    <ProfileInfo style={styles.profileInfo}/>

                    <Text style={{marginTop: -20}}>{stringConstants.AIRTIME_TEXT}</Text>
                    <View style={styles.serviceProvidersContainer}>
                        <FlatList
                            data={airtimeSVGComponents}
                            renderItem={_renderItem}
                            keyExtractor={(item, itemIndex) => itemIndex}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.serviceProvidersGrandContainer}>
                    <Text>{stringConstants.ELECTRICITY_TEXT}</Text>
                    <View style={styles.serviceProvidersContainer}>
                        <FlatList
                            data={electricitySVGComponents}
                            renderItem={_renderItem}
                            keyExtractor={(item, itemIndex) => itemIndex}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.serviceProvidersGrandContainer}>
                    <Text>{stringConstants.INTERNET_SERVICES_TEXT}</Text>
                    <View style={styles.serviceProvidersContainer}>
                        <FlatList
                            data={internetSVGComponents}
                            renderItem={_renderItem}
                            keyExtractor={(item, itemIndex) => itemIndex}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Dashboard