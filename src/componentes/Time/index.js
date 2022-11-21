import './Time.css'

const Time = (props) => {
    const corSec = {backgroundColor : props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    return(
        <section className='time' style={corSec}>
            <h3 style={borda}>{props.nome}</h3>
        </section>
    )
}

export default Time;