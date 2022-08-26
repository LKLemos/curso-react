import styles from './Pessoa.module.css'

function Pessoa({ nome, idade, profissao, foto }) {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={foto} alt={nome} />
            <h2 className={styles.titulo}>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa