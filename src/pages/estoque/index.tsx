import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StatusBadge } from '../../components/statusBadge';
import { getStatusEstoque, produtos } from '../../global/produtos';
import { tokens } from '../../global/tokens';
import { style } from './styles';

export default function Estoque() {
  const totalEstoqueBaixo = produtos.filter(
    (produto) => getStatusEstoque(produto) === 'ESTOQUE_BAIXO'
  ).length;

  return (
    <View style={style.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={style.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <MaterialCommunityIcons
                name="warehouse"
                size={56}
                color={tokens.colors.primary}
              />
              <Text style={style.headerSubtitle}>
                Acompanhe a quantidade disponível de cada item
              </Text>
            </View>

            <View style={style.summary}>
              <View style={style.summaryItem}>
                <Text style={style.summaryValue}>{produtos.length}</Text>
                <Text style={style.summaryLabel}>Itens cadastrados</Text>
              </View>
              <View style={style.summaryDivider} />
              <View style={style.summaryItem}>
                <Text style={[style.summaryValue, { color: tokens.colors.danger }]}>
                  {totalEstoqueBaixo}
                </Text>
                <Text style={style.summaryLabel}>Estoque baixo</Text>
              </View>
            </View>

            <Text style={style.sectionTitle}>Itens em estoque</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={style.card}>
            <View style={style.cardIcon}>
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={24}
                color={tokens.colors.primary}
              />
            </View>

            <View style={style.cardInfo}>
              <Text style={style.cardName} numberOfLines={2}>
                {item.nome}
              </Text>
              <View style={style.cardMeta}>
                <Text style={style.cardQuantity}>{item.quantidade} un. em estoque</Text>
                <StatusBadge status={getStatusEstoque(item)} />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={style.empty}>Nenhum produto cadastrado até o momento.</Text>
        }
      />
    </View>
  );
}
