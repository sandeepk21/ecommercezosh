import React from "react";
import MainCarousel from "../../Componants/Homecarousel/MainCarousel";
import FeatureProductCard from "../../Componants/HomeComponants/FeatureProductCard.jsx";
import { mensShoesPage1 } from "../../../Data/shoes";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import mensshirts from '../../../Data/Men/men_shirt.json';
import {sareePage1} from '../../../Data/Saree/page1';
import Footer from "../../Componants/Navigation/Footer";
//   // More products...
// ];
const mens_kurtas=[];
const mens_shoose=[];
const mens_shirts=[];
const womens_sarees=[];
for(var i=0;i<4;i++){
  mens_kurtas.push(mens_kurta[i])
  mens_shoose.push(mensShoesPage1[i])
  mens_shirts.push(mensshirts[i])
  womens_sarees.push(sareePage1[i])
};
function HomePage() {
  return (
    <div>
      <MainCarousel />
      <FeatureProductCard product={mens_kurtas} title={"Trending Products"}/>
      <FeatureProductCard product={mens_shoose} title={"Men's Shoes"}/>
      <FeatureProductCard product={mens_shirts} title={"Men's Shirts"}/>
      <FeatureProductCard product={womens_sarees} title={"Women's Sarees"}/>
     
    </div>
  );
}

export default HomePage;
