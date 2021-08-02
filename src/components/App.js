import ClientForm from './ClientForm';
import PromoPopup from './PromoPopup';
import Description from './Description';
import Footer from './Footer';
import './styles/App.css';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Description />
      <div className="rightSide">
        <PromoPopup />
        <ClientForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
