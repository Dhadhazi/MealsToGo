import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

export default function App() {
  let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  let [latoLoaded] = useLato({ Lato_400Regular });

  return (
    <>
      <SafeArea>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
      </SafeArea>
      <StatusBar />
    </>
  );
}
