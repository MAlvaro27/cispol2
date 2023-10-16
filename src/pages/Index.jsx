import Footer from "../components/Footer";
import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <h1>BIENVENIDOS A CISPOL</h1>
        <h3>Centro de investigaciones sociales y políticas latinoamericano</h3>

        <h1>este es el inicio</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
