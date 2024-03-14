import {Container, Form, Background} from './styles';
import {FiMail, FiLock, FiUser} from 'react-icons/fi';
import { useState } from 'react';

import {api} from "../../services/api"

import {Input} from '../../components/input';
import {Button} from '../../components/Button';
import {Link, useNavigate} from 'react-router-dom';

export function SingUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSingUp(){
        if(!name || !email || !password){
            return alert("Prenchar todos os campos")
        }
    api.post("/users", {name, email, password})
    .then(() => {
        alert("Usuario cadastrado com sucesso");
        navigate("/");
    })
    .catch(error => {
        if(error.response){
            alert(error.response.data.message);
        }else{
            alert("Não foi possivel cadastrar");
        }
    })

    }

    return(
        <Container>
            <Background/>

            <Form>
                <h1>RockNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>
                <h2>Criar sua conta</h2>


                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />
                 <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSingUp}/>
                <Link to="/">Volta para login</Link>
            </Form>  


        </Container>
    )
}