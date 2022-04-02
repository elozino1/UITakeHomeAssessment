import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { stringConstants } from "../../utils/constants";
import MTN from '../../assets/images/mtn.svg';
import FingerPrint from '../../assets/images/fingerprint.svg';
import styles from './AuthorizeRechargeStyles';

const AuthorizeRecharge = () => {

    return (
        <SafeAreaView style={styles.grandContainer}>
            {/* selected service provider */}
            <View style={styles.logoContainer}>
                <MTN />
                <Text style={styles.serviceProviderTextStyle}>{stringConstants.MTN_TEXT}</Text>
            </View>

            <Text style={styles.amountStyle}>1000.00</Text>

            <Text style={styles.promptStyle}>{stringConstants.INPUT_PIN_PROMPT_TEXT}</Text>

            <View>

            {/* keypad first row */}
            <View style={styles.keypadRow}>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>1</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>2</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>3</Text>
                </View>
            </View>

            {/* keypad second row */}
            <View style={styles.keypadRow}>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>4</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>5</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>6</Text>
                </View>
            </View>

            {/* keypad third row */}
            <View style={styles.keypadRow}>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>7</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>8</Text>
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>9</Text>
                </View>
            </View>

            {/* keypad fourth row */}
            <View style={styles.keypadRow}>
                <View style={styles.fingerPrintButton}>
                    <FingerPrint style={styles.fingerPrint} />
                </View>
                <View style={styles.numberButton}>
                    <Text style={styles.number}>0</Text>
                </View>
                <View style={styles.emptyNumberButton}></View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default AuthorizeRecharge