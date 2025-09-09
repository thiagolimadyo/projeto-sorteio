# 🌀 Projeto Sorteio Invertido

Um sorteio... ao contrário! 😄  
Neste projeto, a partir de uma lista de participantes, vamos **eliminando um por um** até que reste apenas o último — que será o grande vencedor!  
Ideal para brincadeiras, dinâmicas de grupo ou simplesmente para rir com os amigos.

## 🚀 Tecnologias

- Node.js
- [terminal-kit](https://www.npmjs.com/package/terminal-kit) (interface de terminal interativa)

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/thiagolimadyo/projeto-sorteio.git
cd projeto-sorteio
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

Certifique-se de que o Node.js está instalado na sua máquina.

## ✍️ Como funciona

- Você insere uma lista de participantes.
- O programa vai eliminando aleatoriamente cada pessoa.
- O último que sobra... é o vencedor!

## Estrutura do Projeto

```text
projeto-sorteio/
├── index.ts
├── ui/terminal.ts
├── data/
│   └── dados.ts
├── function/
│   └── carregar-pessoas.ts
│   └── sortear-azarado.ts
├── model/
│   └── pessoa.ts
├── package.json
└── README.md
```
