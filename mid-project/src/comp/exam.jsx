import React, { useState } from "react";


function ExamPage() {

        const [theme, setTheme] = useState("light");
        const addtheme = () => {
            setTheme(prev => (prev === "light" ? "dark" : "light"));
        };

    const classes = ["الصف الأول", "الصف الثاني", "الصف الثالث"];

    const [examsData, setExamsData] = useState({
        "الصف الأول": ["اختبار رياضيات", "اختبار عربي"],
        "الصف الثاني": ["اختبار جبر"],
        "الصف الثالث": ["اختبار فيزياء"]
    });

    const [selectedClass, setSelectedClass] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newExam, setNewExam] = useState("");

    const addExam = () => {
        if (!newExam) return;

        setExamsData(prev => ({
            ...prev,
            [selectedClass]: [...prev[selectedClass], newExam]
        }));

        setNewExam("");
        setShowModal(false);
    };

    return (
        <div>
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
            <div className="exam-page">

                <h2>إدارة الاختبارات</h2>

                <div className="classes-container">
                    {classes.map((cls, index) => (
                        <button
                            key={index}
                            className="class-card"
                            onClick={() => setSelectedClass(cls)}
                        >
                            {cls}
                        </button>
                    ))}
                </div>

                {selectedClass && (
                    <div className="exams-container">
                        <h3>اختبارات {selectedClass}</h3>

                        <button
                            className="add-exam-btn"
                            onClick={() => setShowModal(true)}
                        >
                            + إضافة اختبار
                        </button>

                        {examsData[selectedClass].map((exam, index) => (
                            <div key={index} className="exam-card">
                                <span>{exam}</span>
                                <button className="send-btn">
                                    إرسال للطلاب
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>إضافة اختبار جديد</h3>
                        <input
                            type="text"
                            value={newExam}
                            onChange={(e) => setNewExam(e.target.value)}
                            placeholder="اسم الاختبار"
                        />
                        <button onClick={addExam}>حفظ</button>
                        <button onClick={() => setShowModal(false)}>إلغاء</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ExamPage;
