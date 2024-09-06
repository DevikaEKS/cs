import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import Newproducts from './Component/Newproducts/Newproducts';
import Featuredproducts from './Component/Featuredproducts/Featuredproducts';
import Sportswear from './Component/Featuredproducts/Sportswear';
import Clientpage from './Component/Clientpage/Clientpage';
import Cardswipe from './Component/Cardswipe/Cardswipe';
import Footer from './Component/Footer/Footer';
import Menubar from './Component/Menubar/Menubar';

function App() {
  return (
    <div>
  <Menubar/>
     <Banner/>
     <Newproducts/>
     <Sportswear/>
     <Featuredproducts/>
     <Clientpage/>
     <Cardswipe/>
     <Footer/>
    </div>
  );
}

export default App;
