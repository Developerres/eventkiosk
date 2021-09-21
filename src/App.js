import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { getEventsAPI } from "./api/api";
import Items from "./components/Items/Items";
import Alerts from "./components/Alerts";
import { CACHE_IN_SECONDS } from "./const/const";

const App = () => {
  const [dataStatus, setDataStatus] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("data")) return;
    async function Fetch() {
      try {
        let response = await getEventsAPI();
        if (!response.status === 200) {
          setDataStatus(response.status);
          setLoading(false);
        } else {
          const data = await response.data;
          setData(data);
          setLoading(false);
          localStorage.setItem("data", JSON.stringify(data));
        }
      } catch (e) {
        setDataStatus(e.response.status + " " + e.response.data.detail);
        setLoading(false);
      }
    }
    Fetch();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.removeItem("data");
    }, CACHE_IN_SECONDS);
    return () => clearInterval(interval);
  }, []);

  if (data.length === 0 && !loading) {
    return (
      <Alerts
        type="danger"
        title="Oh snap! You got an error!"
        message={dataStatus}
      />
    );
  } else if (data.length === 0 && loading) {
    return (
      <Alerts
        type="secondary"
        title="Waiting for the data"
        message="Be patient"
      />
    );
  } else {
    return <Items data={data} />;
  }
};

export default App;
