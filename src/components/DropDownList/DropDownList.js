import './DropDownList.css';

export const DropDownList = (props) => {
    // Your code here

    return (
        <div className="dropdown-list">
            <label>{props.label}:</label>
            <select required={props.mandatory}>
                <option value='' disabled selected hidden>{props.placeholder}</option>
                {props.options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
    );
};  