import React, { useState } from 'react';

const Status = () => {
  const [data, setData] = useState('No data received');
  const [connected, setConnected] = useState(false);
  const [characteristic, setCharacteristic] = useState(null);

  const connectToArduino = async () => {
    try {
      console.log('Requesting Bluetooth device...');
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['0000ffe0-0000-1000-8000-00805f9b34fb'] }]
      });

      console.log('Connecting to GATT server...');
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('0000ffe0-0000-1000-8000-00805f9b34fb');
      const char = await service.getCharacteristic('0000ffe1-0000-1000-8000-00805f9b34fb');

      console.log('Starting notifications...');
      await char.startNotifications();
      char.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);

      setCharacteristic(char);
      setConnected(true);
      console.log('Connected to Arduino');
    } catch (error) {
      console.error('Error:', error);
      setConnected(false);
    }
  };
const handleCharacteristicValueChanged = (event) => {
    const value = new TextDecoder().decode(event.target.value);
    console.log('Data received from Arduino:', value);
    setData(value);
  };

  const sendCommand = async (command) => {
    if (characteristic) {
      const encoder = new TextEncoder();
      await characteristic.writeValue(encoder.encode(command));
      console.log('Command sent to Arduino:', command);
    } else {
      console.log('Not connected to any device');
    }
  };

  return (
    <div>
      <h2>Conectar Hortautomatica</h2>
      <button onClick={connectToArduino}>Connect to Arduino</button>
      <p>Status: {connected ? 'Connected' : 'Not connected'}</p>
      <p>Data: {data}</p>
      <button onClick={() => sendCommand('W')} disabled={!connected}>Regar Manualmente</button>
    </div>
  );
};

export default Status;