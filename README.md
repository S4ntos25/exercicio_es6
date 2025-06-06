# 📊 Sistema de Gerenciamento de Notas de Alunos

## 🎯 Objetivo
Sistema simples para gerenciar notas de alunos, permitindo filtragem de alunos aprovados.

## ✨ Funcionalidades
- Criar array de objetos com nome e nota de alunos
- Filtrar alunos com nota maior ou igual a 6
- Exibir estatísticas de aprovação

## 🛠 Tecnologias
- JavaScript
- Métodos de array (filter, forEach)
- Arrow functions

## 📋 Como Usar
1. Clone o repositório
2. Execute o script via Node.js
3. Visualize os resultados no console

## 💻 Exemplo de Código
```javascript
const alunos = [
    { nome: "João Silva", nota: 7.5 },
    { nome: "Maria Souza", nota: 5.8 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
```

## 📊 Saída de Exemplo
```
Alunos Aprovados:
João Silva: 7.5
```

## 🤝 Contribuição
Sinta-se livre para sugerir melhorias ou expandir o sistema.
