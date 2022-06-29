## Projeto de Lista de Pacientes

O objetivo era criar uma interface para consumir a api e retornar de 50 resultados os pacientes, com a opção de carregar mais, filtrar por nome e por gênero, e também com um modal contendo as informações do Paciente.

A api consumida para a lista de pacientes foi a https://randomuser.me/api/ que retorna usuários aleatórios, então utilizei esses usuários como pacientes e também peguei um usuário aleatório para exibir no cabeçalho do projeto.

### Técnologias utilizadas

* Vite - Para criar o projeto em react com Typescript.
* Typescript - Foi a linguagem que utilizei com o react.
* TailwindCSS - Para estilização.
* Headless UI - Foi utilizado no modal e também na lista de filtro de generos.
* Phosphor icons - Foi utilizado para pegar os icones da página.

### Resultado

![Captura de tela de 2022-06-28 21-22-50](https://user-images.githubusercontent.com/80429145/176325725-744bd045-cd02-4f18-91f1-6ec9a8d2afea.png)

![Captura de tela de 2022-06-28 21-23-03](https://user-images.githubusercontent.com/80429145/176325736-9a380faf-faf3-471f-be85-ddc46bb3db6c.png)

![Captura de tela de 2022-06-28 21-23-16](https://user-images.githubusercontent.com/80429145/176325761-b715b19e-1fbf-4714-a785-94ca42b7c024.png)



Iniciei o projeto com o vite e aproveitei para praticar no typescript pois comecei estudar react e quero muito aprender usar com typescript, utilizei estado global com contextAPI do react mesmo para armazenar a lista de usuários(ou pacientes, digo usuário pois o que a api retorna é usuários mas no projeto são como se fossem pacientes), da mesma forma que foi solicitado no desafio e a lógia foi a seguinte:
Assim que a tabela renderiza, eu utilizei um hook useEffect que faz o get na api e busca a lista de usuários, quando o botão load more é clicado ele carrega mais 50 usuários que estariam na próxima pagina adicionando ao array que já tinha as 50, então só é acrescentado mais. Coloquei no campo Gender um botão para filtrar pelo genero e também tem o campo de pesquisa para digitar o nome do usuário a ser pesquisado, e também o modal que ao clicar em View é aberto o modal com as informações do paciente que foram passadas por props.
Não consegui criar uma URL do paciente pois não consegui pensar em uma lógica para essa função, tentei de várias formas consultar a api de uma forma que me retornasse sempre o mesmo usuário para então usar no modal mas, a unica que consegui foi utilizando os seed e esse valor é retornado por requisição, ou seja, se eu fizer uma requisição de 50 resultados vou ter só 1 seed e não teria 1 para cada usuário.

Link do desafio: https://lab.coodesh.com/public-challenges/front-end-challenge-2021?utm_campaign=website&utm_medium=sendgrid&utm_source=mail
