import { useState, useEffect } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]); // store the list of users
    const [loading, setLoading] = useState(true); // this variable is to render loading status
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://localhost:8080/users")
        .then(res => {
            if (!res.ok) {
                throw new Error("There is an error when fetching api");
            } 
            return res.json();
        })
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }, []) // the empty array is just render once after page is loaded
    if (loading) return <p>Loading ...</p>
    if (error) return <p>There is an error</p>
    return (
        <div>
            <h2>Danh sách người dùng:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - 📧 {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );

}
