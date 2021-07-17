import Container from "../Container";
import Row from "../Container/Row";
import Col from "../Container/Col";
import Logo from "../Logo";
import Search from "../Search";
import Advertisement from "../Advertisement";
import Services from "../Services";
import ServiceCard from "../ServiceCard";

function App() {
  return (
    <Container>
      <Row>
        <Col numOfCols="2" />
        <Col>
          <Row>
            <Col numOfCols="8">
              <ServiceCard>
                <img src="img/news.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
            <Col>
              <ServiceCard>
                <img src="img/school.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
          </Row>
          <Row>
            <Col><Services /> </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col numOfCols="2">
          <Logo />
        </Col>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col numOfCols="2" />
        <Col><Advertisement /></Col>
      </Row>
      <Row>
        <Col numOfCols="2" />
        <Col>
          <Row>
            <Col>
              <ServiceCard>
                <img src="img/links.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
            <Col>
              <ServiceCard>
                <img src="img/maps.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
          </Row>
          <Row>
          <Col>
              <ServiceCard>
                <img src="img/weather.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
            <Col>
              <ServiceCard>
                <img src="img/tv.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
          </Row>
        </Col>
        <Col>
              <ServiceCard>
                <img src="img/live.jpg" className="img-fluid" alt="..." />
              </ServiceCard>
            </Col>
      </Row>
    </Container>
  );
}

export default App;
