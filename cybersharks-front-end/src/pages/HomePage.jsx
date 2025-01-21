import React from 'react';
import Button from "../components/Button";

function HomePage() {
  const handleSearchSubmit = () => {
    // Handle the search submit logic here
    console.log('Search submitted');
  };

  const handleSearchChange = (event) => {
    // Handle the search input change logic here
    console.log('Search input changed:', event.target.value);
  };

  return (
    <div>
      <h1 className="text-red-600">This is the home page.</h1>
      {/* <SearchBar value="" onChange={handleSearchChange} onSubmit={handleSearchSubmit} /> */}
      <Button className="mx-auto mt-2" name="Sign up"></Button>
    </div>
  );
}

export default HomePage;