![Cypress Tests](https://github.com/matheusangellos/desafio_agi/actions/workflows/cypress-tests.yml/badge.svg)

# Desafio Agi - Matheus Angellos
Repositório referente ao desafio proposto pelo Agi.

## Pré-requisitos

- NodeJS instalado;
- Git;
- IDE (Visual Studio Code);
- Cucumber (Gherkin) Full Support (Plugin VSCode);

## Instalação

- Acessar o link [https://nodejs.org/](https://nodejs.org/), baixar e instalar o NodeJS versão 20 ou superior;
- Ao baixar o NodeJS, o gerenciador de pacotes NPM virá junto. Para verificar a instalação do NodeJS e do NPM, abrir o Prompt de Comando (em qualquer pasta) e digitar:

Para verificar a instalação/versão do pacote NodeJS (deve retornar algo como v20.10.0):

``node -v `` 

Para verificar a instalação/versão do gerenciador de pacoted NPM (deve retornar algo como v10.2.3):

``npm -v ``
- Acessar o link [https://git-scm.com/downloads](https://git-scm.com/downloads), baixar e instalar o Git/GitBash;
 - No Windows Explorer, navegar até a pasta onde deseja clonar o projeto, abrir o GitBash (botão direito -> *Git Bash Here*) e digitar:

``git clone https://github.com/matheusangellos/desafio_agi.git ``
 - Para que o Cypress funcione, é necessário que ele seja instalado atraves do *npm install* na pasta raiz do projeto
``npm install``

- Existe a opção de execução dos testes tanto via terminal (headless) quanto visual (pelo navegador). Para isso recomendo a instalação do pacote NTL:
``npm i -g ntl``

## Execução dos testes

- Com o NTL previamente instalado basta executar o seguinte comando no terminal:

``ntl``

- Selecione então a opção desejada:
<img width="370" alt="Screenshot 2024-05-14 at 23 43 11" src="https://github.com/matheusangellos/desafio_agi/assets/40271395/11b5ca16-1d87-4c5d-a035-9bf57800592a">


### Modo visual
- Selecionar a opção *E2E Testing*
- Selecionar o navegador de sua preferência (*Google Chrome recomendado*)
- Executar o teste de sua preferência
<img width="1430" alt="Screenshot 2024-05-14 at 23 50 35" src="https://github.com/matheusangellos/desafio_agi/assets/40271395/3f67b2a5-4d04-4a2d-80bd-9e2f6ed327ef">


### Modo headless
<img width="948" alt="Screenshot 2024-05-14 at 23 48 47" src="https://github.com/matheusangellos/desafio_agi/assets/40271395/7996570f-ef2d-4fef-a830-cd62293b3c47">
