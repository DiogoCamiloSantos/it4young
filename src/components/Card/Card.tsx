import { ReactNode } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { useThemeSelector } from "../../common/theme/default-theme";

interface ICardStyleProps {
    height?: number;
    theme: any;
}

let CardStyle = styled.View<ICardStyleProps>`
    height: ${(props) => (props.height || '100px') + 'px'};
    background-color:  ${props => props.theme.color.primary};
    border-radius: 25px;
    padding: 16px;
    margin: 20px;

    ${Platform.select({
        ios: `
            shadow-color: #000;
            shadow-offset: 0px 2px;
            shadow-opacity: 0.1;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

export default function Card({ height, children }: ICardProps) {
    const defaultTheme = useThemeSelector();

    return <CardStyle height={height} theme={defaultTheme}>
        {children}
    </CardStyle>;
}

interface ICardProps {
    height?: number;
    children?: ReactNode;
}