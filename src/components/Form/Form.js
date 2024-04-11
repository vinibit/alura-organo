import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import DropDownList from '../DropDownList'
import Button from '../Button'

export const Form = (props) => {
    
    const [name, setName] = useState('')
    const [position, setSetPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const onSave = (event) => {
        event.preventDefault()
        props.onMemberSaved({ name, position, image, team })
        clear()
    }

    const clear = () => {
        setName('')
        setSetPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" value={name} onUpdated={value => setName(value)} />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" value={position} onUpdated={value => setSetPosition(value)} />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" value={image} onUpdated={value => setImage(value)} />
                <DropDownList mandatory={true} label="Time" placeholder="Selecione o time" options={props.teams} value={team} onUpdated={setTeam} />
                <Button>
                    Criar card
                </Button> 
            </form>
        </section>
    );
};