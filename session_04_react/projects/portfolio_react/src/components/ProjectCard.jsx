export default function ProjectCard({ project }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px' }}>
            <h3>{project.title}</h3>
            <span style={{ background: '#007bff', color: '#fff', padding: '2px 5px', fontSize: '12px' }}>{project.category}</span>
            <p>{project.description}</p>
        </div>
    );
}