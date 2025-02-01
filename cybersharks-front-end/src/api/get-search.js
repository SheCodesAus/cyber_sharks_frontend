async function searchPortfolioByKeywords(
  location = "",
  specialisation = [],
  topic = []
) {
  const baseUrl = `${import.meta.env.VITE_API_URL}/search/`;
  const params = new URLSearchParams();

  if (location) params.append("location", location);
  if (specialisation.length > 0)
    params.append("specialisation", specialisation.join(","));
  if (topic.length > 0) params.append("topic", topic.join(","));

  const searchUrl = `${baseUrl}?${params.toString()}`;
  console.log("URL:", searchUrl);

  try {
    const response = await fetch(searchUrl, { method: "GET" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.detail ?? "Error fetching projects");
    }

    console.log("search result:", data);
    return data;
  } catch (error) {
    console.error("fail to search:", error.message);
    return { error: error.message };
  }
}

export default searchPortfolioByKeywords;
