/**
 * Custom Header component 
*/

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import ArrowLeft from '../assets/images/arrow-left.svg'

const CustomHeader = ({ title }) => {
    
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={styles.grandContainer}>
                <View style={styles.container}>
                    <ArrowLeft name="arrow-back-outline" size={28} style={styles.leftMenuBack} onPress={() => navigation.goBack()} />
                    <Text style={styles.toolbarText}>{ title }</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    grandContainer: {
        flexDirection: 'row', 
        backgroundColor: '#FFFFFF', 
        paddingLeft: 20,
        paddingBottom: 10,
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftMenu: {
        marginRight: 15
    },
    leftMenuBack: {
        marginRight: 15
    },
    toolbarText: {
        fontSize: 20,
        alignSelf: 'center',
    }
})

export default CustomHeader