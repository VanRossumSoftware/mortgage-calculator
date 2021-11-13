import './App.css';
import React, { useState } from 'react';

function App() {
  const [initial, setInitial] = useState('200000');
  const [rate, setRate] = useState('3');
  const [years, setYears] = useState('30');

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <div className="navbar-brand">Mortgage Overpayment Calculator</div>
        </div>
      </nav>
      <div className="initial-frame">
        <div>
          <h2>Initial</h2>
          <label>Amount</label>
          <input
            maxLength={7}
            value={initial}
            onChange={e => setInitial(e.target.value)}
          />
        </div>
        <div>
          <label>Years</label>
          <input
            type="number"
            maxLength={2}
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>
        <div>
          <label>Rate</label>
          <input
            type="number"
            step={0.05}
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
