import { useAuth } from "../hooks/use-auth";
import FormSection from "../components/FormSection";
import Button from "../components/Button";
import { useState } from "react";
import postPortfolio from "../api/post-portfolio";

function CreatePortfolio() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    company: "",
    biography: "",
    experienceLevel: "",
    photo: null,
    linkedin: "",
    email: "",
    location: "",
    topics: [],
    specialisations: [],
    specialisations_detail: "",
    topic_detail: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(formData);

  function handleOnChange(e) {
    const { name, value } = e.target;
    const isArray = Array.isArray(formData[name]);
    console.log(isArray);
    if (!Array.isArray(formData[name])) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      if (!formData[name].includes(value)) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      }
    }
  }

  function handleMultipleOptions(e) {
    const { name, value } = e.target;
    if (!formData[name].includes(value)) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    }
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prevData) => ({ ...prevData, photo: file }));
  }

  function removeTag(type, value) {
    if (Array.isArray(formData[type])) {
      setFormData({
        ...formData,
        [type]: formData[type].filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        [type]: "",
      });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    // Check for empty fields
    const {
      firstName,
      lastName,
      company,
      occupation,
      biography,
      experienceLevel,
      photo,
      linkedin,
      email,
      location,
      topics,
      specialisations,
      specialisations_detail,
      topic_detail,
    } = formData;
    // if (!firstName || !lastName || !email || !username || !password) {
    //   setErrorMsg("All fields are required. Please fill in every field.");
    //   return;
    // }

    // Clear error message before submitting
    setErrorMsg("");

    try {
      setIsLoading(true);

      // Call the signup API
      const response = await postPortfolio(
        firstName,
        lastName,
        biography,
        company,
        occupation,
        experienceLevel,
        photo,
        linkedin,
        email,
        location,
        topics,
        specialisations,
        specialisations_detail,
        topic_detail,

      );
      console.log("created portfolio successful:", response);
      //!todo: Then move to the portfolio page
    } catch (error) {
      console.error("Signup failed:", error.message);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(formData.photo instanceof File);
  console.log(formData.photo);
  //!todo logic each input should have values and onchange. form needs on submit.
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-customWhite">
      <form className="flex flex-col px-4 py-9 justify-center items-center bg-white shadow-md rounded-lg w-full max-w-7xl pt-24">
        {/* Name */}
        <FormSection
          title={<span className="text-accent1">Name</span>}
          style="border-b-[1px] border-gray-200"
          description="This is the name that will appear on your public profile. Use your real name or a professional alias that represents you best."
        >
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full text-[13px]">
              First Name
              <input
                type="text"
                className="grow"
                name="firstName"
                id="firstName"
                onChange={handleOnChange}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white text-[13px]">
              Last Name
              <input
                type="text"
                className="grow"
                name="lastName"
                id="lastName"
                onChange={handleOnChange}
                required
              />
            </label>
          </div>
        </FormSection>

        <FormSection
          title={<span className="text-accent1">Professional Background</span>}
          style="border-b-[1px] border-gray-200 w-full"
          description="Share your specialisation and the company you are currently working at."
        >
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full text-[13px]">
              Company
              <input
                type="text"
                className="grow"
                name="company"
                id="company"
                onChange={handleOnChange}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white text-[13px]">
              Role
              <input
                type="text"
                className="grow"
                name="occupation"
                id="occupation"
                onChange={handleOnChange}
                required
              />
            </label>
          </div>
        </FormSection>

        {/* Biography */}
        <FormSection
          title={<span className="text-accent1">Biography</span>}
          description="Introduce yourself with a brief biography. Include your professional background, key achievements, and passions."
          style="border-b-[1px] border-gray-200"
        >
          <textarea
            type="text"
            name="biography"
            id="biography"
            className="border border-gray-300 w-full min-h-64 rounded-lg"
            onChange={handleOnChange}
          />
        </FormSection>

        {/* Photo */}
        <FormSection
          title={<span className="text-accent1">Photo</span>}
          description="Upload a profile picture using a publicly accessible image. Recommended dimensions: 400x400 pixels."
          style="border-b-[1px] border-gray-200"
        >
          <input
            type="file"
            className="file-input w-full max-w-xs bg-white border-gray-200"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </FormSection>

        {/* Contact */}
        <FormSection
          title={<span className="text-accent1">Contact</span>}
          description="Provide your contact details so visitors can connect with you directly. Include an email address and a LinkedIn profile."
          style="border-b-[1px] border-gray-200"
        >
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full text-[12px]">
              LinkedIn
              <input
                type="text"
                className="grow"
                name="linkedin"
                id="linkedin"
                required
                onChange={handleOnChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white text-[12px]">
              Email
              <input
                type="text"
                className="grow"
                name="email"
                id="email"
                required
                onChange={handleOnChange}
              />
            </label>
          </div>
        </FormSection>

        {/* Location */}
        <FormSection
          title={<span className="text-accent1">Location</span>}
          description="Specify your current city and country. This helps people know where you are based."
          style="border-b-[1px] border-gray-200"
        >
          <select
            value={formData.location}
            name="location"
            onChange={handleOnChange}
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10 "
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Brisbane" className="text-black">
              Brisbane
            </option>
            <option value="Melbourne" className="text-black">
              Melbourne
            </option>
            <option value="Sydney" className="text-black">
              Sydney
            </option>
          </select>
          {formData.location && (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex justify-between items-center gap-2 sm:w-40">
              {formData.location}
              <button
                onClick={() => removeTag("location", location)}
                className="hover:text-purple-600"
              >
                ×
              </button>
            </span>
          )}
        </FormSection>

        {/* Experience Level */}
        <FormSection
          title={<span className="text-accent1">Experience Level</span>}
          description="Choose your professional experience level to give visitors an idea of your expertise."
          style="border-b-[1px] border-gray-200"
        >
          <select
            value={formData.experienceLevel}
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
            onChange={handleOnChange}
            name="experienceLevel"
          >
            <option value="" disabled>
              Select Experience level
            </option>
            <option value="Beginner" className="text-black">
              Beginner
            </option>
            <option value="Junior" className="text-black">
              Junior
            </option>
            <option value="Mid" className="text-black">
              Mid
            </option>
            <option value="Senior" className="text-black">
              Senior
            </option>
          </select>

          {formData.experienceLevel && (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex justify-between items-center gap-2 sm:w-40">
              {formData.experienceLevel}
              <button
                onClick={() => removeTag("experienceLevel", experienceLevel)}
                className="hover:text-purple-600"
              >
                ×
              </button>
            </span>
          )}
        </FormSection>

        {/* Topic */}
        <FormSection
          title={<span className="text-accent1">Topic</span>}
          description="Topics represent your interests, focus areas, or key subjects that drive your passion."
        >
          <select
            name="topics"
            //value={formData.topics}
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
            onChange={handleOnChange}
          >
            <option value="" disabled>
              Select Topic
            </option>
            <option value="DevOps" className="text-black">
              DevOps
            </option>
            <option value="Frontend" className="text-black">
              Frontend
            </option>
            <option value="Agile methodologies" className="text-black">
              Agile methodologies
            </option>
            <option value="Data Visualisation" className="text-black">
              Data Visualisation
            </option>
            <option value="Responsive Design" className="text-black">
              Responsive Design
            </option>
          </select>
          {formData.topics.map((topic) => (
            <span
              key={topic}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2  w-36 sm:w-40"
            >
              {topic}
              <button
                onClick={() => removeTag("topics", topic)}
                className="hover:text-blue-600"
              >
                ×
              </button>
            </span>
          ))}
        </FormSection>

        <FormSection
          title={<span className="text-accent1"></span>}
          description="Here, you can describe why this topic interests you, share your relevant experiences, or explain how it aligns with your career goals. For example, if you are interested in DevOps, you might mention your experience with CI/CD pipelines, infrastructure as code, or cloud deployment."
          style="border-b-[1px] border-gray-200"
        >
          <textarea
            type="text"
            name="topic_detail"
            id="topic_detail"
            className="border border-gray-300 w-full min-h-64 rounded-lg"
            onChange={handleOnChange}
          />
        </FormSection>

        {/* Specialisation */}
        <FormSection
          title={<span className="text-accent1">Specialisation</span>}
          description="Highlight your key skills or areas of expertise. Use specific technologies or domains."
        >
          <select
            value=""
            name="specialisations"
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
            onChange={handleMultipleOptions}
          >
            <option value="" disabled>
              Select Specialisation
            </option>
            <option value="ReactJs" className="text-black">
              ReactJs
            </option>
            <option value="Html/Css" className="text-black">
              Html/Css
            </option>
            <option value="Java" className="text-black">
              Java
            </option>
            <option value="Django" className="text-black">
              Django
            </option>
            <option value="Python" className="text-black">
              Python
            </option>
          </select>
          {formData.specialisations.map((specialisation) => (
            <span
              key={specialisation}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center justify-between gap-2  w-36 sm:w-40"
            >
              {specialisation}
              <button
                onClick={() => removeTag("specialisations", specialisation)}
                className="hover:text-blue-600"
              >
                ×
              </button>
            </span>
          ))}
        </FormSection>

        <FormSection
          title={<span className="text-accent1"></span>}
          description="Select your specialisation and describe how you have applied these skills in projects. Share your experience, challenges, or achievements related to this specialisation, and explain how it contributes to your career goals."
        >
          <textarea
            type="text"
            name="specialisations_detail"
            id="specialisations_detail"
            className="border border-gray-300 w-full min-h-64 rounded-lg"
            onChange={handleOnChange}
          />
        </FormSection>

        <Button
          className="mt-5 h-10 w-[70%] sm:w-[40%] bg-customBlack text-customWhite"
          name="Create your portfolio"
          onClick={handleSubmit}
        >
          Create a portfilo
        </Button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
