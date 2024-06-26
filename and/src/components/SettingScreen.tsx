import React from 'react';
import { View, Button, Alert } from 'react-native';
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

            <Button
                title='alert'
                onPress={
                    () => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Message',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                                { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
                            ],
                            { cancelable: false }
                        )
                        
                    }
                }
            />
        </View>
    );
}

export default SettingScreen;
