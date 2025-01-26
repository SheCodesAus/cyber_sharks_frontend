import React, { useState } from 'react';

function AdvancedSearch() {
    const [location, setLocation] = useState('');
    const [topics, setTopics] = useState([]);
    const [specialisations, setSpecialisations] = useState([]);
    
    const handleSearch = () => {
        console.log('Search clicked', { location, topics, specialisations });
    };
    
    const handleTopicsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setTopics(selectedOptions);
    };
    
    const handleSpecialisationsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setSpecialisations(selectedOptions);
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
            multiple
            value={topics}
            onChange={handleTopicsChange}
            className="border border-gray-300 rounded-lg p-2 bg-white w-1/4 text-gray-500 hover:border-gray-400 hover:bg-gray-100"
            >
                <option value="Scrum Master" className="text-black">Scrum Master</option>
                <option value="Public Speaker" className="text-black">Public Speaker</option>
            </select>
            <select
            multiple
            value={specialisations}
            onChange={handleSpecialisationsChange}
            className="border border-gray-300 rounded-lg p-2 bg-white w-1/4 text-gray-500 hover:border-gray-400 hover:bg-gray-100"
            >
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
    <div className="w-full mt-4">
        <div className="flex flex-wrap space-x-2">
            {topics.map((topic, index) => (
                <span key={index} className="bg-gray-200 text-black rounded-full px-3 py-1 text-sm">
                    {topic}
                </span>
            ))}
        </div>
        <div className="flex flex-wrap space-x-2 mt-2">
            {specialisations.map((specialisation, index) => (
                <span key={index} className="bg-gray-200 text-black rounded-full px-3 py-1 text-sm">
                    {specialisation}
                </span>
            ))}
        </div>
    </div>
</div>
);
}

export default AdvancedSearch;