import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { userContext } from '../../App';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';
import StatusModal from '../StatusModal/StatusModal';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [isPostUpload, setIsPostUpload] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        setSpinner(true);
        fetch('https://fierce-headland-67117.herokuapp.com/allPosts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setSpinner(false);
            })
    }, [isPostUpload])

    const handleLoad = () => {
        setIsPostUpload(true);
    }

    const handleModal = (id) => {
        const modalData = posts.find(post => post._id === id);
        setModalData(modalData);
        setModalShow(true);
    }

    const handleDelete = (id) => {
        const newData = posts.filter(post => post._id !== id);
        setPosts(newData);

        fetch(`https://fierce-headland-67117.herokuapp.com/deletePost/:${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
    console.log(posts);
    return (
        <Container>
            <StatusModal
                show={modalShow}
                modalData={modalData}
                onHide={() => setModalShow(false)}
            />

            <Row className="mt-3 mb-3">
                <Col md={8}>
                    <Row>
                        {
                            posts?.map(post => <Posts post={post} handleModal={handleModal} handleDelete={handleDelete} key={post._id}></Posts>)
                        }
                    </Row>
                    {
                        spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
                    }
                    {
                        !spinner && !posts.length && <p className="text-center">No posts found</p>
                    }
                </Col>
                <Col md={4}>
                    <h5>Creating a Memory</h5>
                    <PostForm handleLoad={handleLoad}></PostForm>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;