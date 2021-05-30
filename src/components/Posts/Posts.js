import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Posts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Posts = ({ post, handleModal, handleDelete }) => {
    const { title, imageUrl, name, description, tags, likes, date, _id } = post;

    const postDate = new Date(date);
    const diffDays = new Date().getDate() - postDate.getDate();

    return (
        <Col md={6} className="mt-3">
                <div style={{ border: '1px solid lightgray', borderRadius: 10 }}>
                    <div className="img-div" onClick={() => handleModal(_id)} style={{cursor:'pointer' }}>
                        <Image src={imageUrl} alt="" className="w-100" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 200 }} />
                        <div className="top-text">
                            <Row>
                                <Col md={6}>
                                    <h5>{name}</h5>
                                </Col>
                                <Col md={6}>
                                    <h6 className="ml-5 text-dark">{diffDays} days ago</h6>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="p-2">
                        <small className="text-secondary">#{tags}</small>
                        <h5>{title}</h5>
                        <p>{description.slice(0, 50)}</p>
                        <button className="btn" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                </div>
        </Col>
    );
};

export default Posts;