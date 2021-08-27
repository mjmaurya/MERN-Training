import React,{useState,useEffect} from 'react';
import NewTask from './NewTask';
import Tasks from './Tasks';
import axios from 'axios';

const Main = () => {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/task')
        .then(res => setTasks(res.data))
        .catch(err => console.log(err));
    },[]);
        return (
            <div className="container">
                <NewTask tasks={tasks} setTask={setTasks}/>
                <Tasks tasks={tasks} setTask={setTasks}/>
            </div>
        )
    }
export default Main;