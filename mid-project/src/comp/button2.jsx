import React, { useState } from "react";


function Button2() {

  const grades = [
    "الصف الأول","الصف الثاني","الصف الثالث","الصف الرابع","الصف الخامس",
    "الصف السادس","الصف السابع","الصف الثامن","الصف التاسع","الصف العاشر"
  ];

  const subjects = [
    "رياضيات","لغة عربية","لغة إنجليزية",
    "علوم","تاريخ","جغرافيا","حاسوب","تربية إسلامية"
  ];

  const days = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس"];

  const [selectedGrade, setSelectedGrade] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="page">

     
      <div id="formid" className="navbar">
        <img
          id="photo"
          src="https://th.bing.com/th?q=School+Logo+Template+No+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247"
          alt=""
        />
        <p id="par">The Model School</p>

      <button className="backbutton" onClick={()=>window.location.href="/facepage"}>back to home</button>

        <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          ☰ الصفوف
        </button>
      </div>

     
      {openMenu && (
        <div className="dropdown">
          {grades.map((grade, index) => (
            <div
              key={index}
              className={`grade-item ${selectedGrade === grade ? "active" : ""}`}
              onClick={() => {
                setSelectedGrade(grade);
                setOpenMenu(false);
              }}
            >
              {grade}
            </div>
          ))}
        </div>
      )}

     
      <div className="content">

        {selectedGrade ? (
          <>
            <h2>{selectedGrade} - الجدول الدراسي</h2>

            <table>
              <thead>
                <tr>
                  <th>اليوم</th>
                  {[1,2,3,4,5].map((p) => (
                    <th key={p}>حصة {p}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {days.map((day, i) => (
                  <tr key={i}>
                    <td>{day}</td>
                    {subjects
                      .sort(() => 0.5 - Math.random())
                      .slice(0,5)
                      .map((sub, j) => (
                        <td key={j}>{sub}</td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h2 className="choose-text">
            اضغط على زر الصفوف في الأعلى لاختيار الصف
          </h2>
        )}

      </div>
      
    </div>
  );
}

export default Button2;
