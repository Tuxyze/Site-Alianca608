import { useState } from 'react';
import './InteresseDemolay.css';

function InteresseDemolay() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosCandidato = {
      nome, idade, whatsapp, nomeResponsavel, mensagem,
      dataEnvio: new Date().toLocaleDateString('pt-BR')
    };
    console.log('Dados capturados:', dadosCandidato);
    alert(`Obrigado, ${nome}! Entraremos em contato em breve.`);
    
    // Limpar campos
    setNome(''); setIdade(''); setWhatsapp(''); setNomeResponsavel(''); setMensagem('');
  };

  return (
    <div className="page-container"> 
      <div className="formulario-container">
        <h2>Faça Parte da Ordem DeMolay</h2>
        <p>Preencha os dados abaixo e a secretaria do Capítulo entrará em contato com você e seus responsáveis.</p>
        
        <form onSubmit={handleSubmit} className="form-demolay">
          <label>Seu Nome Completo:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required placeholder="Ex: João Silva" />

          <div className="row-form">
            <div className="col-form">
              <label>Sua Idade:</label>
              <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} min="12" max="21" required placeholder="15" />
            </div>
            <div className="col-form">
              <label>WhatsApp:</label>
              <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required placeholder="(11) 99999-9999" />
            </div>
          </div>

          <label>Nome do Responsável:</label>
          <input type="text" value={nomeResponsavel} onChange={(e) => setNomeResponsavel(e.target.value)} required placeholder="Pai, Mãe ou Tutor" />

          {/* é isso que eu estava falando */}
          <label>Conte um pouco sobre você:</label>
          <textarea 
            value={mensagem} 
            onChange={(e) => setMensagem(e.target.value)} 
            rows="4"
            placeholder="Fale sobre seus hobbies, escola ou por que se interessou pela Ordem..."
          />

          <button type="submit" className="btn-enviar">Enviar Inscrição</button>
        </form>
      </div>
    </div>
  );
}

export default InteresseDemolay;