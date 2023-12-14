import './Edit.css'
import Label from '../Insert/Label'
import { useRef } from 'react'



function Edit({ state }) {
    const nameRef = useRef(null)
    const idRef = useRef(null)
    const checkRef = useRef(null)
    const dateRef = useRef(null)

    function updateTaskInBD(task){
        fetch(`http://localhost:5000/jobs/${task.id}/`, {
            method: "PATCH",
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
    function StrutureTask(){
        const obj_ = {
            "id": idRef.current.value,
            "name": nameRef.current.value,
            "date": dateRef.current.value,
            "done": checkRef.current.checked
        }
        
        updateTaskInBD(obj_)
    }

    return (
        <div className={state}>
            <form onSubmit={StrutureTask}>
                <Label name_input="name" type_input="text" text_span="name of task" reffer={nameRef}/>
                <Label name_input="id" type_input="number" text_span="id of task" reffer={idRef}/>
                <Label name_input="check" type_input="checkbox" text_span="task dided?" reffer={checkRef}/>
                <Label name_input="date" type_input="date" text_span="date of task" reffer={dateRef}/>
                <button>Update datas</button>
            </form>
        </div>
    )
}

export default Edit