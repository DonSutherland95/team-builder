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
  };

  // const submitForm = () => {
  //   let newMember = {
  //     username: formValues.username.trim(),
  //     email: formValues.email.trim(),
  //     role: formValues.role,
  //   };
  //   if (!newMember.username || !newMember.email || !newMember.role) return;
  //   axios
  //     .post("fakeapi.com", newFriend)
  //     .then((res) => {
  //       setMembers([...members, res.data]);
  //       setFormValues(initialFormValues);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });   
  // };


  return (
    <div className="App">
      {members.map((item)=>{
        return <Member data={item} />
      })}

      <MemberForm values={formValues}
        update={updateForm}
         />
      
    </div>
  );
}

export default App;
