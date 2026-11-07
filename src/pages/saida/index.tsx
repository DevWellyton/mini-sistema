import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Select, SelectOption } from '../../components/select';
import { tokens } from '../../global/tokens';
import { style } from './styles';

const MOTIVOS: SelectOption[] = [
  { label: 'Venda', value: 'venda' },
  { label: 'Avarias', value: 'avarias' },
  { label: 'Uso Interno', value: 'uso-interno' }
];

export default function Saida() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleRegistrar = () => {
    const motivoSelecionado = MOTIVOS.find((option) => option.value === motivo);

    Alert.alert(
      'Saída registrada',
      `Retirada registrada${motivoSelecionado ? ` por ${motivoSelecionado.label}` : ''}. O saldo será atualizado no Controle de Estoque.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={style.content}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}
      >
        <View style={style.header}>
          <MaterialCommunityIcons
            name="tray-arrow-up"
            size={56}
            color={tokens.colors.primary}
          />
          <Text style={style.headerSubtitle}>Registre a retirada de itens do estoque</Text>
        </View>

        <View style={style.form}>
          <Input
            label="Nome do produto"
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
            label="Quantidade de saída"
            placeholder="0"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="number-pad"
            active={false}
            IconLeft={
              <MaterialCommunityIcons
                name="package-variant-minus"
                size={28}
                color={tokens.colors.textMuted}
              />
            }
          />

          <Select
            label="Motivo da retirada"
            placeholder="Selecione o motivo"
            options={MOTIVOS}
            value={motivo}
            onChange={setMotivo}
          />
        </View>

        <Button
          title="REGISTRAR SAÍDA"
          onPress={handleRegistrar}
          IconLeft={
            <MaterialCommunityIcons
              name="tray-arrow-up"
              size={20}
              color={tokens.colors.white}
            />
          }
        />

        <View style={style.hint}>
          <MaterialCommunityIcons
            name="information-outline"
            size={20}
            color={tokens.colors.textMuted}
          />
          <Text style={style.hintText}>
            O saldo do produto será atualizado automaticamente no Controle de Estoque.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
