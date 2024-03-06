import {Container, Form, Background} from './styles';
import {FiMail, FiLock, FiUser} from 'react-icons/fi';

import {Input} from '../../components/input'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
export function SingUp(){
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
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                 <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Cadastrar"/>
                <Link to="/">Volta para login</Link>
            </Form>  


        </Container>
    )
}