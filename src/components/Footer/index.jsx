import styles from "./Footer.module.css";
import { GithubLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 <strong>SERRABOOK</strong>. Todos os direitos reservados.</p>
            <p className={styles.slogan}>Conectando leitores, espalhando histórias.</p>
            <a className={styles.githubLink} href="https://github.com/lcsvinhas/serrabook" target="_blank">
                <GithubLogo size={30} />
                <span>Ver no GitHub</span>
            </a>
        </footer>
    )
}
