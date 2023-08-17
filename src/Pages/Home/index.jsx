import React from 'react'
import Explore from '../../components/Explore/Explore';
import Feature from '../../components/Feature/Feature';
import Info from '../../components/Info/Info';
import Motor from '../../components/Mototr/Motor';
import Accesoir from '../../components/Accesoir/Accesoir';
import Shopping from '../../components/Shopping/Shopping';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import Subscribe from '../../components/Subscribe/Subscribe';
import Colors from '../../components/Colors/Colors';

function Home () {
  return (
    <div>
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
      
      </div>
      
  )
}

export default Home