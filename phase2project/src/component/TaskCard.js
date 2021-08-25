import axios from "axios";
import React, { useEffect,useState } from "react";
export const TaskCard = (props) => {
    const [data, setData] = useState(props.data);
    function doneTask (id) {
        axios.put(`http://localhost:5001/task/${id}`, {
            title: data.title,
            description: data.description,
            status: "completed",
            priority: data.priority,
            dueDate: data.dueDate,
            category: data.category,
            color: data.color,
            textColor: data.textColor
        })
            .then(res => {
                alert("Task Completed");
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    function deleteTask (id) {
        axios.delete(`http://localhost:5001/task/${id}`)
            .then(res => {
                alert("Task Deleted");
                axios.get(`http://localhost:5001/task`)
                    .then(res => {
                        props.setTask(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    }
                    )
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        setData(props.data);
    }, [props.data]);
    return (
        <div className="card my-2" style={{background:data.color,minHeight:'300px',color:data.textColor}}>
            <div className="card-header">
                {data.status==='completed'?
                <del>
                <h3 className="card-title">{data.title}</h3>
                </del>:
                <div>
                <h3 className="card-title" style={{float:'left'}}>{data.title}</h3>
                <button className="btn btn-primary" style={{float:'right'}} onClick={()=>doneTask(data.id)}>Mark Done</button>
                </div>
             } 
            </div>
            <div className="card-body">
            <p className="card-text"><b>Discription: </b>{data.description}</p>
            <p className="card-text"><b>Category: </b>{data.category}</p>
            <p className="card-text"><b>Due Date: </b>{data.dueDate}</p>
            <p className="card-text"><b>Priority: </b>{data.priority}</p>
            <p className="card-text"><b>Status: </b>{data.status}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-danger" onClick={()=>deleteTask(data.id)}>Delete</button>
        </div>
    </div>
    )
}