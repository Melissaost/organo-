import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return(
        <div className="Lista-suspensa">
            <label>{props.label}</label>
            <select>
                <option></option>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;