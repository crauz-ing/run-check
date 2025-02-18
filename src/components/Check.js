import React, { useState } from 'react';
// Bootstrap
import Button from 'react-bootstrap/Button';

export function RutCalculator(){
    
    const [rut, setRut] = useState('');
    const [dv, setDv] = useState('');

    const calculateDV = () => {
    // Función para calcular el dígito verificador
    const rutWithoutDV = rut.replace(/\./g, '').replace('-', '');
    let sum = 0;
    let multiplier = 2;
    for (let i = rutWithoutDV.length - 1; i >= 0; i--) {
        sum += parseInt(rutWithoutDV[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    const remainder = 11 - (sum % 11);
    const dv = remainder === 11 ? '0' : remainder === 10 ? 'K' : remainder.toString();
    setDv(dv);
    };

    return (
        <div>
            
            <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} placeholder="Ingrese el RUT sin dígito verificador" />          
            <Button variant="primary" onClick={calculateDV}>Calcular</Button>
            {/* <button onClick={calculateDV}>Calcular Dígito Verificador</button> */}
            <p>Dígito verificador: {dv}</p>
        </div>
    );
};
    
export default RutCalculator;