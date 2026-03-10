// client/src/components/ContactForm.jsx
import { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ productId, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    productId: productId || ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('មានបញ្ហាក្នុងការផ្ញើទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">ជោគជ័យ!</h3>
        <p className="text-green-600">ទិន្នន័យរបស់អ្នកត្រូវបានផ្ញើរួចរាល់។ 
យើងនឹងទាក់ទងទៅអ្នកវិញឆាប់ៗ។</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">បញ្ជាទិញ / 
សាកសួរព័ត៌មាន</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            ឈ្មោះពេញ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="សូមបញ្ចូលឈ្មោះរបស់អ្នក"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            លេខទូរស័ព្ទ <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ឧ: 012 345 678"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            អ៊ីមែល (ស្រេចចិត្ត)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="address">
            អាសយដ្ឋាន (ស្រេចចិត្ត)
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="អាសយដ្ឋានសម្រាប់ដឹកជញ្ជូន"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            សារ (ស្រេចចិត្ត)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md 
focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="សរសេរអ្វីដែលអ្នកចង់បញ្ជាក់បន្ថែម..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 bg-blue-600 text-white font-bold 
rounded-md hover:bg-blue-700 transition duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'កំពុងផ្ញើ...' : 'ផ្ញើសារ'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
