import Button from "./event/Button"

function Eventos() {

    function  meuEvento() {
        console.log('Ativando primeiro evento!')
    }

    function SegundoEvento() {
        console.log('Ativando Segundo Evento')
    }

    return(
        <div>
            <p>Clique aqui para ativar um evento</p>
            <Button event={meuEvento} text="Meu primeiro evento"/>
            <Button event={SegundoEvento} text="Meu segundo evento"/>
        </div>
    )
}

export default Eventos

// Usar as props no evento //

/* function Eventos({ numero }) {

    function  meuEvento() {
        console.log(`Opá, ${numero} fui ativado!`)
    }

    return(
        <div>
            <p>Clique aqui para ativar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
*/
