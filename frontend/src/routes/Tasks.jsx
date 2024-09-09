import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { fetchTasks } from "../services/apiTasks";

const Home = () => {
    const { auth } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     const 
    // }, []);

    return (
        <div>
            <h1>Tasks</h1>
        </div>
    );
};

export default Home;