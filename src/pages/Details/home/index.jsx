import {FiPlus, FiSearch} from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNot  } from "./styles";

import {Header} from '../../../components/header'
import {Note} from '../../../components/note'
import {Input} from '../../../components/input'
import {Section} from '../../../components/Section'
import {ButtonText} from '../../../components/ButtonText'


export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li> <ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
               
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                     <Note data={{
                        title:'React',
                        tags:[
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rockseat'},
                            ]
                            }}/>          
                </Section>
            </Content>

            <NewNot to="/new">
                <FiPlus/>
                    Criar Notas 
                
            </NewNot>

        </Container>
    )
};