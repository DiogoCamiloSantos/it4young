import styled, { ThemeProvider } from "styled-components/native";
import DefaultTheme, { useThemeSelector } from "../../common/theme/default-theme";
import TabItem from "./Itens/TabItem";
import IDefaultLayoutSettings from "../../domain/interfaces/IDefaultLayoutSettings.interface";

const FooterStyle = styled.View<IDefaultLayoutSettings>`
    height: 70px;
    width: 100%;
    border-top-right-radius: 36px;
    border-top-left-radius: 36px;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding: 6px 24px;
`

export default function Footer(props: IFooter) {

    return (
        <FooterStyle>
            <TabItem description="Níveis" icon="stats" onSelectedTab={() => props.onSelectedTab(0)} activated={props.activatedTabIndex === 0}></TabItem>
            <TabItem description="Pesquisas" icon="search" onSelectedTab={() => props.onSelectedTab(1)} activated={props.activatedTabIndex === 1} />
            <TabItem description="Início" icon="home" onSelectedTab={() => props.onSelectedTab(2)} activated={props.activatedTabIndex === 2} />
            <TabItem description="Chat" icon="chat" onSelectedTab={() => props.onSelectedTab(3)} activated={props.activatedTabIndex === 3} />
            <TabItem description="Perfil" icon="profile" onSelectedTab={() => props.onSelectedTab(4)} activated={props.activatedTabIndex === 4} />
        </FooterStyle>
    )
}

interface IFooter {
    onSelectedTab: Function,
    activatedTabIndex: number
}