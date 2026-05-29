import { userState } from 'react';
import './InteresseDemolay.css'; // jaja eu crio esse css

function InteresseDemolay() {
    // Estados para salvar oq o candidato digita
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');    
    const [whatsapp, setWhatsapp] = useState('');  
    const [nomeResponsavel, setNomeResponsavel] = useState('');  
    const [mensagem, setMensagem] = useState('');  
}

const handleSubmit = (e) => {
    e.preventDefault();

    // Obj com todos os dados digitados
    const dadosCandidato = {
        nome,
        idade,
        whatsapp,
        nomeResponsavel,
        mensagem,
        dataEnvio: new Date().toLocaleDateString('pt-BR')
    };
}