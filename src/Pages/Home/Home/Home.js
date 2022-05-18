import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [refresh]);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const email = user.email;
        const done = false;
        const task = { name, description, email, done };

        const url = "http://localhost:5000/tasks";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => { 
                setRefresh(!refresh)
            });
        event.target.reset();
    }

    const handleDelete = id => {
        swal("Are you sure you want to delete your comment?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    const url = `http://localhost:5000/task/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            setRefresh(!refresh);
                        })
                }
            })
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
            <div>
                {
                    tasks.map(task => <div
                        key={task._id}
                        className="bg-danger rounded text-white text-start p-4 my-4 shadow-lg"
                    >
                        <div>
                            <p className='fs-4'>Name : {task.name}</p>
                            <p>Description : {task.description}</p>
                        </div>
                        <button className="btn btn-outline-light me-3">Completed</button>
                        <button className="btn btn-outline-light" onClick={() => handleDelete(task._id)}>Delete</button>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default Home;