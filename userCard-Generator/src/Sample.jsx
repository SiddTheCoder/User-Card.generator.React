import { useState } from 'react'

import './index.css'
import Card from './components/Card'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    // Display the entered details
    alert(`Name: ${formData.name}\nNickname: ${formData.nickname}\nImage: ${formData.image}`);
  };

  return(
    <form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label className="block font-medium text-lg mb-1">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange} // Updates state on every keystroke
      placeholder="Enter your name"
      className="border p-2 rounded w-full"
    />
  </div>
  <div>
    <label className="block font-medium text-lg mb-1">Nickname</label>
    <input
      type="text"
      name="nickname"
      value={formData.nickname}
      onChange={handleChange}
      placeholder="Enter your nickname"
      className="border p-2 rounded w-full"
    />
  </div>
  <div>
    <label className="block font-medium text-lg mb-1">Upload Image</label>
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload} // Updates state with the selected file
      className="border p-2 rounded w-full"
    />
  </div>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Submit
  </button>
</form>

  )
}

export default App
