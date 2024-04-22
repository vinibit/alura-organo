import Member from '../Member'
import './Team.css'

export const Team = (props) => {

    return (props.members.length > 0 &&
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            <div className='members'>
            {                 
                props.members.map(member => <Member 
                    key={member.name} 
                    name={member.name} 
                    position={member.position}
                    color={props.primaryColor}
                    image={member.image }
                />)
            }
            </div>
        </section>
    )
}