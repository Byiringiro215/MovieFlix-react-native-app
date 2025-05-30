import React from "react";
import { View, ActivityIndicator, Text,ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "screens/about";
import HomeStack from "routes/HomeStack";
import "./global.css";

const Drawer = createDrawerNavigator();

function App() {
  const [loadFonts] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loadFonts) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#f97316" />
        <Text className="font-Poppins-Regular">Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('assets/game_bg.png')}
        className="flex-1"
      >
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default App;
