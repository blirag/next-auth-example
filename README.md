## Autenticação com Next-Auth

Nesse projeto montei 2 exemplos de autenticação social com next auth, sendo um com o Github e outro com o Google

### Como rodar o projeto:

```bash
npm run dev
# ou
yarn dev
```

### Variáveis de ambiente:

Lembre-se de setar as variáveis de ambiente para funcionar corretamente:

- CLIENT_ID - do provider que você for utilizar
- CLIENT_SECRET - do provider que você for utilizar
- NEXTAUTH_SECRET - uma chave aleatória da sua preferência

Verifique todos os providers disponíveis: https://next-auth.js.org/providers/

### Produção:

Subi esse projeto na vercel, caso queira ver ele em produção:
https://next-auth-example-sepia.vercel.app/
