import Card from "../Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import CardHeader from "../Card/CardHeader";
import InfoCard from "../Card/InfoCard";
import Problems from "../Card/Problems";

function App() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <InfoCard image="https://i.etsystatic.com/20630041/r/il/87a68f/1992786173/il_570xN.1992786173_5fzy.jpg">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://reactjs.org/" className="btn btn-primary">Go somewhere</a>
          </InfoCard>
        </div>
        <div className="col">
          <InfoCard>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="https://reactjs.org/" className="btn btn-primary">Go somewhere</a>
          </InfoCard>
        </div>
        <div className="col">
          <Problems />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <Card freestyled>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://reactjs.org/" className="card-link">Card link</a>
              <a href="https://ru.reactjs.org/" className="card-link">Another link</a>
            </div>
          </Card>
        </div>
        <div className="col">
          <Card className="text-primary border-primary">
            <CardHeader>
              Header text
            </CardHeader>
            <CardBody className="text-center">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="https://reactjs.org/" className="btn btn-primary">Go somewhere</a>
            </CardBody>
            <CardFooter className="text-end">
              <span className="badge bg-secondary">Badge</span> Footer text.
            </CardFooter>
          </Card>
        </div>
        <div className="col">
          <Card className="border-dark">
            <img src="https://i.etsystatic.com/20213817/r/il/cc8114/1878204646/il_570xN.1878204646_toi9.jpg" className="card-img-top" alt="..." />
            <CardBody>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
