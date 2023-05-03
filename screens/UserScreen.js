import { View, Button, Text } from 'react-native';

export default function UserScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#00a8e1',
            }}
        >
            <Text>Bienvenue ! </Text>

            <Button
                title='Go to Home '
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
