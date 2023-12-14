import './Insert.css'
import Label from './Label'
import { useRef, useState } from 'react'


function Insert({ state }) {
    const nameRef = useRef(null)
    const idRef = useRef(null)
    const dateRef = useRef(null)
    // const [task, setTask] = useState({})

    async function registTaskInBD(task){
        fetch('http://localhost:5000/jobs', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then((resp) => resp.json())
        .then((resp) => {
            // alert(resp)
        })
        .catch((error) => console.error(error))
    }

    function CreateTask(){
        const obj_ = {
            "name": nameRef.current.value,
            "date": dateRef.current.value,
            "done": false
        }
        registTaskInBD(obj_)
    }


    return (
        <div className={state}>
            <p>Insert task</p>
            <form onSubmit={CreateTask}>
                <Label name_input="name" type_input="text" text_span="name of task" reffer={nameRef}/>
                <Label name_input="id" type_input="number" text_span="id of task" reffer={idRef}/>
                <Label name_input="date" type_input="date" text_span="date of task" reffer={dateRef}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Insert