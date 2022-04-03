import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

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

            <View style={styles.pinContainer}>
                <View style={styles.pin}></View>
                <View style={styles.pin}></View>
                <View style={styles.pin}></View>
                <View style={styles.pin}></View>
            </View>

            {/* keypad first row */}
            <View style={styles.keypadRow}>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>3</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* keypad second row */}
            <View style={styles.keypadRow}>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>6</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* keypad third row */}
            <View style={styles.keypadRow}>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>9</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* keypad fourth row */}
            <View style={styles.keypadRow}>
                <TouchableOpacity>
                    <View style={styles.fingerPrintButton}>
                        <FingerPrint style={styles.fingerPrint} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberButton}>
                        <Text style={styles.number}>0</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.emptyNumberButton}></View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default AuthorizeRecharge