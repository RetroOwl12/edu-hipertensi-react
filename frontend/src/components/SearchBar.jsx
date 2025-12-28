export default function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      type="text"
      placeholder="Cari artikel..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      style={{ padding: "10px", width: "100%", marginBottom: "16px" }}
    />
  );
}
