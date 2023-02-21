import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        {...item}
      /> 
    )
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='card--list'>
        {cards}
      </section>
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div>
//        <Contact
//          image = "images/IMG_7096.jpg"
//          name = "MR TIYA"
//          job = "Director of admin"
//        />
//        <Contact
//          image = "images/IMG_7096.jpg"
//          name = "MRS LIMA"
//          job = "Killer being"
//        />
//        <Contact
//          image = "images/IMG_7096.jpg"
//          name = "YEMO"
//          job = "Ig influencer"
//        />
//     </div>
//   );
// }

// export default App;
