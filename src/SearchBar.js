import { TextField, FormLabel } from "@material-ui/core";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <FormLabel
        style={{
          fontWeight: "bold",
          color: "lightgray",
          fontSize: "30px",
        }}
      >
        <p className="Searchbar">Search Coin...</p>
      </FormLabel>
      
      <TextField
        style={{
          background: "white",
          color:"gray",
          width: "100%",
          marginTop: "20px",
          borderRadius:"15px",
          border:"none"
        }}
        placeholder="  Search for a coin"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
