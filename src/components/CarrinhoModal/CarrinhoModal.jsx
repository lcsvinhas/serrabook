import React, { useState } from "react";
import { useCart } from "../../contexts/CarrinhoContext.jsx";
import * as styles from "./CarrinhoModal.module.css";
import { Link } from "react-router-dom";

export default function CarrinhoModal({ aberto, fechar }) {
  const { cartItems } = useCart();
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);

  if (!aberto) return null;

  const total = cartItems.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const aplicarCupom = () => {
    if (cupom.trim().toUpperCase() === "SERRABOOK") {
      setDesconto(total * 0.1);
    } else {
      setDesconto(0);
      alert("Ops!Cupom inválido");
    }
  };

  const totalComDesconto = total - desconto;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.titulo}>Seu Carrinho</h2>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className={styles.itemList}>
              {cartItems.map((item) => (
                <li key={item.id || item.isbn} className={styles.item}>
                  {item.imagem && (
                    <img
                      src={item.imagem}
                      alt={item.titulo}
                      className={styles.itemImagem}
                    />
                  )}
                  <div className={styles.itemInfo}>
                    <span className={styles.itemTitulo}>{item.titulo}</span>
                    <span>Quantidade: {item.quantidade}</span>
                    <span>Preço: R$ {item.preco.toFixed(2)}</span>
                    <span>
                      Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.cupomArea}>
              <input
                type="text"
                placeholder="Digite o cupom"
                value={cupom}
                onChange={(e) => setCupom(e.target.value)}
                className={styles.inputCupom}
              />
              <button onClick={aplicarCupom} className={styles.botaoCupom}>
                Aplicar Cupom
              </button>
            </div>

            <div className={styles.totalArea}>
              <p>Subtotal: R$ {total.toFixed(2)}</p>
              {desconto > 0 && <p>Desconto: - R$ {desconto.toFixed(2)}</p>}
              <h3>Total Final: R$ {totalComDesconto.toFixed(2)}</h3>
            </div>
          </>
        )}

        <div className={styles.buttonGroup}>
          <button className={styles.botao} onClick={fechar}>
            Continuar comprando
          </button>
          <Link to="/pagamento">
            <button className={styles.botaoPagamento}>Ir para pagamento</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
