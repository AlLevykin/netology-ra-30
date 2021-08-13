const SkillList = ({ skills }) =>
    (skills && skills.length) ?
        <ul className="list-group">
            {skills.map(skill => <li key={skill.id} className="list-group-item">{skill.name}</li>)}
        </ul>
        :
        <></>

export default SkillList;      