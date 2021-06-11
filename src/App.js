import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import Xlfile from './components/xlfile'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
          <Route path="/task3" component={Task3} />
          <Route path="/task4" component={Xlfile} />
          <Route path="/" component={Task1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
