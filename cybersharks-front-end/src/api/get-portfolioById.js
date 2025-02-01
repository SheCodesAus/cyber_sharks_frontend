async function getPortfolioById(id) {
  const url = `${import.meta.env.VITE_API_URL}/portfolios/${id}`;
  console.log(`Fetching portfolio from: ${url}`); // Debugging line

  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      console.error("Response status:", response.status);
      const fallbackError = "Error fetching projects";
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
      const errorMsg = data?.detail ?? fallbackError;
      throw new Error(errorMsg);
    }
    const portfolio = await response.json();
    console.log("Fetched portfolio:", portfolio); // Debugging line
    return portfolio;
  } catch (error) {
    console.error("Failed to fetch portfolio by id:", error.message);
    throw error;
  }
}

export default getPortfolioById;
