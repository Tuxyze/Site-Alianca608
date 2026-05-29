# 🏛️ Site Oficial - Capítulo Aliança de Suzano nº 608

Este é o repositório do site oficial do **Capítulo Aliança de Suzano nº 608** da Ordem DeMolay, filiado ao GCE-SP. O objetivo deste projeto é criar uma plataforma moderna, elegante e responsiva para apresentar a nossa instituição, registrar os nossos momentos na galeria, preservar a nossa história e facilitar o contato direto com novos interessados e famílias de Suzano e região.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas modernas de desenvolvimento web:

* **React** (Biblioteca Javascript para construção de interfaces dinâmicas)
* **Vite** (Ambiente de desenvolvimento rápido e otimizado)
* **React Router Dom** (Sistema de rotas e navegação fluida entre páginas)
* **CSS3** (Estilização personalizada com design responsivo)
* **Google Fonts** (Fonte *Montserrat* para uma tipografia limpa e elegante)

---

## 📁 Estrutura das Páginas

O site conta com as seguintes seções estruturadas:
* **Home (Página Inicial):** Cartão de visitas com o brasão oficial centralizado, informações de afiliação ao Grande Conselho Estadual, vídeo institucional incorporado e botão de contato rápido via WhatsApp.
* **Quem Somos:** Detalhes históricos sobre a Ordem DeMolay, os nossos objetivos de liderança e a estrutura administrativa atual do Capítulo (Mestres Conselheiros e Conselho Consultivo).
* **História:** Linha do tempo textual dividida em blocos organizados sobre a fundação, escolha do nome e o legado contínuo do Capítulo.
* **Galeria:** Mosaico dinâmico e interativo de fotos com efeitos visuais modernos ao passar o mouse (hover) para registrar as nossas filantropias, posses e convívios.
* **Login:** Portal de acesso restrito planeado para a futura área reservada aos membros ativos e seniores.

---

## 🛠️ Como Rodar o Projeto Localmente

Para baixar o código e rodar na sua máquina local, certifique-se de que tem o [Node.js](https://nodejs.org/) instalado e siga os passos abaixo:

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
    ```
2.  **Entrar na pasta do projeto:**
    ```bash
    cd nome-do-projeto
    ```
3.  **Instalar todas as dependências:**
    ```bash
    npm install
    ```
4.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  **Acessar no navegador:**
    Abra o link local (geralmente `http://localhost:5173`) informado no seu terminal.

---

## 💻 Configuração Multiplataforma (Windows / Linux)

Como temos irmãos a trabalhar em diferentes sistemas operacionais, precisamos de garantir que o Git não se confunda com as quebras de linha invisíveis de cada sistema (`CRLF` no Windows vs `LF` no Linux). 

Antes de começar a fazer alterações ou enviar commits, abra o seu terminal e execute o comando correspondente:

* **Se usa Windows:**
  ```bash
  git config --global core.autocrlf true

    Se usa Linux:
    Bash

    git config --global core.autocrlf input

Isso garante a padronização automática dos arquivos e evita conflitos "fantasmas" no histórico do Git!
👥 Como Contribuir (Para a Equipe do Capítulo)

Se faz parte da equipe de desenvolvimento do Capítulo e quer ajudar a expandir o site, siga estas boas práticas:

    Nunca faça alterações diretamente na branch main.

    Crie uma branch própria para a sua tarefa: git checkout -b feature/nome-da-mudanca.

    Para atualizar conteúdos, edite os textos nos arquivos correspondentes dentro de src/ (substituindo os placeholders da História ou Quem Somos).

    Para adicionar novas fotos para a Galeria ou Logos, coloque os arquivos dentro da pasta src/assets/ e importe-os corretamente.

    Quando terminar, envie o seu código (git push origin feature/nome-da-mudanca) e abra um Pull Request para revisão conjunta.

📜 Licença

Este projeto é de uso exclusivo e dedicado às atividades do Capítulo Aliança de Suzano nº 608 da Ordem DeMolay.