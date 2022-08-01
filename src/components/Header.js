import React from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <input
        className="item-search"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;
