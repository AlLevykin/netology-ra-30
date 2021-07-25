import JsonViewer from "../JsonViewer";

function App() {
  return (
    <div className="container-sm">
      <div className="row">
        <div className="col">
          <JsonViewer url="/data" />
        </div>
        <div className="col">
          <JsonViewer url="/wrongdata" />
        </div>
        <div className="col">
          <JsonViewer url="/error" />
        </div>        
        <div className="col">
          <JsonViewer url="/loading" />
        </div>
      </div>
    </div>
  );
}

export default App;
