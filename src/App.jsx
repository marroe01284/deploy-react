import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://v2.api.noroff.dev/auction/listings");
      const fetchedData = await res.json();
      setData(fetchedData.data);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="font-extrabold text-2xl text-amber-300">I have Successfully deployed</h1>
      <Link to={"/test"}>To test page</Link>
      <br />
      <a href="/test">Achor to test page</a>
      <div>
        {data &&
          data.map((data) => {
            return (
              <div className="flex justify-center" key={data.id}>
                {data.title}
                {data.created}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
