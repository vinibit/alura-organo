import './Form.css'
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';

export const Form = () => {
    
    const times = ['Frontend', 'Backend', 'UX', 'Mobile'];
    
    const onSave = (event) => {
        event.preventDefault();
        console.log('Salvando');
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDownList mandatory={true} label="Time" placeholder="Selecione o time" options={times} />
                <Button>
                    Criar card
                </Button> 
            </form>
        </section>
    );
};