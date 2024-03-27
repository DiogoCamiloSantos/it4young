import styled from "styled-components/native";
import Label from "../Label/Label";

const BadgeStyle = styled.View`
    height: 20px;
    padding: 0 5px;
    border-radius: 5px;
    background-color:  ${props => props.theme.color.emphasis};
`;

const DescriptionStyle = styled(Label)`
    color: white;
    line-height: 20px;
`;

export default function Badge({ text }: any) {
    return (
        <BadgeStyle>
            <DescriptionStyle>{text}</DescriptionStyle>
        </BadgeStyle>
    )
};