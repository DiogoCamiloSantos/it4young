import { ScrollView, View } from "react-native";
import Card from "../components/Card/Card";
import styled from "styled-components/native";


const ScrollViewStyle = styled(ScrollView)`
       

`

export default function ProfilePage() {
    console.log('View - 5');

    return <ScrollViewStyle >
        <Card height={100} />
        <Card height={100} />
        <Card height={100} />
        <Card height={100} />
        <Card height={100} />
        <Card height={100} />
        <Card height={100} />
    </ScrollViewStyle >
}