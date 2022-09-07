import styles from './TodoTask.module.css'
import { ITask } from '../../interface/ITask';

interface TaskProps {
    task: ITask
    delTask(delById: number): void
}

function TodoTask({ task, delTask }: TaskProps) {

    return (
        <div className={styles.card}>
            <div>
                <p>{task.value}</p>
            </div>

            <div className={styles.line2} >
                <span className={styles.btn_card} onClick={() => delTask(task.id)} >X</span>
            </div>
        </div>
    );
}

export default TodoTask;