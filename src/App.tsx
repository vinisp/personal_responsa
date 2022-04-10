import { Box } from "./Componentes/Box";

function App() {
  return (
    <div className="App">
      <Box
        title="My First compontnt"
        children={<div>Outro Elemento HTML DENTRO DO BOX</div>}
      />
      <iframe
        title="FirstFrame"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GNCd_ERZvZM"
        frameBorder="0"
        allowFullScreen
      />
      <iframe
        title="Second Frame"
        src="https://player.vimeo.com/video/689437748"
        width="340"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  );
}

export default App;
