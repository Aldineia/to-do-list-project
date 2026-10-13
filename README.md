#  To-Do List Project

Uma aplicação simples e funcional de **Lista de Tarefas** desenvolvida com tecnologias web fundamentais. O objetivo principal do projeto foi praticar a manipulação dinâmica do DOM (Document Object Model) usando JavaScript puro, além de estruturação semântica em HTML5 e estilização com CSS3.

##  Tecnologias Utilizadas

*   **HTML5:** Estrutura e semântica do formulário e dos containers.
*   **CSS3:** Layout flexível (`Flexbox`), estilização de componentes visuais e seletores avançados como `:checked + label` para o efeito de rasurado.
*   **JavaScript (ES6):** Manipulação dinâmica de elementos, captura de eventos de formulário e validação de dados.

## ⚙️ Funcionalidades Corrigidas e Implementadas

Durante o desenvolvimento do projeto, os seguintes pontos foram refinados para garantir o funcionamento correto:
1.  **Sincronização de Containers:** Integração entre o elemento `#tasks` no HTML e a captura via JavaScript.
2.  **Padronização de Variáveis:** Correção de inconsistências de *case sensitivity* (`taskList`), eliminando erros de referência no console.
3.  **Validação de Entrada:** Bloqueio de submissão de campos vazios ou preenchidos apenas com espaços utilizando o método `.trim()`.
4.  **Efeito Visual Automatizado:** Uso do seletor CSS `:checked` adjacente para riscar e mudar a cor do texto da tarefa automaticamente ao marcar a caixa de seleção.

##  Como Executar o Projeto

1. Faça o clone ou baixe os arquivos do repositório.
2. Certifique-se de que os três arquivos principais estão no mesmo diretório:
   * `index.html`
   * `styles.css`
   * `scripts.js`
3. Abra o arquivo `index.html` em qualquer navegador web de sua preferência.

##  Código Principal

### Estrutura Dinâmica (JavaScript)
A lógica central consiste em capturar o evento de envio do formulário, criar os elementos HTML em memória e anexá-los à tela:

```javascript
function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}
```

## 🎯 Próximos Passos (Melhorias Futuras)
* [ ] Implementar geração de IDs únicos baseados em data/hora para evitar conflitos de nomes duplicados.
* [ ] Adicionar botão para exclusão individual de tarefas.
* [ ] Persistir os dados no navegador utilizando a API `localStorage`.

