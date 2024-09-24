import styles from './Header.module.css';

const Cabecalho =() => {
    return(
        <header>
            <h1 className={styles.header}>
                Calculadora IMC
            </h1>
        </header>
    )
}

export default Cabecalho;