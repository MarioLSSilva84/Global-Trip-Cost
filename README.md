# 🌍 Global Trip Cost Pro

**Calculadora Premium de Custos de Viagem com Geotargeting Automático**

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://global-trip-cost.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📖 Descrição

O **Global Trip Cost Pro** é uma aplicação web gratuita que permite calcular de forma rápida e precisa o custo total de uma viagem de carro. Com geotargeting automático, a calculadora adapta-se ao seu país, mostrando a moeda correta, as unidades de medida adequadas e dicas personalizadas.

Ideal para viajantes que querem planear o orçamento da sua próxima viagem, comparar custos entre rotas, ou simplesmente saber quanto gastarão em combustível e portagens.

---

## ✨ Funcionalidades Principais

- 🌐 **Geotargeting automático** – Deteta o seu país e ajusta moeda e unidades de medida
- ⛽ **Cálculo de combustível** – Calcula o custo exato de combustível com base na distância e consumo do veículo
- 🛣️ **Portagens** – Inclui custos de portagens no cálculo total
- 👥 **Divisão por passageiros** – Divide automaticamente o custo por todos os passageiros
- 🔄 **Viagem de ida e volta** – Opção para calcular custo total de viagens de regresso
- 🌍 **Multi-idioma** – Suporte para Português, Inglês, Espanhol e Francês
- 📏 **Multi-unidades** – Sistema métrico (km/L) e imperial (mpg)
- 📱 **PWA (Progressive Web App)** – Instalável em telemóvel como aplicação nativa
- 🖨️ **Impressão e partilha** – Exporta e partilha os resultados da viagem
- 💡 **Dicas de condução** – Sugestões para reduzir o consumo de combustível
- 🍪 **GDPR compliant** – Gestão de cookies e privacidade em conformidade com o RGPD

---

## 🚀 Como Usar

### 1. Aceder à Calculadora
Visite [global-trip-cost.netlify.app](https://global-trip-cost.netlify.app) – o site deteta automaticamente o seu país e configura as definições adequadas.

### 2. Inserir os Dados da Viagem

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Distância** | Distância total da viagem (km ou milhas) | 350 km |
| **Consumo** | Consumo médio do veículo (L/100km ou mpg) | 6.5 L/100km |
| **Preço do combustível** | Preço atual por litro ou galão | €1.75/L |
| **Passageiros** | Número de pessoas na viagem | 3 |
| **Portagens** | Custo total estimado em portagens | €12.50 |
| **Ida e volta** | Ativar para duplicar a distância automaticamente | ✓ |

### 3. Ver os Resultados

A calculadora mostra em tempo real:
- 💰 **Custo total** da viagem
- 👤 **Custo por passageiro**
- ⛽ **Combustível consumido** (litros ou galões)
- 📏 **Distância total** percorrida

### 4. Partilhar ou Imprimir
Use os botões de **Imprimir** 🖨️ ou **Partilhar** 📤 para guardar ou enviar os resultados.

---

## 🌐 Idiomas Suportados

| Idioma | Código | Moeda padrão |
|--------|--------|--------------|
| Português | `pt` | € (EUR) |
| Inglês | `en` | $ (USD) / £ (GBP) |
| Espanhol | `es` | € (EUR) |
| Francês | `fr` | € (EUR) |

---

## 💡 Dicas para Reduzir Custos de Viagem

1. **Manutenção regular** – Pneus bem calibrados reduzem o consumo em 3-5%
2. **Condução suave** – Evite acelerações bruscas para poupar até 15% de combustível
3. **Planear a rota** – Usar GPS eficiente economiza 10-15% de combustível
4. **Reduzir peso** – Cada 100kg extra aumenta o consumo em 2-3%
5. **Velocidade constante** – Manter 80-100 km/h usa 20% menos combustível
6. **Ar condicionado** – Usar AC aumenta o consumo em 10-15%; prefira ventilação natural

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível
- **CSS3** – Design responsivo com variáveis CSS e animações
- **JavaScript (Vanilla)** – Sem dependências externas para máxima performance
- **PWA** – Service Worker e Web App Manifest para instalação nativa
- **ipapi.co API** – Geolocalização por IP para deteção automática de país
- **Google Fonts** – Tipografia Inter e Poppins

---

## 📦 Instalação Local

```bash
# Clonar o repositório
git clone https://github.com/MarioLSSilva84/Global-Trip-Cost.git

# Entrar na pasta
cd Global-Trip-Cost

# Abrir no browser (sem servidor necessário)
open index.html
# ou usar um servidor local
npx serve .
```

---

## 🔒 Privacidade e Segurança

- **Sem registo obrigatório** – Não é necessária conta ou login
- **Dados locais** – Todos os cálculos são feitos no browser do utilizador
- **Geolocalização por IP** – Apenas o país é detetado, sem coordenadas precisas
- **GDPR compliant** – Gestão de consentimento de cookies integrada
- **Sem rastreamento** – Não há cookies de rastreamento sem consentimento

---

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/nova-funcionalidade`)
3. Commit as alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

*Desenvolvido com ❤️ para ajudar viajantes a planear as suas viagens de forma económica.*