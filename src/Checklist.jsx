import { useState, useEffect } from "react";
import { getToken } from "./authService";
import api from "./api/axios";
function Checklist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      console.log(token);

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await api.get("/checklist");

        setData(response.data);
        console.log(response.data);
      }
    };

    fetchData();
  }, []);
  return <div>Checklist</div>;
}

export default Checklist;
