import React from 'react';
import Button from './app/components/button';
import './App.css';

function App() {
  return (
   <Button className="btn btn-primary" text="click here" pushEvents url="http://localhost:5000/events" userId="8954685412" />
  );
}

export default App;
