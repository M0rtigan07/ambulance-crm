// src/components/modules/SettingsModule.jsx
import React, { useState, useEffect } from 'react';
import './SettingsModule.css';

export const SettingsModule = () => {
    // Estados de preferencias de usuario
    const [theme, setTheme] = useState(localStorage.getItem('cadence_theme') || 'light');
    const [fontSize, setFontSize] = useState(localStorage.getItem('cadence_fontSize') || 'medium');
    const [accentColor, setAccentColor] = useState(localStorage.getItem('cadence_accent') || '#2563eb');

    // Aplicar cambios dinámicos al root de la aplicación
    useEffect(() => {
        // Guardar en localStorage
        localStorage.setItem('cadence_theme', theme);
        localStorage.setItem('cadence_fontSize', fontSize);
        localStorage.setItem('cadence_accent', accentColor);

        // Aplicar clase de tema nocturno/claro
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Aplicar tamaño de letra al HTML
        const fontSizes = { small: '14px', medium: '16px', large: '18px' };
        document.documentElement.style.fontSize = fontSizes[fontSize];

        // Aplicar color de acento
        document.documentElement.style.setProperty('--pulse-accent', accentColor);
    }, [theme, fontSize, accentColor]);

    return (
        <div className="settings-module">
            <div className="settings-module__header">
                <h2>⚙️ Configuración del Sistema y Preferencias de Cabina</h2>
                <p>Personaliza la interfaz para mejorar la visibilidad durante la operativa en la ambulancia.</p>
            </div>

            <div className="settings-module__grid">
                {/* PANEL 1: APARIENCIA Y VISIBILIDAD */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">👁️ Visibilidad y Pantalla</h3>

                    <div className="settings-field">
                        <label>Modo de Pantalla (Modo Cabina):</label>
                        <div className="settings-options">
                            <button
                                className={`btn-option ${theme === 'light' ? 'btn-option--active' : ''}`}
                                onClick={() => setTheme('light')}
                            >
                                ☀️ Día (Claro)
                            </button>
                            <button
                                className={`btn-option ${theme === 'dark' ? 'btn-option--active' : ''}`}
                                onClick={() => setTheme('dark')}
                            >
                                🌙 Noche (Oscuro / Alto Contraste)
                            </button>
                        </div>
                    </div>

                    <div className="settings-field">
                        <label>Tamaño de Letra (Legibilidad):</label>
                        <div className="settings-options">
                            <button
                                className={`btn-option ${fontSize === 'small' ? 'btn-option--active' : ''}`}
                                onClick={() => setFontSize('small')}
                            >
                                Normal
                            </button>
                            <button
                                className={`btn-option ${fontSize === 'medium' ? 'btn-option--active' : ''}`}
                                onClick={() => setFontSize('medium')}
                            >
                                Grande
                            </button>
                            <button
                                className={`btn-option ${fontSize === 'large' ? 'btn-option--active' : ''}`}
                                onClick={() => setFontSize('large')}
                            >
                                Muy Grande
                            </button>
                        </div>
                    </div>
                </div>

                {/* PANEL 2: TEMAS Y ACCIONES DE COLOR */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">🎨 Color de Énfasis de la Interfaz</h3>

                    <div className="settings-field">
                        <label>Tono Corporativo Principal:</label>
                        <div className="settings-options">
                            <button
                                className={`btn-option ${accentColor === '#2563eb' ? 'btn-option--active' : ''}`}
                                onClick={() => setAccentColor('#2563eb')}
                            >
                                🔵 Azul Sanitario
                            </button>
                            <button
                                className={`btn-option ${accentColor === '#059669' ? 'btn-option--active' : ''}`}
                                onClick={() => setAccentColor('#059669')}
                            >
                                🟢 Verde Operaciones
                            </button>
                            <button
                                className={`btn-option ${accentColor === '#d97706' ? 'btn-option--active' : ''}`}
                                onClick={() => setAccentColor('#d97706')}
                            >
                                🟠 Ámbar Urgencias
                            </button>
                        </div>
                    </div>
                </div>

                {/* PANEL 3: PREPARACIÓN PARA BASE DE DATOS Y USUARIOS */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">🗄️ Servidor y Conectividad (Próximamente)</h3>
                    <p className="settings-info-text">
                        Conexión con PostgreSQL y módulo de autenticación para técnicos (TES 1 / TES 2)[cite: 1].
                    </p>
                    <div className="settings-status-box">
                        <span>Base de Datos PostgreSQL: <strong>Pendiente de conectar</strong></span>
                        <span>Autenticación JWT: <strong>Modo Demostración</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};