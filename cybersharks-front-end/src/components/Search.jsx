import React, { useState } from 'react';

function Search() {
    const [location, setLocation] = useState('');
    const [topic, setTopic] = useState('');
    const [specialisation, setSpecialisation] = useState('');
    
    const handleSearch = () => {
    console.log('Search clicked', { location, topic, specialisation });
};

return (
<div className="flex flex-col items-center border border-black rounded-lg p-4 bg-white max-w-4xl mx-auto">
    <div className="flex items-center w-full mb-4 space-x-4 justify-center">
        <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 bg-white w-1/4 text-gray-500 hover:border-gray-400 hover:bg-gray-100"
        >
            <option value="" disabled>Select Location</option>
            <option value="Brisbane" className="text-black">Brisbane</option>
            <option value="Melbourne" className="text-black">Melbourne</option>
            <option value="Sydney" className="text-black">Sydney</option>
        </select>
        <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 bg-white w-1/4 text-gray-500 hover:border-gray-400 hover:bg-gray-100"
        >
            <option value="" disabled>Select Topic</option>
            <option value="Scrum Master" className="text-black">Scrum Master</option>
            <option value="Public Speaker" className="text-black">Public Speaker</option>
        </select>
        <select
        value={specialisation}
        onChange={(e) => setSpecialisation(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 bg-white w-1/4 text-gray-500 hover:border-gray-400 hover:bg-gray-100"
        >
            <option value="" disabled>Select Specialisation</option>
            <option value="React" className="text-black">React</option>
            <option value="Django" className="text-black">Django</option>
            <option value="Python" className="text-black">Python</option>
        </select>
        <button
        onClick={handleSearch}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 w-1/4"
        >
            Search
        </button>
    </div>
</div>
);
}

export default Search;

