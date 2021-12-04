import logo from './logo.svg';
import './App.css';
import Routes from './routes/index';

function App() {
  console.log(window.location.href);
  const name = "tes"
  return (
    <>
      <Routes 
        name={name}
      />
    </>
  );
}

export default App;
