import { Button } from 'antd';
import './App.css';
import myLogo from './assets/myFitRoomLogo_250.png'
import { Sparkles, Wand2 } from 'lucide-react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';



function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Black Top navigate bar */}
      <header className="header">
        <div className="logo-section">
          <img src={myLogo} alt="MyFitRoom Logo" className="header-logo" />
          <span className="title">MyFitRoom</span>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="button-container">
          <Button 
            type="primary" 
            size="large" 
            className="nav-button"
            onClick={() => navigate('/generate-clothes')}
          >
            Generate my clothes
            <Sparkles className="button-icon" size={20} />
          </Button>
          <Button 
            type="primary" 
            size="large" 
            className="nav-button"
            onClick={() => navigate('/virtual-room')}
          >
            Enter my fitting room
            <Wand2 className="button-icon" size={20} />
          </Button>
        </div>
      </main>
    </div>
  );
}

function GenerateClothes() {
  return <div>Generate Clothes Page</div>;
}

function VirtualRoom() {
  return <div>Virtual Fitting Room Page</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate-clothes" element={<GenerateClothes />} />
      <Route path="/virtual-room" element={<VirtualRoom />} />
    </Routes>
  );
}

export default App;