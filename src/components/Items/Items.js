import { Card, Col, Container, Row } from "react-bootstrap";
import { compareDate } from "../../helpers/dateHelpers";
import ItemsCarousel from "./Carousel";
import EventInfo from "./EventInfo";

const Items = ({ data }) => {
  // Events filtered by current date
  const currentEvents = data.results.filter((el) =>
    compareDate(el.date_start, el.date_end, Date.now())
  );

  // Events filtered by status
  const currentActiveEvents = currentEvents.filter(
    (el) => el.status === "active"
  );

  // Events sorted by category
  const currentActiveEventsByCategory = [...currentActiveEvents].sort(function (
    a,
    b
  ) {
    return a.category - b.category;
  });

  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-1 g-4">
        {currentActiveEventsByCategory.map((el) => (
          <Col className="col-lg-12" key={el.event_id}>
            <Card className="mb-3" style={{ color: "#242424" }}>
              <Row>
                <Col className="col-sm-4">
                  <ItemsCarousel events={el} />
                </Col>
                <Col>
                  <EventInfo events={el} />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Items;
