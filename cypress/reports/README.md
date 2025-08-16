# 📊 **Relatórios de Teste - QACommerce**

Este diretório contém os relatórios gerados pelos testes automatizados do Cypress.

## 🎯 **Como Visualizar os Relatórios**

### **💻 Localmente:**
1. Execute os testes com relatório:
   ```bash
   npm run test:report
   ```

2. Abra o relatório HTML:
   ```
   cypress/reports/merged-report.html
   ```

### **☁️ No GitHub Actions (CI):**
1. Acesse: https://github.com/camilagomo/camila-portifolio/actions
2. Clique na execução desejada
3. Na seção **"Artifacts"**, baixe: `cypress-test-report`
4. Extraia o arquivo e abra `merged-report.html`

## 📋 **O que contém o relatório:**

- ✅ **Resumo dos testes:** Total, passou, falhou
- 📊 **Estatísticas por categoria:** Smoke, Regression, Bugs
- 🕒 **Tempo de execução:** Por teste e total
- 📸 **Screenshots:** Em caso de falhas
- 📹 **Vídeos:** Gravação dos testes (se habilitado)
- 📝 **Logs detalhados:** Para debugging

## 🎨 **Aparência do Relatório:**

O relatório HTML é interativo e inclui:
- Dashboard com gráficos
- Filtros por status (passou/falhou)
- Detalhes expandíveis de cada teste
- Timeline de execução
- Informações do ambiente

## 📁 **Estrutura dos Arquivos:**

```
cypress/reports/
├── README.md                 # Este arquivo
├── *.json                   # Relatórios JSON individuais
├── merged-report.json       # Relatório consolidado
└── merged-report.html       # Relatório visual final
```
