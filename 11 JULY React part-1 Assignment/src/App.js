import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";
import Person from "./components/Person";

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div className="App">
      <Header title="Header" />
      <Person name="Varun" age="21" />
      <Button text="click me" onClick="onClick" />
      <List items={items} />
    </div>
  );
}

export default App;
