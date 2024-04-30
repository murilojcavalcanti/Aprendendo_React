import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <img src="/images/fb.png" alt="facebook"></img>
            </a>
          </li>

          <li>
            <a href="https://www.twiter.com">
              <img src="/images/tw.png" alt="twiter"></img>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/">
              <img src="/images/ig.png" alt="instagram"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="logo"></img>
      </section>
      <section>Desenvolvido por Alura</section>
    </footer>
  );
};

export default Rodape;
