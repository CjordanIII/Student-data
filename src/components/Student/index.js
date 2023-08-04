

function Student({studentName,studentBio,studentScoreObj}){;
    return(
        <>
            <h1>{studentName[0]}</h1>
            <ul>
                <li>
                    {studentBio[0]}
                </li>
                <li>
                    Date: {studentScoreObj[0][0].date},     Score:{studentScoreObj[0][0].score} <br></br>  Date: {studentScoreObj[0][1].date},     Score:{studentScoreObj[0][1].score} <br></br>  Date: {studentScoreObj[0][2].date},     Score:{studentScoreObj[0][2].score}
                </li>
            </ul>
            <h1>{studentName[1]}</h1>
            <ul>
                <li>
                    {studentBio[1]}
                </li>
                <li>
                    Date: {studentScoreObj[1][0].date},     Score:{studentScoreObj[1][0].score} <br></br>  Date: {studentScoreObj[1][1].date},     Score:{studentScoreObj[1][1].score} <br></br>  Date: {studentScoreObj[1][2].date},     Score:{studentScoreObj[1][2].score}
                </li>
            </ul>


            <h1>{studentName[2]}</h1>
                        
            <ul>
                <li>
                    {studentBio[2]}
                </li>
                <li>
                    Date: {studentScoreObj[2][0].date},     Score:{studentScoreObj[2][0].score} <br></br>  Date: {studentScoreObj[2][1].date},     Score:{studentScoreObj[2][1].score} <br></br>  Date: {studentScoreObj[2][2].date},     Score:{studentScoreObj[2][2].score}
                </li>
            </ul>
        </>
    )
}



export default Student