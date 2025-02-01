import { useState, useEffect } from "react";
import { getPortfolios } from "../api/get-project";

const useProjects = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const data = await getPortfolios();
        setPortfolios(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  return { portfolios, loading, error };
};

export default useProjects;
