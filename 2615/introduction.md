# Expandindo o Negocio

A locadora tem o objetivo de criar várias franquias espalhadas pelo Brasil. Para isso, queremos saber em **quais cidades nossos clientes moram**, **sem repetir o nome da cidade**.

---

## 🧱 Esquema da Tabela

### customers

| Coluna | Tipo     |
|--------|----------|
| id     | numeric  |
| name   | varchar  |
| street | varchar  |
| city   | varchar  |

---

## 🗃️ Dados da Tabela

| id | name                         | street                                | city           |
|----|------------------------------|----------------------------------------|----------------|
| 1  | Giovanna Goncalves Oliveira | Rua Mato Grosso                        | Canoas         |
| 2  | Kauã Azevedo Ribeiro        | Travessa Ibiá                          | Uberlândia     |
| 3  | Rebeca Barbosa Santos       | Rua Observatório Meteorológico         | Salvador       |
| 4  | Sarah Carvalho Correia      | Rua Antônio Carlos da Silva            | Uberlândia     |
| 5  | João Almeida Lima           | Rua Rio Taiuva                         | Ponta Grossa   |
| 6  | Diogo Melo Dias             | Rua Duzentos e Cinqüenta               | Várzea Grande  |

---

## 🎯 Objetivo

Selecionar o nome de todas as **cidades distintas** onde a locadora tem clientes. **Sem repetições.**

---

## ✅ Exemplo de Saída Esperada

| city           |
|----------------|
| Uberlândia     |
| Canoas         |
| Ponta Grossa   |
| Várzea Grande  |
| Salvador       |