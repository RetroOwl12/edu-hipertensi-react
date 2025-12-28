export default function CategoryFilter({ category, setCategory }) {
  const categories = [
    "Semua",
    "Pengertian",
    "Penyebab",
    "Gejala",
    "Pencegahan",
    "Pengobatan",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{ padding: "10px", marginBottom: "16px" }}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
