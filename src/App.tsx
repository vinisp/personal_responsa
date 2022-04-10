import { Box } from "./Componentes/Box";

function App() {
  return (
    <div className="App">
      <Box
        title="My First compontnt"
        children={<div>Outro Elemento HTML DENTRO DO BOX</div>}
      />
    </div>
  );
}

export default App;
