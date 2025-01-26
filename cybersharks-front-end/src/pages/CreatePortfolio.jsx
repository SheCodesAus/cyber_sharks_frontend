import { useAuth } from "../hooks/use-auth";
import FormSection from "../components/FormSection";
import Button from "../components/Button";
import { useState } from "react";

function CreatePortfolio() {
  const [newPortpolioForm, setNewPortfolioForm] = useState({ username: "" });
  const [location, setLocation] = useState("");

  function handleOnChange() {}

  function onSubmit() {}

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-customWhite">
      <h1 className="pt-20 w-full text-left px-4 font-bold text-[1.5rem] font-cormorant">
        {/* <span className="">Start your portfolio</span> */}
      </h1>
      <p className="px-4 text-left text-gray-600 text-[1.1rem] mt-2 font-serif">
        Build your professional portfolio on Prism and highlight your
        experience, skills, and key topics.
      </p>
      <p className="px-4 text-left text-gray-600 text-[1.1rem] mt-1 font-serif">
        Let your expertise shine and connect with event organizers to secure
        opportunities to share your knowledge and inspire others.
      </p>
      <form
        className="flex flex-col px-4 py-9 justify-center items-center bg-white shadow-md rounded-lg w-full max-w-7xl"
        onSubmit={onSubmit}
      >
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
          <textarea className="border border-gray-300 w-full min-h-64 rounded-lg" />
        </FormSection>

        {/* Experience Level */}
        <FormSection
          title={<span className="text-accent1">Experience Level</span>}
          description="Choose your professional experience level to give visitors an idea of your expertise."
        >
          <select
            value=""
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
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
        </FormSection>

        {/* Photo */}
        <FormSection
          title={<span className="text-accent1">Photo</span>}
          description="Upload a profile picture using a publicly accessible image. Recommended dimensions: 400x400 pixels."
        >
          <input type="file" className="file-input w-full max-w-xs" />
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
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
        </FormSection>

        {/* Topic */}
        <FormSection
          title={<span className="text-accent1">Topic</span>}
          description="Topics represent your interests, focus areas, or the key subjects you are passionate about."
        >
          <select
            value=""
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
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
        </FormSection>

        {/* Specialisation */}
        <FormSection
          title={<span className="text-accent1">Specialisation</span>}
          description="Highlight your key skills or areas of expertise. Use specific technologies or domains."
        >
          <select
            value=""
            className="w-[60%] border border-gray-300 rounded-lg p-2 bg-white text-gray-500 hover:border-gray-400 hover:bg-gray-100 h-10"
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
        </FormSection>

        <Button
          className="mt-5 w-[70%] sm:w-[40%]"
          name="Create your portfolio"
        ></Button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
