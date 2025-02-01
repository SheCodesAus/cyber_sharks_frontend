import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const IntroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#1a1a1a] text-[#FFFEFD] flex items-center min-h-[720px]">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-snug">
            Find diverse tech voices for your next event.
          </h1>
          <p className="text-gray-300 mb-9 text-base">
            Connect with inspiring speakers who bring fresh perspectives to
            technology discussions. Let's make your event unforgettable.
          </p>
          <div>
            <Button
              onClick={() => navigate("/search")}
              className="bg-white text-black px-8 rounded-full hover:opacity-90 transition-all text-base min-w-[160px] font-normal"
            >
              Find Speakers
            </Button>
          </div>
        </div>

        <div className="rounded-xl h-[450px] w-[570px] flex justify-center items-center overflow-hidden shadow-lg">
          <img
            src="/speaker2.png"
            alt="Speaker"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
