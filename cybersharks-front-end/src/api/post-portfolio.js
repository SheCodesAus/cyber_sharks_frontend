// async function postPortfolio(
//   firstName,
//   lastName,
//   occupation,
//   company,
//   biography,
//   experienceLevel,
//   photo,
//   linkedin,
//   email,
//   location,
//   topics,
//   specialisations,
//   specialisations_detail,
//   topic_detail
// ) {
//   const url = `${import.meta.env.VITE_API_URL}/portfolios/`;
//   const token = window.localStorage.getItem("token");

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `token ${token}`,
//       },
//       body: JSON.stringify({
//         first_name: firstName,
//         last_name: lastName,
//         occupation,
//         company,
//         biography,
//         experienceLevel,
//         photo,
//         linkedin_url:linkedin,
//         email,
//         location,
//         topics,
//         specialisations,
//         specialisations_detail,
//         topic_detail,
//       }),
//     });

//     if (!response.ok) {
//       const contentType = response.headers.get("Content-Type");
//       if (contentType && contentType.includes("application/json")) {
//         const errorData = await response.json();
//         throw errorData;
//       } else {
//         const errorText = await response.text();
//         throw new Error(`Unexpected response: ${errorText}`);
//       }
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error in create portfolio:", error);
//     throw error;
//   }
// }

// export default postPortfolio;

async function postPortfolio(
  firstName,
  lastName,
  occupation,
  company,
  biography,
  experienceLevel,
  photo, 
  linkedin,
  email,
  location,
  topics,
  specialisations,
  specialisations_detail,
  topic_detail
) {
  const url = `${import.meta.env.VITE_API_URL}/portfolios/`;
  const token = window.localStorage.getItem("token");

  // ✅ FormData 객체 생성
  const formData = new FormData();

  formData.append("first_name", firstName);
  formData.append("last_name", lastName);
  formData.append("occupation", occupation);
  formData.append("company", company);
  formData.append("biography", biography);
  formData.append("experience_level", experienceLevel);
  formData.append("linkedin_url", linkedin);
  formData.append("email", email);
  formData.append("location", location);
  formData.append("specialisations_detail", specialisations_detail);
  formData.append("topic_detail", topic_detail);
  formData.append("topics", topics);
  formData.append("specialisations", specialisations);

  if (photo) {
    formData.append("photo", photo);
  }

  // formData.append("topics", JSON.stringify(topics));
  // formData.append("specialisations", JSON.stringify(specialisations));

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
      },
      body: formData,
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
