import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import DropDownList from '../DropDownList'
import Button from '../Button'

export const Form = (props) => {
    
    const times = ['Frontend', 'Backend', 'UX', 'Mobile']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    
    const onSave = (event) => {
        event.preventDefault()
        props.onCardSaved({ nome, cargo, image, time })
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" value={nome} onUpdated={value => setNome(value)} />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" value={cargo} onUpdated={value => setCargo(value)} />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" value={image} onUpdated={value => setImage(value)} />
                <DropDownList mandatory={true} label="Time" placeholder="Selecione o time" options={times} value={time} onUpdated={value => setTime(value)} />
                <Button>
                    Criar card
                </Button> 
            </form>
        </section>
    );
};