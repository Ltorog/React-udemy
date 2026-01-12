import React, { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (term: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    }

  }, [query, onQuery]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    onQuery(query)
  };
  
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-center" onClick={handleSearch}>Buscar</button>
    </div>
  );
};
