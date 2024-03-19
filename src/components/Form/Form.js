import './Form.css'
import TextField from '../TextField';

export const Form = () => {
    // Your form component logic goes here

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
};