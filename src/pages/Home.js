import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import Navbar from '../components/Navbar';


const Home = () => {
    const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    );
}

export default Home;