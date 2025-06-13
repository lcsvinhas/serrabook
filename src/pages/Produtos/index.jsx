
import CardLivro from "../../components/CardLivro";
import Header from "../../components/Header";

export default function Produtos() {
  return (
    <div>
       <Header />
      <h2>Produtos</h2>
      <CardLivro
        titulo="Titulo Teste"
        preco="19.90"
        imagem="https://images-na.ssl-images-amazon.com/images/I/61bYI0O1+fL._AC_UL900_SR615,900_.jpg"
      />
    </div>
  );
}
