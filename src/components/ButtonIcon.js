import styles from './ButtonIconStyle.module.css'



export default function ButtonIcon ( { children, state_delete, state_insert, state_edit, text_button } ) {
    var showPage = () => {
        let insert_ = "page-off"
        let delete_ = "page-off"
        let edit_ = "page-off"

        if(text_button != "home"){
            if(text_button == "insert"){
                insert_ = "page-insert"
            }else if (text_button == "delete"){
                delete_ = "page-delete"
            }else if(text_button == "edit"){
                edit_ = "page-edit"
            }
        }
        
        state_delete(delete_)
        state_edit(edit_)
        state_insert(insert_)
        
    }

    return <button onClick={showPage} className={styles.buttonIcon}> {children} </button>
}