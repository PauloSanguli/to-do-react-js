import styles from './home.module.css'
import ButtonIcon from './ButtonIcon'
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete, AiOutlineHome } from 'react-icons/ai'
import AsideTasks from './AsideTasks'
import Delete from './Delete/Delete'
import Edit from './Edit/Edit'
import Insert from './Insert/Insert'
import { useState } from 'react'


function Home() {
    const [classInsert, setClassInsert] = useState("page-off")
    const [classDelete, setClassDelete] = useState("page-off")
    const [classEdit, setClassEdit] = useState("page-off")

    return (
        <div className={styles.homePage}>
            <div className={styles.header}>
                <p>Tasks <span>Jobs</span></p>
                <div className={styles.containerButtons}>
                    <ButtonIcon state_delete={setClassDelete} state_insert={setClassInsert} state_edit={setClassEdit} text_button="edit">
                        <AiOutlineEdit/>
                    </ButtonIcon>
                    <ButtonIcon state_delete={setClassDelete} state_insert={setClassInsert} state_edit={setClassEdit} text_button="delete">
                        <AiOutlineDelete/>
                    </ButtonIcon>
                    <ButtonIcon state_delete={setClassDelete} state_insert={setClassInsert} state_edit={setClassEdit} text_button="insert">
                        <AiOutlinePlus/>
                    </ButtonIcon>
                    <ButtonIcon state_delete={setClassDelete} state_insert={setClassInsert} state_edit={setClassEdit} text_button="home">
                        <AiOutlineHome/>
                    </ButtonIcon>
                </div>
            </div>
            <Delete state={classDelete}/>
            <Edit state={classEdit}/>
            <Insert state={classInsert}/>
            <AsideTasks />
        </div>
    )
}

export default Home