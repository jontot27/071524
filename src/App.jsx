import Hello from "./assets/Hello";

function App() {
  const person = {
    name: "Aljon",
    message: "Kaya mo yan!",
    emoji: "💯",
    birthDate: [1996, 1, 27],
  };
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
