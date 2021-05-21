import Header from '../TaskTracker/Header';
import Tasks from '../TaskTracker/Tasks';
import AddTask from '../TaskTracker/AddTask';
import { useState, useEffect } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

function TaskTracker() {

    const [showAddTask, setShowAddTask] = useState(false);

    // [object, function] = useState(<defaultValue>)
    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        const getTasks = async () => {

            const allTasks = await fetchTasks();
            setTasks(allTasks);
        };
        
        getTasks();
    }, []);

    const fetchTasks = async () => {

        const res = await fetch('http://localhost:5555/tasks');
        const data = await res.json();

        return data;
    };

    const fetchTask = async (id) => {

        const res = await fetch(`http://localhost:5555/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    const addTask = async (task) => {

        const res = await fetch('http://localhost:5555/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const data = await res.json();
        setTasks([...tasks, data]);
    };

    const deleteTask = async (id) => {

        await fetch(`http://localhost:5555/tasks/${id}`, {
            method: 'DELETE'
        });

        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id);
        const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5555/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });

        const data = await res.json();
        setTasks(tasks.map(task => task.id === data.id ? {...task, reminder: data.reminder} : task))
    };

    const toggleTask = () => setShowAddTask(!showAddTask);
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={path} exact>
                <Header showTask={toggleTask} showAdd={showAddTask}/>
                {
                    // using && is like ternary operator without else part
                    showAddTask && <AddTask onAdd={addTask}/>
                }
                {
                    tasks.length > 0 ? (
                        <Tasks tasks={tasks} onDelete={deleteTask} onTogggle={toggleReminder}/>
                    ) : ('Tasks accomplished - Relax...')
                }
            </Route>
        </Switch>
    );
}

export default TaskTracker;
