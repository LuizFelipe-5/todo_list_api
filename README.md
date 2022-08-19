#  :clipboard: To-Do-List

* <p text-align="justify">A presente aplicação consiste em uma API Rest desenvolvida na lingaguem JavaScript com a a utilização do framework Express.js para representação de uma To Do List.
* As funcionalidades da aplicação consistem em CRUD(Create, Read, Update e Delete).<br>
* A aplicação utiliza o banco de dados MongoDB</p>


Para executar a aplicação basta acessar o link [To Do List](https://gcc180-todo-api.herokuapp.com/).

Para utilização dos métodos implementados utlizar as seguintes URI em algum gerenciador de requisições (recomenda-se o Postman ou Insomnia):

__Salvar uma tarefa__

	- Tipo do método: POST
	- URI: https://gcc180-todo-api.herokuapp.com/tarefas
	- Corpo da requisição (tipo JSON):
		{
			"description": "",
			"isCompleted": ,
			"deadline":
		}

	- Tipos dos atributos:
		description: String
		isCompleted: boolean
		deadline: Date

__Encontrar todas as tarefas__

	- Tipo do método: GET
	- URI: https://gcc180-todo-api.herokuapp.com/tarefas

__Encontrar tarefa em específico__

	- Tipo do método: GET
	- URI: https://gcc180-todo-api.herokuapp.com/tarefas/id
	- Onde o id é o identificador da tarefa

__Atualizar uma tarefa__

	- Tipo do método: PUT
	- URI: https://gcc180-todo-api.herokuapp.com/tarefas/id
	- Onde o id é o identificador da tarefa
	- Corpo da requisição (tipo JSON):
		{
			"description": "",
			"isCompleted": ,
			"deadline":
		}

	- Tipos dos atributos:
		description: String
		isCompleted: boolean
		deadline: Date

__Remover uma tarefa__

	- Tipo do método: DELETE
	- URI: https://gcc180-todo-api.herokuapp.com/tarefas/id
	- Onde o id é o identificador da tarefa
