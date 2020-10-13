import React from 'react'



export default function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = (event) =>{
    const { name, value } = event.target;
    update(name, value);
}
const onSubmit = (event) => { 
    event.preventDefault();
    submit();
  };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username:
                    <input type="text"
                        name="username"
                        onChange={onChange}
                        value={values.username}
                        placeholder="type a username"
                        maxLength="30" >
                    </input>
                </label>
                <label>E-mail:
                    <input type="text"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="type your email"
                        maxLength="30" >
                    </input>
                </label>
                <label>
                    Role:
                    <select name="role" /*value={values.role}*/ onChange={onChange}>
                        <option value="">---select role---</option>
                        <option value="Developer">Developer</option>
                        <option value="Artist">Artist</option>
                        <option value="Student">Student</option>
                    </select>
                    </label>
                <div className="submit">
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}
