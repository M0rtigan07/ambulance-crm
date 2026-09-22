// src/components/modules/ChecklistModule.jsx
import React, { useState } from 'react';
import './ChecklistModule.css';

export const ChecklistModule = () => {
    // Estado para gestionar los ítems del checklist
    const [checklist, setChecklist] = useState({
        vehiculo: [
            { id: 'v1', label: 'Luces de emergencia V-1 y sirena acústica', status: 'ok' },
            { id: 'v2', label: 'Niveles de aceite, refrigerante y combustible', status: 'ok' },
            { id: 'v3', label: 'Estado y presión de neumáticos', status: 'ok' },
            { id: 'v4', label: 'Limpieza y desinfección de célula sanitaria', status: 'ok' }
        ],
        electromedicina: [
            { id: 'e1', label: 'Desfibrilador/DESA (Batería y parches)', status: 'ok' },
            { id: 'e2', label: 'Aspirador de secreciones (Presión de succión)', status: 'ok' },
            { id: 'e3', label: 'Botella principal de Oxígeno (Presión > 150 bar)', status: 'ok' },
            { id: 'e4', label: 'Botella portátil de Oxígeno de rescate', status: 'ok' }
        ],
        inmovilizacion: [
            { id: 'i1', label: 'Juego de collarines cervicales (Tallas completa)', status: 'ok' },
            { id: 'i2', label: 'Tablero espinal / Dama de Elche y correas', status: 'ok' },
            { id: 'i3', label: 'Colchón de vacío y bomba de aspiración', status: 'ok' },
            { id: 'i4', label: 'Maletín de Soporte Vital y material de curas', status: 'ok' }
        ]
    });

    // Función para cambiar el estado de un ítem (ok, alerta, fallo)
    const handleStatusChange = (category, id, newStatus) => {
        setChecklist(prev => ({
            ...prev,
            [category]: prev[category].map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        }));
    };

    return (
        <div className="cadence-checklist">
            <div className="cadence-checklist__header">
                <h2>📋 Control Diario de Dotación y Material (SVB-01)</h2>
                <p>Revisión obligatoria de inicio de turno. Registrado por equipo técnico.</p>
            </div>

            <div className="cadence-checklist__grid">
                {/* BLOQUE 1: VEHÍCULO */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">🚒 Vehículo y Mecánica</h3>
                    <ul className="cadence-card__list">
                        {checklist.vehiculo.map(item => (
                            <li key={item.id} className="cadence-card__item">
                                <span className="cadence-card__label">{item.label}</span>
                                <div className="cadence-card__actions">
                                    <button
                                        className={`btn-check ${item.status === 'ok' ? 'btn-check--ok' : ''}`}
                                        onClick={() => handleStatusChange('vehiculo', item.id, 'ok')}
                                    >
                                        OK
                                    </button>
                                    <button
                                        className={`btn-check ${item.status === 'fail' ? 'btn-check--fail' : ''}`}
                                        onClick={() => handleStatusChange('vehiculo', item.id, 'fail')}
                                    >
                                        Falta / Fallo
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BLOQUE 2: ELECTROMEDICINA Y OXÍGENO */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">⚡ Electromedicina y Oxígeno</h3>
                    <ul className="cadence-card__list">
                        {checklist.electromedicina.map(item => (
                            <li key={item.id} className="cadence-card__item">
                                <span className="cadence-card__label">{item.label}</span>
                                <div className="cadence-card__actions">
                                    <button
                                        className={`btn-check ${item.status === 'ok' ? 'btn-check--ok' : ''}`}
                                        onClick={() => handleStatusChange('electromedicina', item.id, 'ok')}
                                    >
                                        OK
                                    </button>
                                    <button
                                        className={`btn-check ${item.status === 'fail' ? 'btn-check--fail' : ''}`}
                                        onClick={() => handleStatusChange('electromedicina', item.id, 'fail')}
                                    >
                                        Falta / Fallo
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BLOQUE 3: INMOVILIZACIÓN Y MATERIAL */}
                <div className="cadence-card">
                    <h3 className="cadence-card__title">🩺 Inmovilización y Material</h3>
                    <ul className="cadence-card__list">
                        {checklist.inmovilizacion.map(item => (
                            <li key={item.id} className="cadence-card__item">
                                <span className="cadence-card__label">{item.label}</span>
                                <div className="cadence-card__actions">
                                    <button
                                        className={`btn-check ${item.status === 'ok' ? 'btn-check--ok' : ''}`}
                                        onClick={() => handleStatusChange('inmovilizacion', item.id, 'ok')}
                                    >
                                        OK
                                    </button>
                                    <button
                                        className={`btn-check ${item.status === 'fail' ? 'btn-check--fail' : ''}`}
                                        onClick={() => handleStatusChange('inmovilizacion', item.id, 'fail')}
                                    >
                                        Falta / Fallo
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};