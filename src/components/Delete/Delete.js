import './Delete.css'
import Label from '../Insert/Label'
import { useRef } from 'react'



function Delete({ state }) {
    const idRef = useRef(null)

    function DeleteTaskInBD(){
        const id = idRef.current.value

        fetch(`http://localhost:5000/jobs/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((resp) => {
            // alert(resp)
        })
        .catch((error) => console.error(error))
    }

    return (
        <div className={state}>
            <form onSubmit={DeleteTaskInBD}>
                <Label name_input="id" type_input="number" text_span="id of task" reffer={idRef}/>
                <button>Delete task</button>
            </form>
        </div>
    )
}

export default Delete