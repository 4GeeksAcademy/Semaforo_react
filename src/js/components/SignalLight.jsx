import React, { useState } from 'react';

const SignalLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center">

        <h1 className="mb-4">Semáforo</h1>

        <div className="signal-light bg-dark p-3 rounded-3 shadow">

          <div
            className={`circle mb-3 ${color === 'red' ? 'bg-danger' : 'bg-secondary'}`}
            onClick={() => setColor('red')}
          ></div>

          <div
            className={`circle mb-3 ${color === 'yellow' ? 'bg-warning' : 'bg-secondary'}`}
            onClick={() => setColor('yellow')}
          ></div>

          <div
            className={`circle ${color === 'green' ? 'bg-success' : 'bg-secondary'}`}
            onClick={() => setColor('green')}
          ></div>

        </div>
        
      </div>
    </div>
  );
};

export default SignalLight;
