import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Links, Content } from './style.js';
import { Header} from '../../components/header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/tags/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import {api} from '../../services/api.js';

export function Details() {
  const [data, setData] =useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)

  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a note")

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);

    }
  }

  useEffect(() => {
      async function fetchNotes(){
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      }
      fetchNotes();
  },[])

  return (
    <Container>
      <Header/>
  {
      data &&
      <main>
        <Content>
          <ButtonText 
          title="Excluir nota"
          onClick={handleRemove}
          />

          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.links &&
            <Section title="Links uteis">
              <Links>
                { 
                    data.links.map(link => (
                      <li key={String(link.id)}> 
                        <a href={link.url} target='_blank' rel="noreferrer">
                          {link.url}
                        </a>
                        </li>
                    ))
                } 
              </Links>
            </Section>
          }
          
          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title="express"
                  />

                ))
              }
      
                
            </Section>
          }


          <Button onClick={handleBack} title="Voltar"/>
        </Content>
      </main>
  }
    </Container>   

  )
};

