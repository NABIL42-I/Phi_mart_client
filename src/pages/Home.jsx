import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Features from "../components/Features";
import Product from "../components/Products/Product";
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Category from "../components/Home/Categories/category";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <Category/>
            <Product/>
            <DiscountSection/>
        </div>
    );
};

export default Home;