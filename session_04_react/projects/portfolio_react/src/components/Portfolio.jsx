import { useState } from 'react';
import { initialProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
    const [projects] = useState(initialProjects);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web', 'Mobile', 'Design'];

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    return (
        <section style={{ padding: '20px' }}>
            <h2>Dự án tiêu biểu</h2>
            
            {/* Bộ lọc Button */}
            <div style={{ margin: '15px 0' }}>
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            marginRight: '10px',
                            padding: '8px 12px',
                            backgroundColor: activeCategory === cat ? '#007bff' : '#ccc',
                            color: activeCategory === cat ? '#fff' : '#000',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Danh sách sau lọc */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredProjects.map(proj => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </section>
    );
} 