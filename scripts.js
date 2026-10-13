//Seleciona o formulário pelo ID 'task-form'
const form = document.getElementById('task-form');

// Seleciona a lista onde as tarefas vão aparecer
const taskList = document.getElementById('tasks');

//Quando o formulário for enviado (submetido):
form.onsubmit = function (e){

    //Impede a página de recarregar (comportamento padrão do formulário)
    e.preventDefault();

    // Seleciona o campo de entrada de texto da tarefa
    const inputField = document.getElementById('task-input');

    // Se o campo estiver vazio (removendo os espaços em branco), interrompe a função
    if (inputField.value.trim() === "") return;

    // Chama a função para adicionar a tarefa com o texto digitado
    addTask(inputField.value);


    // Limpa o campo do formulário após adicionar
    form.reset();
};

//Função responsável por criar e adicionar a tarefana tela
function addTask(description) {

    //Criar um elemento <div> para ser o containerda tarefa
	const taskContainer = document.createElement('div');

    //Criar um elemento <input> (que será o checkbox)
	const newTask = document.createElement('input');

    // Criar um elemento <label> para o texto da tarefa
	const taskLabel = document.createElement('label');

    // Criar um nó de texto com a descrição da tarefa
	const taskDescriptionNode = document.createTextNode(description);

    // Configura o input para ser do tipo 'checkbox'
	newTask.setAttribute('type', 'checkbox');

    // Define o nome do checkbox com a descrição da tarefa
	newTask.setAttribute('name', description);

    // Define o ID do checkbox com a descrição da tarefa
	newTask.setAttribute('id', description);

    // Vincula o label ao checbox usando o atributo'for'
	taskLabel.setAttribute('for', description);

    //Coloca o checkbox dentro do container
	taskLabel.appendChild(taskDescriptionNode);

    // Adiciona a class CSS 'task-item' ao container da tarefa
	taskContainer.classList.add('task-item');

    //Coloca  o checkbox dentro do container
	taskContainer.appendChild(newTask);

    // Coloca a label dentro do container
	taskContainer.appendChild(taskLabel);

    // Coloca o container completo dentro da lista de tarefas principal
	taskList.appendChild(taskContainer);
}