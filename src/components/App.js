import '../styles/App.css';
// import Banner from './Banner'
import Header from './Header/Header';
import Explore from './Explore/Explore';
import Feature from './Feature/Feature';
import Info from './Info/Info';
import Motor from './Mototr/Motor';
import Accesoir from './Accesoir/Accesoir';
import Shopping from './Shopping/Shopping';
import Gallery from './Gallery/Gallery';
import Testimonials from './Testimonials/Testimonials';
import Subscribe from './Subscribe/Subscribe';
 import Footer from './Footer/Footer';
import Colors from './Colors/Colors';


function App() {
  return (
    <div>
      
      <Header/>
      <Explore/>
      <Feature/>
      <Info/>
      <Motor/>
      <Accesoir/>
      <Shopping/>
      <Gallery/>
      <Colors/>
      <Testimonials/>
      <Subscribe />
      <Footer/>
      
    </div>
  );
}

export default App;
