// function HomePage() {
//   return <h1 className="text-red-600">This is the home page.</h1>;
// }

// export default HomePage;

import Header from "../components/header/Header";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-serif mb-6">
              Find diverse tech voices for your next event.
            </h1>
            <p className="text-gray-600 mb-8">
              Connect with inspiring speakers who bring fresh perspectives to
              technology discussions.
            </p>
            <div>
              <Button>Discover Speakers</Button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="bg-gray-100 rounded-lg h-96"></div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
