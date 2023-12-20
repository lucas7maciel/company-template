import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./mobile-menu.css"
import menu from "../../assets/icons/menu.svg"
import brazil from "../../assets/language/brazil-icon.svg"
import usa from "../../assets/language/usa-icon.svg"

export const MenuSreen = (props) => {
  const navigate = useNavigate()

  return (
    <div 
      className="menu-screen"
      onClick={() => props.setVisible(false)}
    >
      <div className="close">
        <span>X</span>
      </div>

      <div className="links">
        <span
          onClick={() => navigate("/")}
          >INÍCIO
        </span>
        <span
          onClick={() => navigate("/solucoes")}
          >SOLUÇÕES
        </span>
        <span
          onClick={() => navigate("/contato")}
          >CONTATO
        </span>
      </div>

      <div className="flags">
        <img 
          src={brazil}
          onClick={() => console.log("Mudando idioma pra portugues")}
        />
        <img 
          src={usa}
          onClick={() => console.log("Mudando idioma pra ingles")}
        />
      </div>
    </div>
  )
}

export const MobileMenu = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
    {visible && <MenuSreen setVisible={setVisible} />}

    <div className="mobile-menu">
      <img 
        onClick={() => setVisible(true)}
        src={menu}
      />
    </div>
    </>
  )
}