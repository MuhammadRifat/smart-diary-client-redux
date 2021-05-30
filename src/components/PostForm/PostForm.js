import React, { useContext, useState } from 'react';
import axios from 'axios';
import { userContext } from '../../App';

const PostForm = ({handleLoad}) => {
    const [postData, setPostData] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c4ebb744a3b647feb62c85c668dcb1fa');
        imageData.append('image', event.target.files[0]);

        // upload image and generate a unique image url
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newData = { ...postData };
                newData.imageUrl = response.data.data.display_url;
                setPostData(newData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleBlur = (e) => {
        const newData = { ...postData };
        newData[e.target.name] = e.target.value;
        setPostData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            ...postData, 
            name: loggedInUser.name, 
            email: loggedInUser.email,
            likes: 0, 
            date: new Date()
        }

        fetch(`https://fierce-headland-67117.herokuapp.com/addPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Data added successfully");
                    handleLoad();
                    document.getElementById('title').value = '';
                    document.getElementById('tags').value = '';
                    document.getElementById('image').value = '';
                    document.getElementById('description').value = '';
                }
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" className="form-control" onBlur={handleBlur} placeholder="Title" required /><br />
            <textarea rows="5" name="description" id="description" className="form-control" onBlur={handleBlur} placeholder="Description" required /><br />
            <input type="text" name="tags" id="tags" className="form-control" onBlur={handleBlur} placeholder="Tags (coma separated)" required /><br />
            <input type="file" name="image" id="image" onChange={handleImageUpload} required /><br />
            <button className="btn btn-primary btn-block mt-3" type="submit">Post</button>
        </form>
    );
};

export default PostForm;