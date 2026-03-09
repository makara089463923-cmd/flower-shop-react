import React, { useState } from 'react';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    flowerType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        flowerType: formData.flowerType,
        message: formData.message,
      });

      alert('សារបានផ្ញើដោយជោគជ័យ!');
      setFormData({ name: '', phone: '', flowerType: '', message: '' });
    } catch (error) {
      alert('មានកំហុសក្នុងការផ្ញើសារ។ សូមព្យាយាមម្តងទៀត។');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section fade-up" id="contact">
      <div className="section-tag">📞 ទាក់ទង</div>
      <h2 className="section-title">ទាក់ទងយើង</h2>
      <p className="section-desc">
        សូមទាក់ទងយើងដើម្បីស្វាគមន៍ ឬសម្រាប់ការបញ្ជាទិញផ្កាដែលស្អាត។
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <div className="contact-label">ទីតាំង</div>
              <div className="contact-val">ផ្ទះលេខ ១២៣ ផ្លូវលេខ ៥ ភ្នំពេញ</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <div className="contact-label">ទូរស័ព្ទ</div>
              <div className="contact-val">+855 12 345 678</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <div className="contact-label">អ៊ីមែល</div>
              <div className="contact-val">info@drdaisy.uk</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <div>
              <div className="contact-label">គេហទំព័រ</div>
              <div className="contact-val">drdaisy.uk</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">⏰</span>
            <div>
              <div className="contact-label">ម៉ោងបើក</div>
              <div className="contact-val">ច័ន្ទ–អាទិត្យ: 7AM – 7PM</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="ឈ្មោះរបស់អ្នក"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="លេខទូរស័ព្ទ"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="flowerType"
            placeholder="ប្រភេទផ្កាដែលចង់បាន"
            value={formData.flowerType}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="សារបន្ថែម..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', textAlign: 'center' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? '⏳ កំពុងផ្ញើ...' : '📩 ផ្ញើសារ'}
          </button>
        </form>
      </div>
    </section>
  );
}
