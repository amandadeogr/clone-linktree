import './Card.css';

const Card = (props) => {
   return(
      <div className='container'>
         <div className='container-image'>
            <a href={props.links.href}>
               <img src={props.links.image} className='image'></img>
            </a>
         </div>
         <div className='container-description'>
            <h2 className='title'>{props.links.title}</h2>
            <p className='subtitle'>{props.links.subtitle}</p>
         </div>
      </div>
   )
}

export default Card;