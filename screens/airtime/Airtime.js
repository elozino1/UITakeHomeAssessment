import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

    return (
        <SafeAreaView>
            <View>
                <Text>{stringConstants.NETWORK_PROVIDER_TEXT}</Text>
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

            <View>
                <Text>{stringConstants.CATEGORY_TEXT}</Text>
                <View style={styles.categoryStyles}>
                    <View style={{backgroundColor: '#548E4E', opacity: 0.08}}>
                        <Text style={{color: '#548E4E', justifyContent: 'center'}}>{stringConstants.TOPUP_TEXT}</Text>
                    </View>
                    <View>
                        <Text>{stringConstants.BUNDLE_TEXT}</Text>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default Airtime