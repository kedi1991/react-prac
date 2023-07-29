import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting>
          
        </FunctionalGreeting>
        <FunctionalGreetingWithProps greeting="from UG" name="Okurut" age="32"></FunctionalGreetingWithProps>
    </div>
  );
}

export default App;
