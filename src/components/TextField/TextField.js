import './TextField.css'

export const TextField = (props) => {    
    
    return (
        <div className='text-field'>
            <label>{props.label}:</label>
            <input value={props.value} onChange={event => props.onUpdated(event.target.value)} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    );
};