import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Home = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const done = false;
        const task = { name, description, done };

        const url = "http://localhost:5000/tasks";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {});
        event.target.reset();
    }
    return (
        <Container>
            <h1 className='my-5 text-danger'>To Do List</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Add Task Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='Add Task Description' name="description" rows={3} required />
                </Form.Group>
                <button className="btn btn-outline-danger">ADD TASK</button>
            </Form>
        </Container>
    );
};

export default Home;