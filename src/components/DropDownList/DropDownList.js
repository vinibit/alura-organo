import './DropDownList.css';

export const DropDownList = (props) => {
    
    return (
        <div className="dropdown-list">
            <label>{props.label}:</label>
            <select onChange={event => props.onUpdated(event.target.value)} required={props.mandatory} value={props.value}>
                <option value=''>{props.placeholder}</option>
                {
                    props.options.map((option, index) => <option key={index}>{option}</option>)
                }
            </select>
        </div>
    );
};  