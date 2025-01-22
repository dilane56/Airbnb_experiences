import '../style/Cart.css'

import star from '../image/star.png'

export default function Cart(props) {
    const image = props.item.image
    const rating = props.item.stats.rating
    const reviewCount = props.item.stats.reviewCount
    const title = props.item.title
    const price = props.item.price
    const imagealt = props.item.name
    let statut
   
    if (props.item.openSpots===0){
        statut = "SOLD OUT"
    }
    if(props.item.openSpots >0){
        statut = "ONLINE"
    }
    console.log();
    return (

        <div className='card'>
            <img className='image1' src={image} alt={imagealt} />
            {statut && (<div className="statut">{statut}</div>)}

            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>


    )
}
