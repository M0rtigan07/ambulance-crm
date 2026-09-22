// src/components/common/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export const SplashScreen = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Iniciando Cadence CADIS System...');

    useEffect(() => {
        const timer1 = setTimeout(() => { setProgress(35); setStatusText('Verificando telemetría y dotación (SVB-01)...'); }, 600);
        const timer2 = setTimeout(() => { setProgress(70); setStatusText('Conectando con Candence AI (Groq API)...'); }, 1400);
        const timer3 = setTimeout(() => { setProgress(100); setStatusText('Sistemas listos.'); }, 2100);
        const timer4 = setTimeout(() => { onFinish(); }, 2600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onFinish]);

    return (
        <div className="splash-screen">
            <div className="splash-content">
                <div className="splash-logo-container">
                    <div className="splash-pulse-ring"></div>
                    <span className="splash-icon">🚑</span>
                </div>
                <h1 className="splash-title">CADENCE</h1>
                <p className="splash-subtitle">CADIS Emergency Operations v1.0</p>

                <div className="splash-progress-bar">
                    <div className="splash-progress-fill" style={{ width: `${progress}%` }}></div>
                </div>

                <p className="splash-status">{statusText}</p>
            </div>
        </div>
    );
};