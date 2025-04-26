import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import SocialIcons from "./components/SocialIcons";
import PromoSection from "./components/PromotionSection";
import TrendingProducts from "./components/TrendingProducts";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SocialIcons></SocialIcons>
      <Carousel></Carousel>
      <PromoSection></PromoSection>
      <TrendingProducts></TrendingProducts>
    </div>
  );
}

export default App;
