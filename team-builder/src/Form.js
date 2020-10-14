import React, { useState } from 'react';



function Form(props) {

    const [data, setData] = useState({name: '', email: '', role: ''});

    const onSubmit = event => {
        event.preventDefault();
        props.newData(data);
      };

    const onChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };


    return (
    <div >
      <form onSubmit={event => onSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={event => onChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={event => onChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={data.role}
            onChange={event => onChange(event)}
          />
        </label>

        <button>Submit!</button>
      </form>
    </div>
    );
  }

  export default Form;
