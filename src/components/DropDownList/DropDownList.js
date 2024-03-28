import './DropDownList.css';

export const DropDownList = (props) => {
    
    return (
        <div className="dropdown-list">
            <label>{props.label}:</label>
            <select onChange={event => props.onUpdated(event.target.value)} required={props.mandatory} value={props.value}>
                <option value='' disabled hidden>{props.placeholder}</option>
                {props.options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
    );
};  