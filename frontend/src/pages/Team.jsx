import "../styles/team.css";
import { teamMembers } from "../data/team";

export default function Team() {
  return (
    <div className="team-page">
      <h1>Tim Kami</h1>
      <p className="team-desc">
        Tim yang berkontribusi dalam pengembangan dan penyusunan konten EduHipertensi.
      </p>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-avatar">
  {member.photo ? (
    <img src={member.photo} alt={member.name} />
  ) : (
    member.name.charAt(0)
  )}
</div>


            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
