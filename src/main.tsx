import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element with id "root" was not found in the document.');
}

ReactDOM.createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
