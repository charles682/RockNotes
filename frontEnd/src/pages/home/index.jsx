import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {FiPlus, FiSearch} from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNot  } from "./styles";

import {Header} from '../../components/header';
import {Note} from '../../components/note';
import {Input} from '../../components/input';
import {Section} from '../../components/Section';
import {ButtonText} from '../../components/ButtonText';
import { api } from '../../services/api';


export function Home(){
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filterTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filterTags)
        } else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() =>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();

    }, []);

    useEffect(() => {
        async function fethNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fethNotes()
    },[tagsSelected, search])

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText
                    title="Todos" 
                    onClick={() => handleTagSelected("all")}
                    isActive={tagsSelected.length === 0}

                />
                </li>
                {
                    tags && tags.map(tag => (
                        <li  key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}

                        /></li>

                    ))
                }
            
                
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo"
                    onChange={(e) => setSearch(e.target.value)}
                    icon={FiSearch}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note 
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                            />          
                        ))
                    } 
                </Section>
            </Content>

            <NewNot to="/new">
                <FiPlus/>
                    Criar Notas 
                
            </NewNot>

        </Container>
    )
};