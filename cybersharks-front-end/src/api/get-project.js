export const fetchPortfolios = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/portfolios`);
    if (!response.ok) {
      throw new Error("Failed to fetch portfolios");
    }
    console.log("response", response);
    return await response.json();
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
};
