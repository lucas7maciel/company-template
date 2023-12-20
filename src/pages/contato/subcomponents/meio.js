
export const Meio = (props) => (
  <div className="meio">
    <img src={props.icon} />
    <div>
      <p className={`cont-text text-${props.order}`}>{props.value}</p>  
    </div>
  </div>
)

