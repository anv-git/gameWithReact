import styles from "../styles/formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "../node_modules/next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";


export default function Formulario() {
const [qtdePortas, setQtdePortas] = useState(3)
const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.formulario} >
      <div className={styles.formContainer}>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao >
          <EntradaNumerica text="Qtde Portas?" 
          value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div className={styles.formContainer}>
        <Cartao >
        <EntradaNumerica text="Porta com presente?" 
          value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085" >
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link} >Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
