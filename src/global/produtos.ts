export type StatusEstoque = 'EM_ESTOQUE' | 'ESTOQUE_BAIXO';

export interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  estoqueMinimo: number;
}

export const produtos: Produto[] = [
  { id: '1', nome: 'Notebook Dell Inspiron 15', quantidade: 12, estoqueMinimo: 5 },
  { id: '2', nome: 'Mouse Logitech M170', quantidade: 3, estoqueMinimo: 5 },
  { id: '3', nome: 'Teclado Mecânico Redragon', quantidade: 7, estoqueMinimo: 3 },
  { id: '4', nome: 'Monitor LG 27"', quantidade: 2, estoqueMinimo: 4 },
  { id: '5', nome: 'Headset HyperX Cloud', quantidade: 15, estoqueMinimo: 5 },
  { id: '6', nome: 'Webcam Logitech C920', quantidade: 0, estoqueMinimo: 2 }
];

export function getStatusEstoque(produto: Produto): StatusEstoque {
  return produto.quantidade <= produto.estoqueMinimo ? 'ESTOQUE_BAIXO' : 'EM_ESTOQUE';
}
