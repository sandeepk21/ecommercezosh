import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const mainCarouselData=[
    {
        url:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/2/_/2_14.jpg",
        path:""
    },
    {
        url:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/_/1_10.jpg",
        path:""
    },
    {
        url:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/3/_/3_16.jpg",
        path:""
    },

]


const MainCarousel = () => {
    const items = mainCarouselData.map((item)=>
        <img className="cursor-pointer" src={item.url} alt='poster'></img>
    )
    console.log(items);
    return(<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1500}
    />)
    
    };
export default MainCarousel;