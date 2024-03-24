import React, { useState } from 'react';
import { Image, ImageBackground, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import styled from 'styled-components/native';
import Label from '../../components/Label/Label';

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
const background = require('../../../assets/images/login-bg.png');
const logo_g = require('../../../assets/images/logo_g.png');
const logo_ln = require('../../../assets/images/logo_ln.png');
const logo = resolveAssetSource(require('../../../assets/icons/logo.svg')).uri;
const line = resolveAssetSource(require('../../../assets/icons/line.svg')).uri;

const height = '60px';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log('Login:', login);
        console.log('Senha:', senha);
    };

    return (
        <ContainerStyle>
            <BackgroundImageStyle source={background} resizeMode="cover">
                <SvgCssUri uri={logo} />
                <FormStyle>
                    <InputStyle
                        placeholder="Login"
                        value={login}
                        onChangeText={setLogin}
                    />
                    <InputStyle
                        placeholder="Senha"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <ButtonStyle onPress={handleLogin}>
                        <Label color='white'>ACESSAR</Label>
                    </ButtonStyle>
                </FormStyle>
                <PartnerLoginWrapperStyle>
                    <PartnerLoginLabelWrapperStyle>
                        <SvgCssUri uri={line} />
                        <Label size={12} color='#C1C1C1'>
                            Ou acesse com
                        </Label>
                        <SvgCssUri uri={line} />
                    </PartnerLoginLabelWrapperStyle>
                    <PartnerLoginOptionsWrapperStyle>
                        <PartnerLoginOptionStyle>
                            <PartnerLoginOptionImageStyle source={logo_g} />
                        </PartnerLoginOptionStyle>
                        <PartnerLoginOptionStyle>
                            <PartnerLoginOptionImageStyle source={logo_ln} />
                        </PartnerLoginOptionStyle>
                    </PartnerLoginOptionsWrapperStyle>
                    <Label size={12} color='#C1C1C1'>
                        Ainda não possui um login?
                        <Label color='#DD3F94'>{` cadastre-se :)`}</Label>
                    </Label>
                </PartnerLoginWrapperStyle>
            </BackgroundImageStyle>
        </ContainerStyle>
    );
};


const ContainerStyle = styled(View)`
  background-color: ${props => props.theme.color.background};
  justify-content: space-evenly;
  align-items: center;
  padding-top: 50px;
`;

const FormStyle = styled.View`
  width: 80%;
  gap: 5px;
  margin-bottom: -20px;
`;

const InputStyle = styled(TextInput)`
  height: ${height};
  font-family: 'Comfortaa-Light';
  border-width: .5px;
  border-color: white;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  padding-horizontal: 10px;
  margin-bottom: 10px;

  ${Platform.select({
        ios: `
            shadow-color: #f3f3f3;
            shadow-offset: 1px 2px;
            shadow-opacity: 0.7;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

const Button = styled(TouchableOpacity)`
  height: ${height};
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 25px;
`;

const BackgroundImageStyle = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const PartnerLoginWrapperStyle = styled.View`
    display: flex;
`;

const ButtonStyle = styled(Button)`
    background-color: #E34D8C;
`;

const PartnerLoginLabelWrapperStyle = styled.View`
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const PartnerLoginOptionsWrapperStyle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 60px;
`;

const PartnerLoginOptionStyle = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    height: 50px;
    width: 110px;

     ${Platform.select({
        ios: `
            shadow-color: #cccccc;
            shadow-offset: 1px 2px;
            shadow-opacity: 0.7;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

const PartnerLoginOptionImageStyle = styled(Image)`
    width: 24px;
    height: 24px;
`;

export default LoginPage;