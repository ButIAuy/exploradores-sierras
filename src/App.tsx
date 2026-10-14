import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './state';
import { BadgeModal, BottomNav, Header, ScrollToTop } from './components/Shell';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';
import Badges from './pages/Badges';
import Parents from './pages/Parents';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app" data-screen-label="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulo/:id" element={<ModulePage />} />
            <Route path="/insignias" element={<Badges />} />
            <Route path="/padres" element={<Parents />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BadgeModal />
          <BottomNav />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}
