import React from 'react';
import { View, StyleSheet} from 'react-native';

import SendMoneySmall from '../assets/images/sendmoneysmall.svg';
import UserSquareSmall from '../assets/images/user-square-small.svg';
import { colors } from '../utils/constants';

const ProfileInfo = () => (
    <View style={styles.grandContainer}>
        <View style={styles.container}>
            <SendMoneySmall />
            <UserSquareSmall />
        </View>
    </View>
)

const styles = StyleSheet.create({
    grandContainer: {
        alignSelf: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: colors.WHITE,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 1,
        shadowOpacity: 1,
        shadowColor: colors.GREY,
        borderRadius: 50,
        width: '35%',
        elevation: 10,
    },
})

export default ProfileInfo