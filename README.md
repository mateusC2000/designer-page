# Designer Page - Landing Ultra Moderna

Uma landing page ultra moderna, responsiva e otimizada para conversão, construída com Next.js 14 e Tailwind CSS. Pronta para hospedar na Vercel com formulário de contato.

## 🎨 Features

- ✨ Design ultra moderno com gradientes e efeitos
- ⚡ Performance máxima (Next.js 14)
- 📱 100% responsivo (Mobile-first)
- 🎯 Otimizado para conversão
- 🔒 TypeScript para segurança de tipos
- 🎨 Tailwind CSS para styling
- 📊 SEO otimizado
- 🚀 Pronto para Vercel

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Instalar dependências
npm install

# Criar arquivo de variáveis de ambiente
cp .env.example .env.local
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
designer-page/
├── app/
│   ├── components/        # Componentes React
│   ├── lib/              # Funções utilitárias
│   ├── styles/           # Estilos globais
│   ├── layout.tsx        # Layout raiz
│   ├── page.tsx          # Página inicial
│   └── globals.css       # CSS global com Tailwind
├── public/               # Arquivos estáticos
↓
├── tailwind.config.js    # Configuração Tailwind
├── next.config.js        # Configuração Next.js
├── tsconfig.json         # Configuração TypeScript
├── postcss.config.js     # Configuração PostCSS
├── .eslintrc.json        # Configuração ESLint
└── package.json          # Dependências
```

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Inicia produção |
| `npm run lint` | Executa ESLint |
| `npm run format` | Formata código com Prettier |
| `npm run type-check` | Verifica tipos TypeScript |

## 🎨 Personalização

### Cores Tailwind
Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#06b6d4',
    },
  },
}
```

### Variáveis de Ambiente
Crie `.env.local` baseado em `.env.example`:
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
NEXT_PUBLIC_CONTACT_EMAIL=seu-email@exemplo.com
```

## 📦 Dependências Principais

- **Next.js 14** - Framework React com SSR
- **React 18** - Biblioteca UI
- **Tailwind CSS 3** - Utility-first CSS
- **TypeScript** - Tipagem estática

## 🚀 Deploy na Vercel

A forma mais fácil de fazer deploy:

1. Push para GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Vercel detectará automaticamente Next.js e fará o deploy

```bash
# Com Vercel CLI
vercel
```

## 📝 Próximos Passos

- [ ] Adicionar formulário de contato
- [ ] Integrar com backend/API
- [ ] Adicionar animações mais complexas
- [ ] Implementar Analytics
- [ ] Adicionar componentes reutilizáveis
- [ ] Testes unitários e E2E
- [ ] PWA (Progressive Web App)

## 📞 Contacto

Para dúvidas ou sugestões, entre em contacto através do formulário no site ou envie um email.

## 📄 Licença

Este projeto está sob a licença MIT. Ver [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Criado com ❤️ por [Mateus Campos](https://github.com/mateus-campos)

---

**Desenvolvido em June 2024**
