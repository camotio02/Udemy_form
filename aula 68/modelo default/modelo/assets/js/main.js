
const tasks = [];
function addTaskMain() {
    const container = document.querySelector('.tasks');
    const nameTask = document.querySelector('input');
    function addTask() {
        const taskName = nameTask.value.trim();
        if (taskName === '') {
            alert('Por favor, insira um nome de tarefa válido.');
            return;
        }

        const task = {
            name: taskName,
            date: new Date().toLocaleTimeString('pt-BR', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        };
        tasks.push(task);
        innerTasksInDocument();
    }

    function innerTasksInDocument() {
        tasks.forEach((task, index) => {
            const creatLi = document.createElement('li');
            const button = document.createElement('button');
            creatLi.innerHTML = `${task.name} - ${task.date}`;
            button.innerHTML = `Apagar tarefa`;
            button.id = task.name;
            creatLi.appendChild(button);
            container.appendChild(creatLi);
        });
    }

    document.addEventListener('click', (e) => {
        const add = e.target.id === 'add';
        if (add) {
            addTask();
        }
    });
}

addTaskMain();
