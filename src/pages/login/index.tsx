import React, { useState } from "react";

// npx expo start --tunnel

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import type { RootStackParamList } from "../../routes/types";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: LoginProps){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    function getLogin(){
        if(!email || !password){
            return Alert.alert('Atenção','Informe os campos obrigatórios')
        }

        setLoading(true)

        setTimeout(()=>{
            setLoading(false)

            if(email == "usuario@yahoo.com" && password == '12345'){
                navigation.replace('BottomRoutes')
            }else{
                Alert.alert('Usuário não encontrado')
            }
        },1500)
    }

    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo} //chama o style da imagem

                ></Image>

                <Text style={style.text}>Bem Vindo de volta !</Text>

            </View>



            <View style={style.boxMid}>

                <Text style={style.titleInput}>Endereço de e-mail</Text>

                <View style={style.BoxInput}>

                    <TextInput style={style.Input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    ></TextInput>

                    <MaterialIcons name="email" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

                <Text style={style.titleInput}>Senha</Text>

                <View style={style.BoxInput}>

                    <TextInput style={style.Input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    ></TextInput>

                    <MaterialIcons name="password" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

            </View>

            <View style={style.boxBottom}>

                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'#FFF'} size={'small'}/>
                            :
                            <Text style={style.textButton}>Entrar</Text>

                    }


                </TouchableOpacity>

            </View>

            <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text> </Text>

        </View>

    )
}
