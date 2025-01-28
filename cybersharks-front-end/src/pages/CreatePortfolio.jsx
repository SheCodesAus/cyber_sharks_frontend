import { useAuth } from "../hooks/use-auth";
import FormSection from "../components/FormSection";
import Button from "../components/Button";
import { useState } from "react";

function CreatePortfolio() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    biography: "",
    experienceLevel: "",
    photo: null,
    linkedin: "",
    email: "",
    location: "",
    topics: [],
    specialisations: [],
  });

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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  //!todo logic each input should have values and onchange. form needs on submit.
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-customWhite">
      <h1 className="w-full text-left  font-bold text-[1.5rem] font-sans px-4 pt-20  max-w-7xl ">
        Start your portfolio
      </h1>

      <form className="flex flex-col px-4 py-9 justify-center items-center bg-white shadow-md rounded-lg w-full max-w-7xl">
        {/* Name */}
        <FormSection
          title={<span className="text-accent1">Name</span>}
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

        {/* Biography */}
        <FormSection
          title={<span className="text-accent1">Biography</span>}
          description="Introduce yourself with a brief biography. Include your professional background, key achievements, and passions."
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
        >
          <input
            type="file"
            className="file-input w-full max-w-xs bg-white border-gray-200"
          />
        </FormSection>

        {/* Contact */}
        <FormSection
          title={<span className="text-accent1">Contact</span>}
          description="Provide your contact details so visitors can connect with you directly. Include an email address and a LinkedIn profile."
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
          description="Topics represent your interests, focus areas, or the key subjects you are passionate about."
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
            <option value="Scrum Master" className="text-black">
              Scrum Master
            </option>
            <option value="Public Speaker" className="text-black">
              Public Speaker
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
            <option value="React" className="text-black">
              React
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

        <Button
          className="mt-5 w-[70%] sm:w-[40%]"
          name="Create your portfolio"
          onClick={handleSubmit}
        ></Button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
