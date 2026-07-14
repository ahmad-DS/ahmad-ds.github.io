interface Skill {
  name: string;
  items: string[];
}
interface TechnicalSkillCardProps {
  skill: Skill;
}
export default function TechnicalSkillCard({ skill }: TechnicalSkillCardProps) {
  return (
    <div>
      <h2>{skill.name}</h2>
      {skill.items.map((item) => (
        <label htmlFor="">[{item}]</label>
      ))}
    </div>
  );
}
