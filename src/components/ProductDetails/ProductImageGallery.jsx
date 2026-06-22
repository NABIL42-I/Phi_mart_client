import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs } from 'swiper/modules';
import defaultImage from "../../assets/default_product.jpg";
import { useState } from 'react';


const ProductImageGallery = ({ images, ProductName }) => {
    const [thumbsSwiper] = useState(null);
    const displayImages = images.length > 0 ? images : [{ image: defaultImage }];

    return (
        <div className="rounded-lg border overflow-hidden">
        <Swiper
        modules={[Navigation,Thumbs]}
        navigation
        thumbs={{
            swiper:thumbsSwiper && !thumbsSwiper.destroyed?thumbsSwiper:null,
        }}
        className="product-main-slider"
    >
        {displayImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-square bg-base-100">
              <img
                src={imageObj.image}
                alt={ProductName}
                className="h-full w-full object-contain"
                />
                {/* <h1>{imageObj.id}</h1> */}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
        </div>
    );
};

export default ProductImageGallery;