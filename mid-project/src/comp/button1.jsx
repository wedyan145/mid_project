import React from 'react'
import { useState, useEffect } from 'react'
function button1() {
    const [addusers, setaddusers] = useState({
        id: 0,
        name: "",
        stage: "",
        class: ""
    });
    const [user, setuser] = useState(() => {
       
        const savedUsers = localStorage.getItem("users");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

   
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(user));
    }, [user]);

    const handleadd = (e) => {
        e.preventDefault();


        if (addusers.name === "" || addusers.stage === "" || addusers.class === "") {
            alert("Please fill all the fields"); 
            return; 
        }

        try {
            setuser([...user, addusers]); 
            setaddusers({
                id: addusers.id + 1,
                name: "",
                stage: "",
                class: ""
            });
            alert("Successfully added");    
        } catch (error) {
            console.log("Error:", error);
            alert("Something went wrong!");
        }
    }




    return (
        <div>
            <div id='formid'>
                <img id='photo' src="https://th.bing.com/th?q=School+Logo+Template+No+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" alt="" />
                <p id='par'>The Model School</p>
                <input id='search' type="search" placeholder='search...' />

                <button className='button' onClick={() => window.location.href = "/Signin"}> sign in </button>
                <button className='button' >sign up </button>
                
            </div>
            

            <div id='addstudent'>
                <h1>إضافة طالب</h1>
                <input type="text" placeholder='add name' className='input-field' onChange={e => { setaddusers({ ...addusers, name: e.target.value }) }} name='name' />
                <input type="text" placeholder='add stage' className='input-field' onChange={e => { setaddusers({ ...addusers, stage: e.target.value }) }} name="stage" />
                <input type="text" placeholder='add class' className='input-field' onChange={e => { setaddusers({ ...addusers, class: e.target.value }) }} name="class" />
                <button id='add' onClick={handleadd}>add student</button>
            </div>
            

            <table id='tab'>

                <tr key="header">
                    <th>الرقم التعريفي</th>
                    <th>الاسم</th>
                    <th>المرحلة</th>
                    <th>الصف</th>
                </tr>
                {user.map((u) => {
                    return (
                        <tr key={u.id}>
                            <td>{u.id + 1}</td>
                            <td>{u.name}</td>
                            <td>{u.stage}</td>
                            <td>{u.class}</td>
                            <td><button onClick={() => {
                                setuser(user.filter(user => user.id !== u.id));
                            }}>Delete</button></td>
                            <td>
                                <button onClick={() => {
                                    const newName = prompt("Enter new name:", u.name);
                                    const newStage = prompt("Enter new stage:", u.stage);
                                    const newClass = prompt("Enter new class:", u.class);
                                    if (newName || newStage || newClass) {
                                        setuser(user.map(user => user.id === u.id ? { ...user, name: newName, stage: newStage, class: newClass } : user));
                                    }

                                }}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            
             

        </div>
    )
}

export default button1