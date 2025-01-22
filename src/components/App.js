
import '../style/App.css';
import Cart from './Cart';
import Hero from './Hero';
import Navbar from './Navbar';

import data from '../data/data';

function App() {
  const elements = data.map((elmt) =>{
    return(  <Cart /*id = {elmt.id } 
          title = {elmt.title}
          description =  {elmt.description}
          price = {elmt.price}
          image = {elmt.image}
          statut = {elmt.statut}
          openSpots = {elmt.openSpots}
          rating = {elmt.stats.rating}
          reviewCount = {elmt.stats.reviewCount}*/
        key ={elmt.id} 
        item = {elmt} />

    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='bloc'>
        {elements}

      </div>
     

    </div>
  );
}

export default App;
