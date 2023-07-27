import './index.css'

const CardContainer = props => {
  const {eachCardDetails} = props
  const {title, description, imgUrl, className} = eachCardDetails
  return (
    <div className="technology-card-container">
      <li className={className}>
        <h1 className="card-heading"> {title} </h1>
        <p className="card-para"> {description} </p>
        <img src={imgUrl} className="image" alt={title} />
      </li>
    </div>
  )
}
export default CardContainer
