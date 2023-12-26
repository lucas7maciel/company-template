import { useTranslation } from "react-i18next"

export const Solucoes = () => {
  const {t} = useTranslation()
  const container = {
    height: "80vh",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    textAlign: "center"
  }

  return (
    <div style={container}>
      <h2>{t("solutions.main")}</h2>
      <h3>:)</h3>
    </div>
  )
}

/*import { useRef } from "react"
import { Sor } from "./subcomponents/sor"
import { Fs } from "./subcomponents/fs"
import { Gft } from "./subcomponents/gft"
import { Fdv } from "./subcomponents/fdv"
import { Grf } from "./subcomponents/grf"
import "./index.css"

export const Solucoes = () => {
  const sorRef = useRef()
  const fsRef = useRef()
  const gftRef = useRef()
  const fdvRef = useRef()
  const grfRef = useRef()

  function scroll(ref) {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
      <div className="solucoes-1">
        <div className="title">
          <h1>OFERECEMOS AS SEGUINTES SOLUÇÕES</h1>
        </div>

        <div className="solucoes">
          <div className="images">
            <div>
              <img
                onClick={() => scroll(sorRef)}
                src={require("../../assets/solutions/sor.svg")} 
              />
            </div>
            <div>
              <img
                onClick={() => scroll(fsRef)}
                src={require("../../assets/solutions/fs.svg")} 
              />  
            </div>
            <div>
              <img
                onClick={() => scroll(gftRef)}
                src={require("../../assets/solutions/gft.svg")} 
              />  
            </div>
            <div>
              <img
                onClick={() => scroll(fdvRef)}
                src={require("../../assets/solutions/fdv.svg")} 
              />  
            </div>
            <div>
              <img
                onClick={() => scroll(grfRef)}
                src={require("../../assets/solutions/grf.svg")} 
              />  
            </div>  
          </div>

          <div className="siglas">
            <p>SOR</p>
            <p>FS</p>
            <p>GFT</p>
            <p>GRF</p>
            <p>FDV</p>
          </div>

          <div className="descriptions">
            <p>Sistema de Obrigações Regulatórias</p>
            <p>Fast Solution</p>
            <p>Sistema de Gestão Fiscal e Tributária</p>
            <p>Força de Vendas</p>
            <p>Gestão de Relacionamento Financeiro</p>
          </div>

        </div>
      </div>

      <Sor ref={sorRef}/>
      <Fs ref={fsRef} />
      <Gft ref={gftRef} />
      <Fdv ref={fdvRef} />
      <Grf ref={grfRef} />
    </div>
  )
}

//Sistema de Gestão Fiscal e Tributária
//Gestão de Relacionamento Financeiro
//Força de Vendas
//Fast Solution
*/