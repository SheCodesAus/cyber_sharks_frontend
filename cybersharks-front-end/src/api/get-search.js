async function searchPortfolioByKeywords(
  location="",
  specialisation = [],
  topic = []
) {
  const baseUrl = `${import.meta.env.VITE_API_URL}/search/`;
  const params = new URLSearchParams();

  if (location) {
    params.append("location", location);
  }

  if (specialisation.length > 0) {
    params.append("specialisation", specialisation.join(","));
  }

  if (topic.length > 0) {
    params.append("topic", topic.join(","));
  }

  const url = `${baseUrl}?${params.toString()}`;
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

    const searchResult = await response.json();
    console.log(searchResult);
    return searchResult;
  } catch (error) {
    console.error("Failed to fetch result", error.message);
    throw error;
  }
}

export default searchPortfolioByKeywords;
