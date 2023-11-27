import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import Footer from "../components/Footer/Footer";
import { TabPageEnum } from "../domain/enums/tab-page.enum";
import ChatPage from "../pages/Chat";
import HomePage from "../pages/Home";
import LevelsPage from "../pages/Levels";
import ProfilePage from "../pages/Profile";
import ResearchsPage from "../pages/Researchs";
import styled, { ThemeProvider } from "styled-components/native";
import { useThemeSelector } from "../common/theme/default-theme";
import Nav from "../components/Nav/Nav";

const RouterViewStyle = styled.View`
    background-color: ${props => props.theme.color.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* flex-wrap: nowrap; */
    overflow-y: hidden;
`

const TabNavigationView = forwardRef((props, ref) => {
    const layout = useWindowDimensions();
    const tabRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: String(TabPageEnum.Levels) },
        { key: String(TabPageEnum.Researchs) },
        { key: String(TabPageEnum.Home) },
        { key: String(TabPageEnum.Chat) },
        { key: String(TabPageEnum.Profile) },
    ]);

    const renderScene = SceneMap({
        [TabPageEnum.Levels]: LevelsPage,
        [TabPageEnum.Researchs]: ResearchsPage,
        [TabPageEnum.Home]: HomePage,
        [TabPageEnum.Chat]: ChatPage,
        [TabPageEnum.Profile]: ProfilePage,
      });

    // const jumpToTab = (tabIndex:number) => {
    //     console.log(tabIndex);
    //     if (tabRef.current) {
            
    //       tabRef.current?.jumpToIndex(tabIndex);
    //     }
    //   };

    return <>
        <Nav />
        <TabView
            lazy={true}
            renderTabBar={() => null}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
        <Footer onSelectedTab={setIndex} activatedTabIndex={index} />
    </>
});


export default function RouterView() {
    const theme = useThemeSelector();

    return (
        <ThemeProvider theme={theme}>
            <RouterViewStyle>
                <TabNavigationView />
            </RouterViewStyle>
        </ThemeProvider>
    )
}