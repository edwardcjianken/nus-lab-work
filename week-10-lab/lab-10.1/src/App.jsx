import { useState, useEffect } from "react";

function App() {
  // Step 1: Set up state to store the fetched posts
  const [data, setData] = useState([]);

  // Step 2: Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Posts from JSON Placeholder</h1>
      {/* Step 3: Display the data using map */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
