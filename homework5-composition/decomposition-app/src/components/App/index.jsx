import Container from "../Container";
import Row from "../Container/Row";
import Col from "../Container/Col";
import Logo from "../Logo";
import Search from "../Search";
import Advertisement from "../Advertisement";

function App() {
  return (
    <Container>
      <Row>
        <Col numOfCols="2" />
        <Col>
          <Row>
            <Col numOfCols="8">Новости</Col>
            <Col>Дзен</Col>
          </Row>
          <Row>
            <Col>Сервисы</Col>
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
            <Col>Погода</Col>
            <Col>Расписания</Col>
          </Row>
          <Row>
            <Col>Посещаемое</Col>
            <Col>Телепрограмма</Col>
          </Row>
        </Col>
        <Col>Эфир</Col>
      </Row>
    </Container>
  );
}

export default App;
