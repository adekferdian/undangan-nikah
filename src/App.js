import logo from './logo.svg';
import './App.css';
import Routes from './routes/index';

function App() {
  console.log(window.location.href);
  const name = "tes"
  return (
    <div>
      <Routes 
        name={name}
      />
    </div>
  );
}

export default App;
