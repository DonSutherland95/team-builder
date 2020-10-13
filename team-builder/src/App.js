import React,{useState} from 'react';
import MemberForm from "./components/MemberForm"
import Member from "./components/Member"
import './App.css';

const memberList = [
  {username:"John_Brown", email:"jbrown@gmail.com", role:"Developer"},
  {username:"Mary_Jane", email:"mjane@gmail.com", role:"Artist"},
  {username:"Bill_White", email:"bwhite@gmail.com", role:"Doctor"}
]

const initialFormValues ={
  username: "",
  email: "",
  role:""
}

function App() {
  const [members, setMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]:inputValue});
    console.log(inputName, inputValue)
  };


  const submitForm = () => {
    let newMember = {
  
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    
    }; 
    // console.log(...members)
    setMembers([...members, newMember])
      
  }

  return (
    <div className="App">
      {members.map((item)=>{
        return <Member data={item} />
      })}

      <MemberForm values={formValues}
        update={updateForm}
        submit={submitForm}
         />
      
    </div>
  );
}

export default App;
