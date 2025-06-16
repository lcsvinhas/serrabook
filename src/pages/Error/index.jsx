import Header from "../../components/Header";
import gif404 from "../../assets/404.gif";

export default function Error() {
  return (
    <div>
      <Header />
      <img
        src={gif404}
        alt="Página não encontrada"
        style={{
          display: "block",
          margin: "30px auto",
          minHeight: "60vh",
          maxWidth: "100%"
        }}
      />
    </div>
  );
}
