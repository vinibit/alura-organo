import './Member.css'

export const Member = ({ name, position, image, color }) => {
    return (<div className="member">
        <div className="member--header" style={ { backgroundColor: color } }>
            <img src={image} alt={name} />
        </div>
        <div className="member--footer">
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}