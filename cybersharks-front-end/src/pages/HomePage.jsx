// // function HomePage() {
// //   return <h1 className="text-red-600">This is the home page.</h1>;
// // }

// // export default HomePage;

// import Header from "../components/header/Header";
// import Button from "../components/Button";

// function HomePage() {
//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <main className="max-w-6xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-5xl font-serif mb-6">
//               Find diverse tech voices for your next event.
//             </h1>
//             <p className="text-gray-600 mb-8">
//               Connect with inspiring speakers who bring fresh perspectives to
//               technology discussions.
//             </p>
//             <div>
//               <Button>Discover Speakers</Button>
//             </div>
//           </div>

//           {/* Right Column - Image Placeholder */}
//           <div className="bg-gray-100 rounded-lg h-96"></div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default HomePage;

// import Header from "../components/header/Header";
// import Button from "../components/Button";

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-customWhite text-customBlack">
//       <Header />

//       {/* Hero Section */}
//       <main className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-snug">
//               Find diverse tech voices for your next event.
//             </h1>
//             <p className="text-gray-600 mb-8">
//               Connect with inspiring speakers who bring fresh perspectives to
//               technology discussions. Let’s make your event unforgettable.
//             </p>
//             <div>
//               <Button className="bg-customBlack text-customWhite hover:bg-gray-800 transition-all">
//                 Discover Speakers
//               </Button>
//             </div>
//           </div>

//           {/* Right Column - Image Placeholder */}
//           <div className="bg-gray-100 rounded-lg h-96 flex justify-center items-center shadow-lg">
//             <p className="text-gray-400 font-openSans">Image Placeholder</p>
//           </div>
//         </div>
//       </main>

//       {/* Call-to-Action Section */}
//       <section className="bg-accent3 py-12 text-customWhite">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-cormorant mb-4">
//             Ready to inspire and be inspired?
//           </h2>
//           <p className="text-lg mb-6">
//             Join our community of tech speakers and elevate the conversation in
//             technology.
//           </p>
//           <Button className="bg-customWhite text-accent3 hover:text-accent2 transition-all">
//             Join Us
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePage;

import Header from "../features/homepage/Header";
import Button from "../components/Button";
import FeaturedSpeakers from "../features/homepage/FeaturedSpeakers";

function HomePage() {
  return (
    <div className="min-h-screen bg-customWhite text-customBlack">
      <Header />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
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
                Discover Speakers
              </Button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="bg-gray-100 rounded-lg h-96 flex justify-center items-center shadow-lg">
            <p className="text-gray-400 font-openSans">Image Placeholder</p>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-black py-16 text-customWhite">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-accent1 mb-4">63%</h2>
            <p>nice data here about women and non-binary ppl.</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-accent1 mb-4">85%</h2>
            <p>
              more and more and more data here about women and non-binary ppl.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-accent1 mb-4">78%</h2>
            <p>we really like data yes we do.</p>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <FeaturedSpeakers />

      {/* Call-to-Action Section */}
      {/* <section className="bg-accent3 py-12 text-customWhite">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-cormorant mb-4">
            Ready to inspire and be inspired?
          </h2>
          <p className="text-lg mb-6">
            Join our community of tech speakers and elevate the conversation in
            technology.
          </p>
          <Button className="bg-customWhite text-accent3 rounded-full px-6 py-3 hover:text-accent2 transition-all">
            Join Us
          </Button>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
