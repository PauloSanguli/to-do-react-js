import styles from './asideTasks.module.css'
import {useEffect, useState} from 'react'

function AsideTasks () {
    const [jobs, setJobs] = useState( [] )
    const [count, setCount] = useState(0)
    useEffect(() => {
        
        fetch('http://localhost:5000/jobs', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((resp) => {
            setJobs(resp)
        })
        .catch((error) => console.error(error))
        
    },[])

    return (
        <div className={styles.asideTasks}>
            <header>
                <p>id</p>
                <p>name</p>
                <p>date</p>
                <p>done</p>
            </header>
            <aside>
                {jobs.map((item) => (
                    <div className={styles.arrowTasks}>
                        <p key={item.id}>{item.id}</p>
                        <p key={item.id}>{item.name}</p>
                        <p key={item.id}>{item.date}</p>
                        <p key={item.id}>{item.done? <input type="checkbox" checked />: <input type="checkbox" />}</p>
                    </div>
                ))}
            </aside>
            <p className={styles.paragraphInfoJobs}>Do you has {jobs.Lenght} jobs pendent</p>
        </div>
    )
}

export default AsideTasks