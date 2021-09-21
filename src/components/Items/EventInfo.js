import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { compareDate, dateFormat } from "../../helpers/dateHelpers";

const EventInfo = ({ events }) => {
  return (
    <Card.Body>
      <Card.Text>
        <small className="text-muted">
          id: {events.event_id} status: {events.status} category:{" "}
          {events.category}
        </small>
      </Card.Text>
      <Card.Title>{events.title}</Card.Title>

      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: events.description }}
      />

      <ListGroup className="list-group-flush">
        <ListGroupItem>Start: {dateFormat(events.date_start)}</ListGroupItem>
        <ListGroupItem>End: {dateFormat(events.date_end)}</ListGroupItem>
        <Card.Title className="mt-5">Buy a ticket</Card.Title>
        <ListGroupItem>
          <ListGroup>
            {events.tickets.length
              ? events.tickets.map((el, index) => (
                  <ListGroupItem key={index}>
                    {el.name}{" "}
                    {compareDate(el.sell_start, el.sell_end, Date.now()) ? (
                      <Button variant="outline-primary">Price {el.cost}</Button>
                    ) : (
                      <>
                        <Button
                          variant="outline-secondary"
                          disabled
                          style={{
                            pointerEvents: "none",
                          }}
                        >
                          Price {el.cost}
                        </Button>{" "}
                        <small className="text-muted">
                          This Item available only between:{" "}
                          {dateFormat(el.sell_start)} and{" "}
                          {dateFormat(el.sell_end)}
                        </small>
                      </>
                    )}
                  </ListGroupItem>
                ))
              : ""}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </Card.Body>
  );
};

export default EventInfo;
