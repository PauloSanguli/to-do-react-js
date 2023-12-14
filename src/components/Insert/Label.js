import './Label.css'

export default function Label({ text_span, type_input, name_input, reffer}) {
    return (
        <label htmlFor={name_input}>
            <span>{text_span}</span>
            <input type={type_input} name={name_input} ref={reffer}/>
        </label>
    )
}