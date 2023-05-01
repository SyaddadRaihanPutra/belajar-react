import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function courseSection() {
  return (
    <Container>
        <h1 className="text-center py-5">Our Courses</h1>
        <Row className="d-flex justify-content-center">
        <Card style={{ maxWidth: '18rem' }} className="m-3 p-0">
          <Card.Img variant="top" src="https://www.siotics.org/public/images/frontImg.webp" />
          <Card.Body>
            <Card.Title>Course One</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ maxWidth: '18rem' }} className="m-3 p-0">
          <Card.Img variant="top" src="https://www.siotics.org/public/images/frontImg.webp" />
          <Card.Body>
            <Card.Title>Course Two</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ maxWidth: '18rem' }} className="m-3 p-0">
          <Card.Img variant="top" src="https://www.siotics.org/public/images/frontImg.webp" />
          <Card.Body>
            <Card.Title>Course Three</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{ maxWidth: '18rem' }} className="m-3 p-0">
          <Card.Img variant="top" src="https://www.siotics.org/public/images/frontImg.webp" />
          <Card.Body>
            <Card.Title>Course Four</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Row>
    </Container>
  );
}

export default courseSection;
