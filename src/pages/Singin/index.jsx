import {Container, Form, Background} from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {Input} from '../../components/input'
import {Button} from '../../components/Button'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>RockNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>
                <h2>Faça seu login</h2>

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

                <Button title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>  

            <Background/>

        </Container>
    )
}