import { TextField, FormLabel } from "@material-ui/core";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <FormLabel
        style={{
          paddingBottom: "20px",
          fontWeight: "bold",
          color: "blue",
          fontSize: "30px",
        }}
      >
        Search Coin...
      </FormLabel>
      
      <TextField
        style={{
          background: "gray",
          width: "100%",
          marginTop: "20px",
          marginBottom: "10px",
        }}
        value={searchTerm}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
