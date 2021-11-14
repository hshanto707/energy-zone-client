import { useEffect } from "react";
import { useState } from "react"

const useServiceData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(error => console.log(error.message))
  }, []);
    return [services, setServices];
}

export default useServiceData;