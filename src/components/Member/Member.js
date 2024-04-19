import './Member.css'

export const Member = ({ name, position, image}) => {
    return (<div className="member">
        <div className="header">
            <img src={image} alt={name} />
        </div>
        <div className="footer">
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}