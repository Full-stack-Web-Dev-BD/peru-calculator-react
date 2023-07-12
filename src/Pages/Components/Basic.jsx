import React, { useState } from 'react';

const Basic = () => {
  const [importe, setImporte] = useState('');
  const [igv, setIGV] = useState('');
  const [total, setTotal] = useState('');

  const handleImporteChange = (e) => {
    const value = e.target.value;
    setImporte(value);
    const igvValue = value * (18 / 100);
    const totalValue = parseFloat(value) + parseFloat(igvValue);
    setIGV(igvValue.toFixed(2));
    setTotal(totalValue.toFixed(2));
  };

  const handleIGVChange = (e) => {
    const value = e.target.value;
    setIGV(value);
    const importeValue = value / (18 / 100);
    const totalValue = parseFloat(importeValue) + parseFloat(value);
    setImporte(importeValue.toFixed(2));
    setTotal(totalValue.toFixed(2));
  };

  const handleTotalChange = (e) => {
    const value = e.target.value;
    setTotal(value);
    const importeValue = value - value * (18 / 100);
    const igvValue = parseFloat(value) - parseFloat(importeValue);
    setImporte(importeValue.toFixed(2));
    setIGV(igvValue.toFixed(2));
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="three_block">
          <div className="input_group">
            <label htmlFor="">Importe</label>
            <input type="number" className="form-control" value={importe} onChange={handleImporteChange} />
          </div>
          <div className="input_group">
            <label htmlFor="">IGV 18%</label>
            <input type="number" className="form-control" value={igv} onChange={handleIGVChange} />
          </div>
          <div className="input_group">
            <label htmlFor="">S/.</label>
            <input type="number" className="form-control" value={total} onChange={handleTotalChange} />
          </div>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 th_footer">
        <p>CIENTO DIECIOCHO Y 00/100 NUEVO SOLES</p>
      </div>
    </div>
  );
};

export default Basic;
