import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Options from './pages/Options/Options';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/options" element={<Options />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
