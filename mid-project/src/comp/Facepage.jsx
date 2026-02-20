import React from 'react'
import { useState } from 'react'

function Facepage() {

    const [theme, setTheme] = useState("light");

    const addtheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (

        <div id={theme}>

            <div id='formid'>
                <img id='photo' src="https://th.bing.com/th?q=School+Logo+Template+No+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" alt="" />
                <p id='par'>The Model School</p>
                <input id='search' type="search" placeholder='search...' />

                <button className='button' onClick={() => window.location.href = "/Signin"}> sign in </button>
                <button className='button'>sign up </button>

                <div className='theme'>
                    <button onClick={addtheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>

            <div id='main'>
                <button className='button1' onClick={() => window.location.href = "/button1"}>
                    <img src="https://th.bing.com/th/id/OIP.lbf39aXC0CXHIEfRAmfHYAHaG-?w=205&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <p>جدول الطلاب</p>
                </button>

                <button className='button1' onClick={()=>window.location.href="/button2"}>
                    <img src="https://th.bing.com/th/id/OIP.lbf39aXC0CXHIEfRAmfHYAHaG-?w=205&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <p>المواد الدراسية</p>
                </button>

                <button className='button1' onClick={()=>window.location.href="/exam"}>
                    <img src="https://th.bing.com/th/id/OIP.lbf39aXC0CXHIEfRAmfHYAHaG-?w=205&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <p>الاختبارات</p>
                </button>
            </div>

           
            <footer id="footer">
                <p>© 2026 The Model School. All Rights Reserved.</p>
                <div className="footer-links">
                

                    <a href="/contact">اتصل بنا</a>

                    <a href="/privacy">سياسة الخصوصية</a>

                     <a href="/about">من نحن</a>
                </div>
            </footer>

        </div>
    )
}

export default Facepage
