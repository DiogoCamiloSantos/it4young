import styled from "styled-components/native";
import DefaultTheme from "../../common/theme/default-theme";

const Label = styled.Text`
    font-family: 'Comfortaa-Bold';
    color: ${props => props.theme?.color?.font || DefaultTheme.color.font};
    `

export default Label; 
