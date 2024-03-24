import React, { useState } from "react";
import { useWindowDimensions } from 'react-native';
import { Provider } from 'react-redux';
import { TabBar, TabView } from 'react-native-tab-view';
import styled from "styled-components/native";
import DefaultTheme, { useThemeSelector } from "../common/theme/default-theme";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ChatPage from "../pages/Home/Chat";
import HomePage from "../pages/Home/Home";
import LevelsPage from "../pages/Home/Levels";
import ProfilePage from "../pages/Home/Profile";
import ResearchsPage from "../pages/Home/Researchs";
import { TabPageEnum as TabPageEnum } from "../domain/enums/tab-page.enum";
import store from "../redux/store";
import RouterView from "./RouterView";

const StarterViewStyle = styled.View`

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* flex-wrap: nowrap; */
    overflow-y: hidden;
`

const StarterView = () => {
  const layout = useWindowDimensions();
  // const theme = useThemeSelector();

  return (
    <Provider store={store}>
      <StarterViewStyle>
        <RouterView />
      </StarterViewStyle>
    </Provider>
  )
}

export default StarterView;
