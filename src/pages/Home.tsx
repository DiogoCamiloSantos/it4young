import { Button, View } from "react-native";
import Card from "../components/Card/Card";
import { useDispatch } from 'react-redux';
import darkTheme from "../common/theme/dark-theme";
import { useState } from "react";
import lightTheme from "../common/theme/light-theme";
import { useSelector } from "react-redux";

export default function HomePage() {
    console.log('View - 3');

    const [theme, setTheme] = useState('light');

    const dispatch = useDispatch();

    const toggleTheme = () => {
        setTheme((theme == 'light') ? 'dark' : 'light');
        dispatch({ type: 'TOGGLE_THEME', payload: (theme == 'light' ? lightTheme : darkTheme) });

 
        
    };

    return <View>
        <Card height={100}>
            <Button title="Trocar Tema" onPress={toggleTheme}></Button>
        </Card>
        <Card height={100} />
        <Card height={100} />
    </View>
}