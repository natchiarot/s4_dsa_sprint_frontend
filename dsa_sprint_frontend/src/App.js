import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Trees from "./components/Trees";
import AddTrees from "./components/AddTrees";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [trees, setTrees] = useState([]);
  const [showAddTree, setShowAddTree] = useState(false);
  const [showTrees, setShowTrees] = useState(false);

  useEffect(() => {
    const getTrees = async () => {
      const treesFromServer = await fetchTrees();
      setTrees(treesFromServer);
    };

    getTrees();
  }, []);

  const fetchTrees = async () => {
    const res = await fetch("http://localhost:8080/numbers");
    const data = await res.json();
    return data;
  };

  const fetchTree = async (id) => {
    const res = await fetch("http://localhost:8080/number/${id}");
    const data = await res.json();
    return data;
  };

  const addTree = async (tree) => {
    const res = await fetch("http://localhost:8080/number", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(tree),
    });

    const data = await res.json();
    setTrees([...trees, data]);
  };

  return (
    <Router>
      <div>
        <Header
          onAdd={() => setShowAddTree(!showAddTree)}
          showAdd={showAddTree}
        />
        <div className={showAddTree ? "" : "hidden"}>
          <AddTrees onAdd={addTree} />
        </div>

        <button onClick={() => setShowTrees(!showTrees)}>
          {showTrees ? "Hide Trees" : "Show All Trees"}
        </button>
        <div className={showTrees ? "" : "hidden"}>
          {trees.length > 0 ? <Trees trees={trees} /> : "No trees yet"}
        </div>
      </div>
    </Router>
  );
}

export default App;
