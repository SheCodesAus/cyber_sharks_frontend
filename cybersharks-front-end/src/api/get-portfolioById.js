async function getPortfolioById(id) {
  const url = `${import.meta.env.VITE_API_URL}/portfolios/${id}`;
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      const fallbackError = "Error fetching projects";
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
      const errorMsg = data?.detail ?? fallbackError;
      throw new Error(errorMsg);
    }
    const portfolio = await response.json();
    return portfolio;
  } catch (error) {
    console.error("Failed to fetch portfolio by id:", error.message);
    throw error;
  }
}

export default getPortfolioById;
