import React from 'react';
import styles from './css/App.css';

function App() {
  return (
    <>
      <h1>HELLO</h1>
      <button>
        <img src="./assets/menu.svg" alt="MENU ICON" />
      </button>
      <menubar id={styles['menubar']}>
        <Menubar />
      </menubar>
      <section id={styles['container']}></section>
    </>
  );
}

export default App;
