async function getAllTasks() {
    try {

        const response = await fetch('http://localhost:8080/api/tasks');

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();


        console.log(data)

        displayTasks(data)

        return data
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        showError('Error al cargar las tareas');
    }
}


async function searchByTitle(keyword) {
    try {

        const response = await fetch(`http://localhost:8080/api/tasks/search?keyword=${keyword}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        console.log(data)
        displayTasks(data)
        return data


    } catch (error) {
        console.error('Error al obtener tareas:', error);
        showError('Error al cargar las tareas');
    }
}


async function searchByDate(date) {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks/search/date?date=${date}`);

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();

        console.log(data);

        displayTasks(data)
        return data


    } catch (error) {
        console.error('Error al obtener tareas:', error);
        showError('Error al cargar las tareas');
    }
}


async function updateStatus(taskId) {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks/${taskId}/status`, {
            method: 'PUT'
        })

        if (!response.ok) throw new Error(`Error: ${response.status}`);


        const updatedTask = await response.json();

        console.log("Esta tarea fue actualizada con exito: ", updatedTask);

        getAllTasks();

        return updatedTask

    } catch (error) {
        console.error('Error al actualizar tareas:', error);
        showError('Error al actualizar la tarea');
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/tasks/${id}/delete`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        console.log("Tarea eliminada con exito");
        getAllTasks();
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        showError('Error al eliminar la tarea');
    }
}


async function addNewTask(title, date = null) {
    try {
        const newTask = {
            title: title,
            date: date,
            completed: false
        };

        const response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const createdTask = await response.json();
        console.log("Tarea creada con exito: ", createdTask)

        getAllTasks();

        return createdTask;
    } catch (error) {
        console.error('Error al agregar tarea:', error);
        showError('Error al agregar la tarea');
    }
}


function displayTasks(tasks) {
    const tasksDiv = document.getElementById('tasks');

    if (tasks.length === 0) {
        tasksDiv.innerHTML = '<p>No hay tareas para mostrar</p>';
        return;
    }

    tasksDiv.innerHTML = tasks.map(task => `
    <div class="task ${task.completed ? 'completed' : ''}">
        <h3>${task.title}</h3>
        <p>Fecha: ${task.date || 'sin fecha'}</p>
        <p>Estado: ${task.completed ? 'Completada' : 'Pendiente'}</p>

        <button onclick="updateStatus('${task.id}')">
            ${task.completed ? 'Marcar Pendiente' : 'Marcar Completada'}
        </button>

        <button onclick="deleteTask('${task.id}')">
            Eliminar
        </button>
    </div>
    `).join('');

}


function showError(message) {
    const tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = `<p style="color:red;"> ${message}</p>`
}


function createTask() {
    const title = document.getElementById('newTaskTitle').value;
    const date = document.getElementById('newTaskDate').value || null;

    
    if (title.trim() === '') {
        alert("Por favor escribe un titulo")
        return
    }
    addNewTask(title, date);
    document.getElementById('newTaskTitle').value = '';
    document.getElementById('newTaskDate').value = '';

}

function searchTasks() {
    const keyword = document.getElementById('searchKeyword').value;
    
    if (keyword.trim() === '') { 
        alert("Por favor escribe un titulo"); 
        return;
    }
    
    searchByTitle(keyword);
}

function searchTasksByDate() {
    const date = document.getElementById('searchDate').value;

    if (date === '') {
        alert("Por favor asigna una fecha")
        return
    }
    searchByDate(date);
}