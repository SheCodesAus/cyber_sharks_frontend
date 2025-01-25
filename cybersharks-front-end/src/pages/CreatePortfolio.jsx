import FormSection from "../components/FormSection";

function CreatePortfolio() {
  return (
    <form className="flex flex-col gap-4 pt-20">
      {/* Name */}
      <FormSection
        title="Name"
        description="This is the name that will appear on your public profile. Use your real name or a professional alias that represents you best."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Biography */}
      <FormSection
        title="Biography"
        description="Introduce yourself with a brief biography. Include your professional background, key achievements, and passions."
      >
        <textarea className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Experience Level */}
      <FormSection
        title="Experience Level"
        description="Choose your professional experience level to give visitors an idea of your expertise."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Photo */}
      <FormSection
        title="Photo"
        description="Upload a profile picture using a publicly accessible image URL. Recommended dimensions: 400x400 pixels."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Contact */}
      <FormSection
        title="Contact"
        description="Provide your contact details so visitors can connect with you directly. Include an email address and a LinkedIn profile."
      >
        <div className="flex flex-col gap-2">
          <div>
            <h1>Email</h1>
            <input className="bg-red-300" />
          </div>
          <div>
            <h1>LinkedIn</h1>
            <input className="bg-red-300" />
          </div>
        </div>
      </FormSection>

      {/* Location */}
      <FormSection
        title="Location"
        description="Specify your current city and country. This helps potential collaborators or employers know where you are based."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Topic */}
      <FormSection
        title="Topic"
        description="Topics represent your interests, focus areas, or the key subjects you are passionate about."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>

      {/* Specialisation */}
      <FormSection
        title="Specialisation"
        description="Highlight your key skills or areas of expertise. Use specific technologies or domains."
      >
        <input className="bg-red-300 w-[40%]" />
      </FormSection>
    </form>
  );
}

export default CreatePortfolio;
