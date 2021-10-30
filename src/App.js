import React from 'react';

function HelloWorld() {
  return <div style={{ backgroundColor: 'blue' }}>
    Hello World
  </div>
}

function Button() {
  return <button onClick={() => alert('Selamat Datang')}>Coba click saya</button>
}

function App() {
  return <div>
    <HelloWorld />
    <Button />
  </div>
}

export default App;