
import { forwardRef } from "react"
import "./sor.css"

export const Sor = forwardRef((props, ref) => {
  return (
    <div
      ref={ref} 
      className="sor"
    >
      <h1>Sistema de Obrigações Regulatórias</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada in libero sit amet pretium. In at magna nec neque semper dictum. Etiam et mauris blandit, dignissim lorem quis, egestas urna. Sed aliquet diam at nisi dictum ornare. Nulla eu nisl nunc.
      </h2>
      <div className="sections">
        <div className="left-section">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada in libero sit amet pretium. In at magna nec neque semper dictum. Etiam et mauris blandit, dignissim lorem quis, egestas urna. Sed aliquet diam at nisi dictum ornare. Nulla eu nisl nunc. Pellentesque iaculis est vitae sem fermentum, vitae pulvinar sem commodo. Nullam congue arcu id convallis fringilla. Quisque sed bibendum neque. Suspendisse neque purus, viverra non mauris nec, scelerisque tempor diam. Nunc tincidunt ipsum convallis felis varius, at viverra enim hendrerit. Sed ut felis vitae augue mollis vestibulum. Fusce accumsan, dui dapibus volutpat imperdiet, ligula lectus vestibulum erat, a.
          </p>
        </div>
        <div className="right-section">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada in libero sit amet pretium. In at magna nec neque semper dictum. Etiam et mauris blandit, dignissim lorem quis, egestas urna. Sed aliquet diam at nisi dictum ornare. Nulla eu nisl nunc. Pellentesque iaculis est vitae sem fermentum, vitae pulvinar sem commodo. Nullam congue arcu id convallis fringilla. Quisque sed bibendum neque. Suspendisse neque purus, viverra non mauris nec, scelerisque tempor diam. Nunc tincidunt ipsum convallis felis varius, at viverra enim hendrerit. Sed ut felis vitae augue mollis vestibulum. Fusce accumsan, dui dapibus volutpat imperdiet, ligula lectus vestibulum erat, a.
          </p>
        </div>  
      </div>
    </div>
  )
})

