# 🚀 Como fazer upload para o GitHub

## Passo 1: Criar repositório no GitHub

1. Acesse https://github.com
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `qr-code` (ou outro nome de sua preferência)
   - **Description**: "Aplicação web de versículos bíblicos para QR Code"
   - **Visibility**: Escolha Public ou Private
   - **NÃO marque** "Initialize this repository with a README"
5. Clique em **"Create repository"**

## Passo 2: Conectar e fazer push

Após criar o repositório no GitHub, você verá uma página com instruções. Use os comandos abaixo:

### Opção A: Se você ainda não tem o repositório remoto configurado

```bash
cd "C:\Users\Lucas\Desktop\qr-code"
git remote add origin https://github.com/SEU_USUARIO/qr-code.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!**

### Opção B: Se você já tem SSH configurado

```bash
cd "C:\Users\Lucas\Desktop\qr-code"
git remote add origin git@github.com:SEU_USUARIO/qr-code.git
git branch -M main
git push -u origin main
```

## Passo 3: Habilitar GitHub Pages (opcional)

Para hospedar o site gratuitamente:

1. No repositório do GitHub, vá em **Settings**
2. Role até **Pages** (no menu lateral)
3. Em **Source**, selecione **"main"** branch
4. Clique em **Save**
5. Aguarde alguns minutos e seu site estará em:
   `https://SEU_USUARIO.github.io/qr-code/`

## 📝 Comandos úteis

```bash
# Ver status dos arquivos
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push

# Ver histórico
git log --oneline
```

