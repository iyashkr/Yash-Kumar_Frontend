import "./App.css";
import List from "./list";

function App() {
  const itemsList = [
    {
      text: "one",
    },
    {
      text: "two",
    },
    {
      text: "three",
    },

    {
      text: "four",
    },
    {
      text: "five",
    },
    {
      text: "six",
    },
  ];
  return (
    <div className="App">
      <List items={itemsList} />
    </div>
  );
}

export default App;
