# 📧 Configuração do Email - Resend

## 1. Criar Conta no Resend

1. Acesse https://resend.com
2. Clique em "Sign Up" (Cadastre-se)
3. Preencha com seu email e crie uma senha
4. Verifique seu email

## 2. Obter a Chave de API

1. Na dashboard do Resend, acesse **Integrations** ou **API Keys**
2. Crie uma nova chave de API
3. Copie a chave (começa com `re_`)

## 3. Adicionar à Variável de Ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua `re_sua_chave_aqui` pela chave copiada:

```bash
RESEND_API_KEY=re_sua_chave_completa_aqui
```

3. Salve o arquivo

## 4. Importante: Domínio

Por padrão, o Resend envia emails de `onboarding@resend.dev`. 

Para usar seu próprio domínio:
1. Va em Resend Dashboard > Domains
2. Adicione seu domínio
3. Siga as instruções de verificação DNS
4. Atualize o campo `from` em `app/api/contact/route.ts`

## 5. Email de Destino

O formulário envia os contatos para: `mateus.camphos2000@gmail.com`

Para mudar, edite `app/api/contact/route.ts` (linha 75)

## 6. Testar

1. Inicie o servidor: `npm run dev`
2. Vá para http://localhost:3000 (ou a porta mostrada)
3. Role até "Vamos conversar sobre seu projeto?"
4. Preencha o formulário conversacional
5. Verifique se o email foi recebido

## Funcionalidades do Formulário

✅ **7 Etapas Conversacionais:**
1. Nome do Cliente
2. Empresa
3. Email
4. Telefone (opcional)
5. Descrição do Projeto
6. Orçamento (opcional)
7. Timeline (opcional)

✅ **Recursos:**
- Validação de campos obrigatórios
- Validação de email
- Barra de progresso dinâmica
- Confirmação por email ao cliente
- Email detalhado para o designer
- Estado de sucesso com opção de enviar outro contato
- Responsivo e animado

## Próximos Passos

1. **Deploy no Vercel**: O Resend já funciona em ambiente de produção
2. **Customize Design**: Edite `app/components/Contact.tsx`
3. **Adicione Mais Campos**: Estenda a interface `FormData` em `Contact.tsx`

---

Em caso de dúvidas: https://resend.com/docs
