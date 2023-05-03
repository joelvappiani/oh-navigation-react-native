import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e67e22',
            }}
        >
            <Button
                title='Vers Bottom Navigator'
                onPress={() =>
                    navigation.navigate(
                        'BottomTabNavigator',
                        { screen: 'FavoritePage' }
                    )
                }
            />
        </View>
    );
}
