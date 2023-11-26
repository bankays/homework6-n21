import React, { useEffect, useState } from "react";
import "./Home.css";
import { instance } from "../../api/index";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await instance.get("/products");
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="Home">
      Home
      <input
        className="ss"
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
              <Link
                to={`/product-view/${item.id}`}
                className="namee"
                key={item.id}
              >
                <p className="p10">{item.title}</p>
                <img
                  className="imggg"
                  width={100}
                  height={100}
                  src={item.images[0]}
                  alt=""
                />
              </Link>
            ))
        )}
      </div>
    </div>
  );
};

export default Home;
