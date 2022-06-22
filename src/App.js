import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import Preloader from "./preloader/Preloader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loader ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
