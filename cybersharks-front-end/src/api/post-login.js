async function postLogin(username, password) {
  //   const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
  const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the data format
      },
      body: JSON.stringify({ username, password }), // Shortened object syntax
    });

    // Check if the response status is not OK (e.g., 400 or 500 series errors)
    if (!response.ok) {
      const fallbackError = "Error trying to login";

      // Attempt to parse the error message from the server
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });

      // Use server-provided error message if available, otherwise fallback
      throw new Error(data?.detail || fallbackError);
    }

    // Return parsed JSON data from successful response
    return await response.json();
  } catch (error) {
    // Log or handle errors gracefully
    console.error("Login error:", error.message);
    throw error; // Re-throw the error for upstream handling
  }
}

export default postLogin;
