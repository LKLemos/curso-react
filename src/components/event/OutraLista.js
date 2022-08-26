function OutraLista({ itens }) {

    return (
        <>
            <h3>Lista de itens boms</h3>

            { itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há nenhum item na lista!</p>
            )}
            
        </>
    )
}

export default OutraLista