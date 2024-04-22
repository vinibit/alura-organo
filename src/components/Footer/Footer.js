import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="/images/tw.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="/images/ig.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}