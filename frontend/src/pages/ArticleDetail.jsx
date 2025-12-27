import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  return <h1>Detail Artikel ID: {id}</h1>;
}
