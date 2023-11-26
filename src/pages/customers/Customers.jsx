import React, { useEffect, useState } from "react";
import "./Customers.css";
import axios from "axios";

const Customers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("https://api.escuelajs.co/api/v1/users");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Customers">
      <table>
        <thead>
          <tr>
            <th>имя</th>
            <th className="first">Email</th>
            <th>Password</th>

            <th>Role</th>
            <th>active </th>
          </tr>
        </thead>
        {user.map((users) => (
          <tbody className="tb" key={users.id}>
            <tr>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.password}</td>
              <td>{users.role}</td>

              <td>
                <button className="btn btn-success">actvice</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Customers;
