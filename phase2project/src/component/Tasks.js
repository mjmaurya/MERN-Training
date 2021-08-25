import React from 'react';
import { TaskCard } from './TaskCard';

const Tasks=({tasks,setTask})=>{
        return(
            <div className="tasks">
                <h1>Tasks</h1>
                    <div className="task-card-container row">
                    {
                    tasks.map((task,index)=>{
                        return(
                            <div className="col-md-4" key={index}>
                                <TaskCard data={task} setTask={setTask}/>
                            </div>
                        )
                    }
                    )}
                    </div>  
            </div>
        )
}
export default Tasks;