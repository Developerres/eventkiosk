import { Alert, Container } from "react-bootstrap";

const Alerts = ({ title, message, type }) => {
  return (
    <Container>
      <Alert variant={type}>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default Alerts;
