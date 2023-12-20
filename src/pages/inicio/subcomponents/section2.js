
import { useEffect, useState } from "react"
import "./section2.css"
import { useTranslation } from "react-i18next"

export const Section2 = (props) => {
  const [curr, setCurr] = useState(1)
  const [last, setLast] = useState(0)

  const {t} = useTranslation()

  const comments = [
    {text: t("home.section_2.comment_1"), person: "Paola"},
    {text: t("home.section_2.comment_2"), person: "Lucas"},
    {text: t("home.section_2.comment_3"), person: "Juliete"},
    {text: t("home.section_2.comment_4"), person: "Rafael"}
  ]

  const imgs = [
    require("../../../assets/person/person-1.png"),
    require("../../../assets/person/person-2.png"),
    require("../../../assets/person/person-3.png"),
    require("../../../assets/person/person-5.png")
  ]

  useEffect(() => {
    setInterval(() => {
      setCurr(val => {
        setLast(val)
  
        if (val + 1 == comments.length) {
          return 0
        }
  
        return val + 1
      })
    }, 5000)
  }, [])

  return (
  <div className='section-2'>
    <div className='container' ref={props.reference}>
      <div className='icon'>
        {imgs.map((img, index) => (
          <img 
            className={curr == index ? "selected" : last == index ? "last" : ""}
            key={index}
            src={img}
          />
        ))}
        <img
          src={require("../../../assets/person/person.png")}
        />
      </div>
      
      <div className="quote">
        <span className="txt first-qtmark">“	</span>
          <i className="txt">{comments[curr].text}</i>
        <span className="txt last-qtmark"> ”</span>
      </div>
      
      <div className="person">
        <i>{comments[curr].person}</i>
      </div>
      
    </div>
  </div>
  )
}
