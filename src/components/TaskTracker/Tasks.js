import Task from './Task';

const Tasks = ({ tasks, onDelete, onTogggle }) => {

    return (
        <>
            {
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onTogggle={onTogggle}
                    />
                ))
            }
        </>
    )
};

export default Tasks