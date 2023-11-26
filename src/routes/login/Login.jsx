import React, { useEffect, useState } from "react";
import { instance } from "../../api/index";
import "./Login.css";
const Login = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await instance.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
  return (
    <div>
      <h1>login</h1>
      <input
        className="ss1"
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="searchcard">
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <div className="namee" key={item.id}>
                <p className="p10">{item.title}</p>
                <img
                  className="imggg"
                  width={100}
                  height={100}
                  src={item.images[0]}
                  alt=""
                />
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Login;
