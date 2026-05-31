import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Tên không được bỏ trống";
        if (!formData.email.trim()) {
            tempErrors.email = "Email không được bỏ trống";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email không đúng định dạng";
        }
        if (!formData.message.trim()) tempErrors.message = "Lời nhắn không được bỏ trống";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Gửi thông tin liên hệ thành công!");
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section style={{ padding: '20px', background: '#fafafa' }}>
            <h2>Liên hệ với tôi</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" style={{ width: '100%' }} />
                    {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                </div>
                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ width: '100%' }} />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>
                <div>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Lời nhắn" style={{ width: '100%' }} />
                    {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
                </div>
                <button type="submit" style={{ padding: '10px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Gửi</button>
            </form>
        </section>
    );
} 