import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(e) {
        e.preventDefault();
        setUserEmail('')
    }

    return (
        <div>
            <h2>Inicie seu cadastro</h2>
            <form>
                <input 
                type='email' 
                placeholder="Digite seu e-mail." 
                onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O E-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional