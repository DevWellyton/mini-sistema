import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { tokens } from '../../global/tokens';
import { style } from './styles';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleCadastrar = () => {
    Alert.alert(
      'Sucesso',
      'Ação validada com sucesso! Produto cadastrado no sistema.',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.header}>
          <MaterialCommunityIcons
            name="package-variant-closed-check"
            size={56}
            color={tokens.colors.primary}
          />
          <Text style={style.headerSubtitle}>Preencha os dados do novo item</Text>
        </View>

        <View style={style.form}>
          <Input
            label="Nome"
            placeholder="Nome do Produto"
            value={nome}
            onChangeText={setNome}
            active
            IconLeft={
              <MaterialCommunityIcons
                name="tag-outline"
                size={28}
                color={tokens.colors.textMuted}
              />
            }
          />

          <Input
            label="Preço"
            placeholder="R$ 0,00"
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
            active={false}
            IconLeft={
              <MaterialCommunityIcons
                name="currency-usd"
                size={28}
                color={tokens.colors.textMuted}
              />
            }
          />

          <Input
            label="Quantidade de Entrada"
            placeholder="0"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
            active
            IconLeft={
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={28}
                color={tokens.colors.textMuted}
              />
            }
          />

          <Button title="CADASTRAR PRODUTO" onPress={handleCadastrar} />
        </View>
      </View>
    </View>
  );
}
