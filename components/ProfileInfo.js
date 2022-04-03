import React from 'react';
import { View, StyleSheet} from 'react-native';

import SendMoneySmall from '../assets/images/sendmoneysmall.svg';
import UserSquareSmall from '../assets/images/user-square-small.svg';
import { colors } from '../utils/constants';

const ProfileInfo = () => (
    <View style={styles.container}>
        <SendMoneySmall />
        <UserSquareSmall />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        shadowOffset: {
            width: 10,
            height: 10
        },
        borderRadius: 50,
        width: '30%'
    },
})

export default ProfileInfo