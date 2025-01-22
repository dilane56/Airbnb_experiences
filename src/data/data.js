import image1 from '../image/katie-zaferes.png'
import weddingimg from '../image/wedding-photography 1.png'
import mountain from '../image/mountain-bike 1.png'
let  data =  [
    
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        image: image1,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        statut: "Online",
        openSpots: 0,
        name : "Katie Zaferes"
    },
    {
        id : 2,
        title : "Learn Wedding Photography",
        description :"Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price : 125,
        image : weddingimg,
        stats:{
            rating:5.0,
            reviewCount:30
        },
        statut:"Online",
        openSpots:27,
        name : "Wedding Photography"

    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        image: mountain,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        statut: "Norway",
        name : "Mountain Biking"
       
    },
   
]
export default data