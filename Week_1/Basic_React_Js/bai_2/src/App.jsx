import './App.css'
import Button from './Button.jsx';

function App() {
  return (
    <div className="app">
      <div className="button-container">
        <Button type="primary">Primary Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="success">Success Button</Button>
      </div>
    </div>
  );
}

export default App;
