import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import DefaultTheme from "../../common/theme/default-theme";
import Badge from "../Badge/Badge";
import Label from "../Label/Label";

const NavStyle = styled.View`
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom-left-radius: 20px ;
  border-bottom-right-radius: 20px ;
`

const NameStyle = styled(Label)`
    font-size: 14px;
`

const Nav = () => {

    const defaultTheme = useSelector((state: any) => state.theme);
    
    useEffect(() => {
        console.log('nav', defaultTheme);
    }, [defaultTheme])
    
    
    return (
        <NavStyle>
            <NameStyle>Diogo Camilo Santos</NameStyle>
            <Badge text="5000XP"></Badge>
        </NavStyle>
    );
}

export default Nav;