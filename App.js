import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importation des screens/composants
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import FavoriteScreen from './screens/FavoriteScreen';

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='UserPage'
                component={UserScreen}
            />
            <Tab.Screen
                name='FavoritePage'
                component={FavoriteScreen}
            />
        </Tab.Navigator>
    );
}
//création des stacks: navigation par liens
const Stack = createNativeStackNavigator();

//création des tabs: navigation par onglets
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='BottomTabNavigator'
                    component={BottomTabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//1.Dans un nouveau dossier OH13, créer nouveau projet expo, grâce à la commande yarn create expo-app myapp . Vérifier son bon fonctionnement avec yarn start
//2.Importer les 4 modules nécessaires à la navigation (se référer au cours)
//3. Dans un dossier screens, créer trois screens: FavoriteScreen, HomeScreen, Userscreen. Faire en sorte que les screens soient de couleur différentes, et affiche leur nom.
//4.Mettre en place une stack navigation qui permet de naviguer entre HomeScreen et UserScreen. Ajouter les boutons nécessaire dans chaque screen pour tester le fonctionnement de la navigation.
//5.Mettre en place une tab navigation qui permet de naviguer entre UserScreen et FavoriteScreen.
//Ajouter la tab navigation à la stack navigation pour permettre de naviguer de HomeScreen jusqu'à FavoriteScreen.
