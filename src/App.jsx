import Cabecalho from './components/header/header'
import Formulario from './components/formulario/formulario'
import Descritivo from './components/descritivo/descritivo'
import styles from './main.module.css'

function App() {

  return (
    <div className={styles.body}>
    <Cabecalho/>
    <Formulario/>
    <Descritivo/>
    </div>
  )
}

export default App
