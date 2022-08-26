import PropTypes from 'prop-types'
import styles from './Pessoa.module.css'

function CarroLista({ marca, ano_Lancamento}) {

    return (
        <>
        <h1 className={styles.titulo}>Carro:</h1>
        <li>{marca} - {ano_Lancamento}</li>
        </>
        )
}

CarroLista.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_Lancamento: PropTypes.number.isRequired,
}

CarroLista.defaultProps = {
    marca: 'Não colocou um modelo',
    ano_Lancamento: 0,
}

export default CarroLista