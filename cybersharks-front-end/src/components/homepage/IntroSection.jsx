import Button from "../../components/Button";

const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-snug">
            Find diverse tech voices for your next event.
          </h1>
          <p className="text-gray-600 mb-8">
            Connect with inspiring speakers who bring fresh perspectives to
            technology discussions. Let’s make your event unforgettable.
          </p>
          <div>
            <Button className="bg-customBlack text-customWhite rounded-full px-6 py-3 hover:bg-gray-800 transition-all">
              Find Speakers
            </Button>
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <div className="bg-gray-100 rounded-lg h-96 flex justify-center items-center shadow-lg">
          <p className="text-gray-400 font-openSans">Image Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
