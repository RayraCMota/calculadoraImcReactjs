import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => { 
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const calculoImc = () =>{ 
        const imc = parseInt(peso / (altura * altura));

        if (imc >= 35){
            return (`Seu indice é "${imc}", voce esta em obesidade classe II.`)
        } else if (imc >= 30){
            return (`Seu indice é "${imc}", voce esta em obesidade classe I.`)
        } else if (imc >=25){
            return (`Seu indice é "${imc}", voce esta com excesso peso.`)
        } else if (imc >=18.5){
            return (`Seu indice é "${imc}", voce esta com o peso ideal para a sua altura.`)
        } else if (imc < 18.5){
            return (` Seu indice é "${imc}", vc esta abaixo do peso.`)
        }


    }


    return(
        <div>
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder='Peso' onChange={evento => setPeso(parseFloat(evento.target.value))} />
                <input className={styles.input} type="number" placeholder='Altura' onChange={evento => setAltura(parseFloat(evento.target.value))} />
            </form>
           <p className={styles.resultado}>{calculoImc()}</p> 
        </div>
        
    )
}

export default Formulario;