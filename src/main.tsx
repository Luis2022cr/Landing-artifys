import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './layouts/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
      <BrowserRouter>
        <Routes>t
          {/* Rutas que utilizan el Layout por defecto */}
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>

        </Routes>
      </BrowserRouter>
  </>
);
