import { useAuth } from "../hooks/use-auth";
import FormSection from "../components/FormSection";
import Button from "../components/Button";
import { useState } from "react";

// console.log(auth);
function CreatePortfolio() {
  // checking backend
  const [newPortpolioForm, setNewPortfolioForm] = useState({ username: "" });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-customWhite">
      <h1 className="pt-20 w-full text-left px-4 font-bold text-[1.5rem]">
        Start your portfolio{" "}
      </h1>
      <form className="flex flex-col px-4 py-9 justify-center items-center bg-white shadow-md rounded-lg w-full max-w-7xl">
        {/* Name */}
        <FormSection
          title="Name"
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
          title="Biography"
          description="Introduce yourself with a brief biography. Include your professional background, key achievements, and passions."
        >
          <textarea className="border border-gray-300 w-full min-h-64 rounded-lg" />
        </FormSection>

        {/* Experience Level */}
        <FormSection
          title="Experience Level"
          description="Choose your professional experience level to give visitors an idea of your expertise."
        >
          <input className="w-full border-bl" />
        </FormSection>

        {/* Photo */}
        <FormSection
          title="Photo"
          description="Upload a profile picture using a publicly accessible image. Recommended dimensions: 400x400 pixels."
        >
          <input type="file" className="file-input w-full max-w-xs" />
        </FormSection>

        {/* Contact */}
        <FormSection
          title="Contact"
          description="Provide your contact details so visitors can connect with you directly. Include an email address and a LinkedIn profile."
        >
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full text-[12px]">
              LinkedIn
              <input
                type="text"
                className="grow"
                name="firstName"
                id="firstName"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white text-[12px] ">
              Email
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

        {/* Location */}
        <FormSection
          title="Location"
          description="Specify your current city and country. This helps potential collaborators or employers know where you are based."
        >
          <input className="bg-red-300 w-full" />
        </FormSection>

        {/* Topic */}
        <FormSection
          title="Topic"
          description="Topics represent your interests, focus areas, or the key subjects you are passionate about."
        >
          <input className="bg-red-300 w-full" />
        </FormSection>

        {/* Specialisation */}
        <FormSection
          title="Specialisation"
          description="Highlight your key skills or areas of expertise. Use specific technologies or domains."
        >
          <input className="bg-red-300 w-full" />
        </FormSection>
        <Button
          className="mt-5 w-[70%] sm:w-[40%]"
          name="Create your portfolilo"
        ></Button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
