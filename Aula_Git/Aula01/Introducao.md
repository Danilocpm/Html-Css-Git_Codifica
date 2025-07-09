# Git Cheatsheet

```bash

# Inicializar repositório Git na pasta atual
git init

# Configurar e-mail do usuário
git config --global user.email "<seu_email>"

# Configurar nome do usuário
git config --global user.name "<seu_nome>"
```


# Area de Rastreio

```bash
# Adicionar arquivo específico ou todos (com ".") à área de staging
git add <arquivo>         # ex: git add index.js
git add .                 # adiciona todos os arquivos

# Remover arquivo da área de staging
git restore --staged <nome_arquivo>

# Enviar arquivos da área de staging para o repositório local (commit)
git commit -m "<mensagem_do_commit>"

# Remover arquivos não rastreados (untracked files)
git clean -f

# Reverter o último commit
git revert HEAD

# Reset do último commit:
# - soft: mantém arquivos na staging e no diretório
# - mixed: remove da staging, mas mantém no diretório (default)
# - hard: remove da staging e do diretório

git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1

```


# Repositorio Local

```bash
# Verificar status do repositório
git status

# Adicionar um README.md
git add README.md

# Ver histórico de commits
git log

# Navegar entre commits
git checkout <id_do_commit>

## Criar branch
git branch -m "nome"

## Logs 
git log

# Adicionar repositório remoto
git remote add <nome_remoto> <url_do_repo>

# Enviar alterações para o repositório remoto
git push

```

# Branch

```bash
# Criar/renomear branch atual
git branch -m <novo_nome>

# Alternar entre branches
git switch <nome_da_branch>

# Listar todas as branches (locais e remotas)
git branch -a

# Realizar merge com outra branch
git merge <nome_da_branch>

# Deletar branch
git branch -d <nome_da_branch>
```




