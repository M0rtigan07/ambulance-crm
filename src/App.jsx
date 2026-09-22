// src/App.jsx
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ChecklistModule } from './components/modules/ChecklistModule';
import './index.css';

export function App() {
  const [activeModule, setActiveModule] = useState('checklist');

  const [ambulanceStatus] = useState({
    type: 'available',
    label: 'Operativa / En Base'
  });

  return (
    <div className="app-container">
      <Navbar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        ambulanceStatus={ambulanceStatus}
      />

      <div className="app-main-layout">
        <main className="app-content-area">
          {activeModule === 'checklist' && <ChecklistModule />}

          {activeModule === 'patients' && (
            <div className="module-placeholder">
              <h2>🩺 Módulo de Parte Asistencial</h2>
              <p>Siguiente paso: Formulario de constantes (TA, FC, GCS) y filiación del paciente.</p>
            </div>
          )}

          {activeModule === 'map' && (
            <div className="module-placeholder">
              <h2>📍 Módulo de Despacho & GPS</h2>
              <p>Siguiente paso: Integración del mapa Leaflet interactivo.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;