import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Interest from "./Components/Interest";

function App() {
  return (
    <main>
      {/* Photo, name, button for email */}
      <Info />
      {/* About my career with hint of my pernality */}
      <section>
        <About />
        {/* My Interest */}
        <Interest />
      </section>
      {/* Footer for Social Icons */}
      <Footer />
    </main>
  );
}

export default App;
