import './App.css'
import "./index.css";  // ✅ Tailwind 스타일 불러오기

import Header from './components/Header';
import MainBanner from './components/MainBanner';
import RepairProcess from './components/RepairProcess';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="font-sans">
      <Header />
      <MainBanner />
      <RepairProcess />
      <Footer />
    </div>
    </>
  )
}

export default App
