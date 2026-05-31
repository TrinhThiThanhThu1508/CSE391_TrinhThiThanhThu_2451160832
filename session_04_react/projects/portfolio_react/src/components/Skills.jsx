import React from 'react';

// Component con để tái sử dụng cho từng badge kỹ năng
function SkillBadge({ name }) {
    return (
        <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#e9ecef',
            color: '#495057',
            margin: '8px',
            borderRadius: '20px',
            fontWeight: '500',
            fontSize: '14px',
            border: '1px solid #ced4da'
        }}>
            {name}
        </span>
    );
}

export default function Skills() {
    // Mảng danh sách các kỹ năng cốt lõi
    const coreSkills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite", "Git & GitHub", "Responsive Design"];

    return (
        <section style={{ padding: '40px 20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Kỹ năng cá nhân</h2>
            <p style={{ color: '#6c757d', marginBottom: '25px' }}>Những công nghệ và công cụ tôi sử dụng làm việc hàng ngày</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
                {coreSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                ))}
            </div>
        </section>
    );
} 