// src/App.jsx
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { ChecklistModule } from './components/modules/ChecklistModule.jsx';
import { SettingsModule } from './components/modules/SettingsModule.jsx';
import { SplashScreen } from './components/common/SplashScreen.jsx';
import './index.css';

export function App() {
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState('checklist');

  const [ambulanceStatus] = useState({
    type: 'available',
    label: 'Operativa / En Base'
  });

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

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

          {activeModule === 'settings' && <SettingsModule />}
        </main>
      </div>
    </div>
  );
}

export default App;