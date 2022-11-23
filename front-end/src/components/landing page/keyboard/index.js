import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Keyboard from '../keyboard';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Keyboard />
  </StrictMode>
);
