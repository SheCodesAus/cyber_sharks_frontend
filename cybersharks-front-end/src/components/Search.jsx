import React from 'react';

const SearchBar = ({ value, onChange, onSubmit }) => {
    return (
        <div className="flex items-center border border-black rounded-lg p-2 bg-white">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search..."
                className="flex-grow outline-none px-2"
            />
            <button
                onClick={onSubmit}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;