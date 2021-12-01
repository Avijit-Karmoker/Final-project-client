import Contact from "../components/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import FoodMenu from "../components/FoodMenu/FoodMenu";
import Chef from "../components/Chef/Chef";
import Gallery from "../components/Gallery/Gallery";
import Review from "../components/Review/Review";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
      <div>
        <main>
          <Contact />
          <Nav />
          <Header />
          <FoodMenu />
          <Chef />
          <Gallery />
          <Review />
          <Location/>
          <Footer />
        </main>
      </div>
  );
}
