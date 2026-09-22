// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

export const Navbar = ({ activeModule, setActiveModule, ambulanceStatus }) => {
    return (
        <header className="pulse-navbar">
            {/* 1. Marca Oficial Cadence con Tooltip Interactivo */}
            <div className="pulse-navbar__brand">
                <span className="pulse-navbar__logo-icon">🚑</span>
                <div className="pulse-navbar__title-container">
                    <h1
                        className="pulse-navbar__title"
                        title="Computer-Aided Dispatch & Emergency System"
                    >
                        CADENCE
                    </h1>
                    <span
                        className="pulse-navbar__badge"
                        title="Computer-Aided Dispatch & Emergency System"
                    >
                        CADIS System v1.0
                        {/* Mensaje flotante visual al pasar el ratón */}
                        <span className="pulse-navbar__tooltip">
                            Computer-Aided Dispatch & Emergency System
                        </span>
                    </span>
                </div>
            </div>

            {/* 2. Navegación por Módulos */}
            <nav className="pulse-navbar__nav">
                <button
                    className={`pulse-navbar__item ${activeModule === 'checklist' ? 'pulse-navbar__item--active' : ''}`}
                    onClick={() => setActiveModule('checklist')}
                >
                    📋 Control Dotación
                </button>

                <button
                    className={`pulse-navbar__item ${activeModule === 'patients' ? 'pulse-navbar__item--active' : ''}`}
                    onClick={() => setActiveModule('patients')}
                >
                    🩺 Parte Asistencial
                </button>

                <button
                    className={`pulse-navbar__item ${activeModule === 'map' ? 'pulse-navbar__item--active' : ''}`}
                    onClick={() => setActiveModule('map')}
                >
                    📍 Despacho & GPS
                </button>

                <button
                    className={`pulse-navbar__item ${activeModule === 'settings' ? 'pulse-navbar__item--active' : ''}`}
                    onClick={() => setActiveModule('settings')}
                >
                    ⚙️ Ajustes
                </button>
            </nav>

            {/* 3. Indicador de Estado + Candence AI */}
            <div className="pulse-navbar__status">
                <span className="pulse-navbar__status-label">AI Candence:</span>
                <span className="pulse-navbar__ai-badge" title="Asistente de IA conectado mediante Groq API">
                    🟢 Online (Groq)
                </span>
                <span className={`pulse-navbar__status-indicator pulse-navbar__status-indicator--${ambulanceStatus.type}`}>
                    {ambulanceStatus.label}
                </span>
            </div>
        </header>
    );
};