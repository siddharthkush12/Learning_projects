import React, { useState, useEffect } from "react";
import { Container, Postcard } from "../components";
import databaseservice from "../appwrite/dataAuth";

function Allpost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {}, []);
  databaseservice.getPost([]).then((post) => {
    if (post) {
      setPost(post.documents);
    }
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Allpost;
