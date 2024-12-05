import React, { useState } from 'react';

const Input = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [array, setArray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors({
      name: '',
      email: '',
      age: '',
    });

    let isValid = true;
    let newErrors = {};

    if (person.name.length < 6) {
      newErrors.name = 'Name must be at least 6 characters long';
      isValid = false;
    }

    if (!person.email.includes('@gmail.com')) {
      newErrors.email = 'Email must be a valid Gmail address';
      isValid = false;
    }

    if (!person.age || isNaN(person.age)) {
      newErrors.age = 'Age must be a valid number';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    if (editingIndex !== null) {
      const updatedArray = array.map((item, index) =>
        index === editingIndex ? person : item
      );
      setArray(updatedArray);
      setEditingIndex(null);
    } else {
      setArray([...array, person]);
    }

    setPerson({ name: '', age: '', email: '' });
  };

  const handleEdit = (index) => {
    setPerson(array[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedArray = array.filter((_, i) => i !== index);
    setArray(updatedArray);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name"
            value={person.name}
            placeholder="Enter name"
            onChange={handleChange}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
            }}
          />
          {errors.name && (
            <p style={{ color: 'red', marginTop: '5px' }}>{errors.name}</p>
          )}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="email"
            value={person.email}
            placeholder="Enter email"
            onChange={handleChange}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
            }}
          />
          {errors.email && (
            <p style={{ color: 'red', marginTop: '5px' }}>{errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="number"
            name="age"
            value={person.age}
            placeholder="Enter age"
            onChange={handleChange}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
            }}
          />
          {errors.age && (
            <p style={{ color: 'red', marginTop: '5px' }}>{errors.age}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
 padding: '10px 15px',
backgroundColor: editingIndex !== null ? '#007bff' : '#28a745',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer',}}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <div>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <thead style={{ backgroundColor: '#f4f4f4' }}>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',padding: '10px',textAlign: 'left',
                }}
              >
                Name
              </th>
              <th
                style={{ border: '1px solid #ddd',padding: '10px',textAlign: 'left',
                }}
              >
                Email
              </th>
              <th
                style={{
                  border: '1px solid #ddd',padding: '10px',textAlign: 'left',}}
              >
                Age
              </th>
              <th
                style={{border: '1px solid #ddd',padding: '10px',textAlign: 'left',}}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                }}
              >
                <td
                  style={{border: '1px solid #ddd',padding: '10px',}}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    border: '1px solid #ddd',padding: '10px',
                  }}
                >
                  {item.email}
                </td>
                <td
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                  }}
                >
                  {item.age}
                </td>
                <td
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                  }}
                >
                  <button
                    onClick={() => handleEdit(index)}
                    style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      marginRight: '5px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Input;



