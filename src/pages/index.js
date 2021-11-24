import Contact from "../components/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import FoodMenu from "../components/FoodMenu/FoodMenu";


export default function Home() {
  return (
      <div>
        <main>
          <Contact />
          <Nav />
          <Header />
          <FoodMenu />
        </main>
      </div>
  );
}
