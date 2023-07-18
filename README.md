# My Posts
Pequeno projeto em Angular para demonstrar uso de tecnologias.
O My Posts é um app onde o usuario pode ver e cadastrar postagens.
Para cada postagem é possivel comentar, editar, excluir.

## Instalação
```bash
npm install
```
## Configurações Iniciais
Na pasta environments está a configuração da baseApiUrl, ajustar para o endereço da API que está rodando.

##Iniciando a aplicação (porta padrao 4200)
```bash
npm run dev
```
## Iniciando a aplicação em outra porta
```bash
ng serve --port port_number
```
## Abrindo a aplicação
No navegador entrar com o endereço http://localhost:PORTA/

## Modo de uso
Na tela inicial será apresentado varios cards com o resumo da postagem, clicando no botão detalhes será encaminhado para a pagina da postagem onde você pode ver a postagem completa, comentar, editar e excluir.
No menu de navegação no canto superior direito é possivel navegar para o formulario para adicionar uma nova postagem.
