async function postPortfolio(
  firstName,
  lastName,
  biography,
  experienceLevel,
  photo,
  linkedin,
  email,
  location,
  topics,
  specialisations
) {
  const url = `${import.meta.env.VITE_API_URL}/portfolios/`;
  const token = window.localStorage.getItem("token");
  console.log("Request URL:", url);
  console.log("Request Body:", {
    firstName,
    lastName,
    biography,
    experienceLevel,
    photo,
    linkedin,
    email,
    location,
    topics,
    specialisations,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        biography,
        experienceLevel,
        photo,
        linkedin,
        email,
        location,
        topics,
        specialisations,
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw errorData;
      } else {
        const errorText = await response.text();
        throw new Error(`Unexpected response: ${errorText}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error("Error in create portfolio:", error);
    throw error;
  }
}

export default postPortfolio;
