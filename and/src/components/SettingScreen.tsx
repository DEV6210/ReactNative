import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    // Add other screen names if needed
};

type SettingScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function SettingScreen({ navigation }: SettingScreenProps) {
    return (
        <View>
            <Button
                title="Setting"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default SettingScreen;
