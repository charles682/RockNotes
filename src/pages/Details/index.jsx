import { Container, Links, Content } from './style.js';

import { Header} from '../../components/header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Tag } from '../../components/tags/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi eum! Quo asperiores fuga natus quis tempore perferendis soluta unde, officia nemo incidunt, voluptate commodi nihil dicta quibusdam veniam. Animi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi eum! Quo asperiores fuga natus quis tempore perferendis soluta unde, officia nemo incidunt, voluptate commodi nihil dicta quibusdam veniam. Animi</p>

          <Section title="Links uteis">
            <Links>
              <li> <a href='#'>https://www.rocketseat.com.br/</a></li>
              <li>  <a href='#'>https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
              
          </Section>


          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>   

  )
};

