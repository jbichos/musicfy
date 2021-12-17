import React from 'react';
import firebase from './utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser ? 'Estamos Logueado' : 'NO estamos logueados');
});

  return (
    <div>
      <h1>App Electron + React</h1>
    </div>
  );
}

export default App;
