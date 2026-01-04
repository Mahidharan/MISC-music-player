import "./mainContent.css";
import Header from "./Header.jsx";
import LeftBar from "./LeftBar.jsx";
import Footer from "./Footer.jsx";
import Center from "./Center.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      
      <div className="middle">
        <LeftBar />
        <Center />
        
        
      </div>
        <Footer />
      
    </div>
  );
}

export default App;
