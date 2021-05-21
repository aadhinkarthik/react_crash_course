import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onTogggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onTogggle(task.id)}>

            <h3>
                {task.text}
                <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{ color:'red', cursor: 'pointer' }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task