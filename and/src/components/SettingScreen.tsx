import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingScreen({ navigation }) {
    console.log(navigation)
    return (
        <View>
            <Button
                title="Go to Second Screen"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

export default SettingScreen;
