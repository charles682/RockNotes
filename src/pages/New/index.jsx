import {Header} from '../../components/header';
import {Input} from '../../components/input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import {Link} from 'react-router-dom'

import {Container, Form} from './styles';

export function New(){
    return(
        <Container>
            <Header/>
             <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                        <Input
                            placeholder="Titulo"
                        />

                        <Textarea placeholder="Observções"/>

                        <Section title="Links úteis">
                            <NoteItem value="https://rockseat.com.br" />
                            <NoteItem isNew placeholder="Novo link" />
                        </Section>

                        <Section title="Marcadores">
                            <div className="tags">
                                <NoteItem value="React" />
                                <NoteItem isNew placeholder="Novo tag" />
                            </div>
                        </Section>
                    <Button title="Salvar"/>
                </Form>

             </main>
        </Container>
    );
}