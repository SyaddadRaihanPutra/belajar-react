import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function CourseSection() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://syaddadweb.cu.ma/api/index.php/blogs");
      const data = await response.json();
      setCourses(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1 className="text-center py-5">Our Courses</h1>
      <Row className="d-flex justify-content-center">
        {courses.map((course) => (
          <Card key={course.id} style={{ maxWidth: '18rem' }} className="m-3 p-0">
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default CourseSection;
