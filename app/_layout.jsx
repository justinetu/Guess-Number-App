import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import App from './index';
import GameScreen from './game_screen';
import StartGameScreen from './start_game_screen';
import GameOverScreen from './game_over_screen'

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (

    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={App} options={{ headerShown: false }}/>
        <Stack.Screen name="start_game" component={StartGameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="opponent_guess" component={GameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="game_over" component={GameOverScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  )
}

export default RootLayout;