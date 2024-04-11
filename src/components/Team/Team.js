import Member from '../Member'
import './Team.css'

export const Team = (props) => {

    return (
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            { 
                props.members.map(member => <Member 
                    key={member.name} 
                    name={member.name} 
                    position={member.position} 
                    image={member.image }
                />)
            }
        </section>
    )
}