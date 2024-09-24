import styles from './Descritivo.module.css';


const Descritivo = () => {
    return(
        <div>
            <div className={styles.descritivo}>
                <img className={styles.imgImc} src="https://lirp.cdn-website.com/451f53a3/dms3rep/multi/opt/tabela_IMC-1920w.png"/>
            </div>
            <h2 className={styles.titulo} >O que é o IMC?</h2>
            <p className={styles.texto} >O Índice de Massa Corporal (IMC) é uma medida simples que relaciona o peso e a altura de uma pessoa. Ele é calculado dividindo o peso da pessoa em quilogramas pela altura ao quadrado em metros. A fórmula é a seguinte:</p>
            <p className={styles.texto}>IMC = Peso (kg) / (Altura (m) * Altura (m))</p> 
            <p className={styles.texto}>O resultado obtido no cálculo do IMC é uma medida que classifica a pessoa em uma faixa que pode indicar se ela está com peso insuficiente, peso saudável, sobrepeso ou obesidade.</p>
            <h2 className={styles.titulo}>O que o IMC pode nos dizer sobre a saúde?</h2>
            <p className={styles.texto}>O IMC é uma ferramenta útil para avaliar a saúde, mas ele não é um diagnóstico definitivo. No entanto, ele pode indicar se uma pessoa está em risco de desenvolver algumas doenças relacionadas ao excesso de peso ou à desnutrição. Vamos ver como o IMC se relaciona com algumas doenças comuns:</p>
            <p className={styles.texto}><b>1. Doenças cardiovasculares :</b> Baixo IMC (abaixo do normal): Pessoas com IMC abaixo do normal podem estar em risco de deficiências nutricionais, enfraquecimento do sistema imunológico e problemas cardíacos. Sobrepeso e Obesidade: O excesso de peso e a obesidade estão associados a um maior risco de doenças cardíacas, hipertensão arterial e aumento dos níveis de colesterol.</p>
            <p className={styles.texto}><b>2. Diabetes tipo 2:</b> Sobrepeso e Obesidade: O acúmulo de gordura corporal, especialmente na região abdominal, pode aumentar o risco de desenvolver diabetes tipo 2.</p>
            <p className={styles.texto}><b>3. Distúrbios respiratórios:</b> Sobrepeso e Obesidade: A obesidade pode levar a distúrbios respiratórios, como apneia do sono e dificuldades respiratórias, que afetam a qualidade de vida. </p>
            <p className={styles.texto}><b>4. Doenças articulares:</b> Sobrepeso e Obesidade: O excesso de peso coloca pressão adicional sobre as articulações, aumentando o risco de doenças como a osteoartrite. </p>
            <p className={styles.texto}><b>5. Câncer:</b> Sobrepeso e Obesidade: Alguns tipos de câncer, como câncer de mama, cólon e próstata, têm uma associação com o excesso de peso. </p>
            <h2 className={styles.titulo}>Como melhorar a saúde com base no IMC</h2>
            <p className={styles.texto}>Se o seu IMC indicar que você está com sobrepeso ou obesidade, é importante adotar medidas para melhorar a sua saúde. Aqui estão algumas dicas:</p>
            <p className={styles.texto}><b>Alimentação Balanceada:</b> Opte por uma dieta equilibrada, rica em frutas, vegetais, proteínas magras e grãos integrais. Evite alimentos processados e ricos em gordura saturada. </p>
            <p className={styles.texto}><b>Atividade Física Regular:</b> Pratique exercícios físicos regularmente, como caminhadas, corridas, natação ou treinamento de resistência. A atividade física ajuda a queimar calorias e aumentar a massa muscular. </p>
            <p className={styles.texto}><b>Hidratação Adequada:</b> Beba água suficiente ao longo do dia. A hidratação adequada ajuda na digestão e pode auxiliar no controle do apetite.</p>
            <p className={styles.texto}><b>Evite Dietas Extremas:</b> Evite dietas radicais que prometem resultados rápidos. Elas podem ser prejudiciais à saúde e levar a perda de massa muscular.</p>
            <p className={styles.texto}><b>Consulte um Profissional de Saúde:</b> Se você está buscando uma mudança significativa no seu IMC, é aconselhável procurar orientação de um médico ou nutricionista. Eles podem criar um plano personalizado que atenda às suas necessidades individuais.</p>
            <h4 className={styles.titulo}>Fonte de informação: https://www.hebrombeneficios.com.br/calculo-imc-entenda-o-indice-de-massa-corporal-e-suas-implicacoes-na-saude</h4>
        </div>

    )
}

export default Descritivo;