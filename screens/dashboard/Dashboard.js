import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { stringConstants } from '../../utils/constants'
import styles from './DashboardStyles'

const Dashboard = () => {
    
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
                        <Ionicons
                            name="chevron-down-outline"
                            size={24}
                        />
                    </View>
                    <Text>{stringConstants.WALLET_BALANCE_TEXT}</Text>
                </View>
            </View>

            {/* features */}
            <View style={styles.featuresContainer}>
                <View style={styles.accountNumberInfo}>
                    <Text>{stringConstants.ACCOUNT_NUMBER_TEXT}-</Text>
                    <Text>1007856777</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard