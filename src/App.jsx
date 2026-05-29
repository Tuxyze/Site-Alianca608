import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import logoCapitulo from './assets/logo.png';
import InteresseDemolay from './InteresseDemolay'; 

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <div className="hero-content">
        <img src={logoCapitulo} alt="Brasão Aliança 608" className="hero-logo" />
        <h1>Bem-vindo ao Capítulo Aliança de Suzano nº 608 da Ordem DeMolay</h1>
        <div className="filiacao-badge">
          <div className="badge-icon">🏛️</div>
          <p><strong>Filiado ao GCE-SP:</strong><br/>Grande Conselho Estadual da Ordem DeMolay do Estado de São Paulo</p>
        </div>
      </div>
    </section>
    
    <section className="about-demolay-section">
      <div className="about-text">
        <h2>Como ser um DeMolay</h2>
        <p>
          A Ordem DeMolay é uma irmandade! Queremos transformar jovens em grandes líderes do amanhã. 
          Nossos membros são garotos de 12 a 21 anos que, assim como você, sonham com um mundo melhor.
        </p>
        <a 
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Ordem%20DeMolay%20e%20o%20Capítulo%20Aliança!" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary btn-whatsapp"
        >
          💬 Falar com um DeMolay
        </a>
      </div>

      <div className="about-video-placeholder">
        <iframe 
          className="video-iframe"
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/9B2GVUgnx9Y" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
        <div className="video-box"></div>
      </div>
    </section>

    <section className="cards-section">
      <div className="card">
        <div className="card-icon">🤝</div>
        <h3>Nossos Trabalhos</h3>
        <p>Ações filantrópicas e desenvolvimento pessoal constante na comunidade de Suzano e região.</p>
      </div>
      <div className="card">
        <div className="card-icon">❓</div>
        <h3>Perguntas Frequentes</h3>
        <p>Tire suas dúvidas sobre o que é necessário para ingressar em nosso Capítulo.</p>
      </div>
      <div className="card">
        <div className="card-icon">✉️</div>
        <h3>Contato</h3>
        <p>Fale conosco para parcerias, tirar dúvidas ou para conhecer as lideranças.</p>
      </div>
    </section>
  </div>
);

const QuemSomos = () => (
  <div className="page-container">
    <div className="page-header">
      <h2>Quem Somos</h2>
      <p>Conheça a Gestão Administrativa atual do nosso Capítulo</p>
    </div>

    <div className="team-grid">
      <div className="member-card">
        <div className="member-photo placeholder-photo">MC</div>
        <h3 className="member-name">Vinícius</h3>
        <p className="member-role">Mestre Conselheiro</p>
      </div>

      <div className="member-card">
        <div className="member-photo placeholder-photo">1C</div>
        <h3 className="member-name">Marco</h3>
        <p className="member-role">1º Conselheiro</p>
      </div>

      <div className="member-card">
        <div className="member-photo placeholder-photo">2C</div>
        <h3 className="member-name">Gustavo</h3>
        <p className="member-role">2º Conselheiro</p>
      </div>
    </div>
  </div>
);

const Historia = () => (
  <div className="page-container">
    <div className="page-header">
      <h2>Nossa História</h2>
      <p>A trajetória do Capítulo Aliança de Suzano nº 608</p>
    </div>

    <div className="history-content">
      <div className="history-block">
        <h3>A Fundação</h3>
        <p>[Aqui vamos contar como surgiu a ideia de fundar o Capítulo, quem foram os maçons e jovens da primeira leva, a data oficial da fundação e onde foram as primeiras reuniões]</p>
      </div>

      <div className="history-block">
        <h3>A Escolha do Nome</h3>
        <p>[Espaço para explicar o porquê do nome Aliança de Suzano, se tem alguma história especial por trás da escolha e o que ele representa para a região]</p>
      </div>

      <div className="history-block">
        <h3>Nosso Legado</h3>
        <p>[Texto sobre as principais conquistas do Capítulo ao longo dos anos, prêmios recebidos, grandes eventos filantrópicos realizados e o impacto na comunidade]</p>
      </div>
    </div>
  </div>
);

const Galeria = () => (
  <div className="page-container">
    <div className="page-header">
      <h2>Nossa Galeria</h2>
      <p>Momentos inesquecíveis da nossa irmandade e trabalhos em prol da sociedade.</p>
    </div>
    
    <div className="gallery-grid">
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/111/e6b800?text=Filantropia" alt="Filantropia" />
        <div className="gallery-caption">Arrastão Solidário</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/222/cc0000?text=Cerimônia" alt="Cerimônia Pública" />
        <div className="gallery-caption">Cerimônia de Dia das Mães</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/111/e6b800?text=Esportes" alt="Esportes" />
        <div className="gallery-caption">Torneio Estadual Esportivo</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/222/cc0000?text=Reunião" alt="Posse" />
        <div className="gallery-caption">Posse da Nova Gestão</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/111/e6b800?text=Congresso" alt="Congresso" />
        <div className="gallery-caption">Congresso Regional (CREOD)</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x300/222/cc0000?text=Irmandade" alt="Lazer" />
        <div className="gallery-caption">Dia de Lazer e Integração</div>
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="login-wrapper">
    <div className="login-box">
      <div className="login-header">
        <h2>Área Restrita</h2>
        <p>Acesso exclusivo para membros do Capítulo</p>
      </div>
      
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label htmlFor="usuario">ID</label>
          <input type="text" id="usuario" placeholder="Digite seu ID..." />
        </div>
        
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="••••••••" />
        </div>
        
        <div className="forgot-password">
          <a href="#recuperar">Esqueceu a senha?</a>
        </div>
        
        <button type="submit" className="btn-entrar">Entrar</button>
      </form>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* CABEÇALHO / MENU */}
        <header className="header">
          <div className="logo">
             <img src={logoCapitulo} alt="Logo Aliança 608" className="logo-img" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quem-somos">Quem Somos</Link></li>
              <li><Link to="/historia">História</Link></li>
              <li><Link to="/galeria">Galeria</Link></li>
              <li><Link to="/faca-parte">Faça Parte</Link></li>
              <li><Link to="/login" className="login-btn">Login</Link></li>
            </ul>
          </nav>
        </header>

        {/* CONTEÚDO DINÂMICO */}
        <main className="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} /> 
            <Route path="/faca-parte" element={<InteresseDemolay />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* RODAPÉ */}
        <footer className="footer">
          <p>© 2026 Capítulo Aliança de Suzano nº 608 - Ordem DeMolay.</p>
          <p>Patrocinado pela ARLS [Ferraz de Vasconcelos]</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;