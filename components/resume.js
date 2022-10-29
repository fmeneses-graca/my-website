export default function Resume() {
    return (
        <div className="flex-col justify-items-center py-10 px-4">

            <h2 className="flex justify-center py-5 px-4 text-4xl font-roboto font-black text-white">
                My Professional Experience
            </h2>

            <h3 className="flex justify-left py-5 px-4 text-3xl font-roboto font-black text-white">
                Education
            </h3>

            <div flex flex-wrap py-10 px-4 justify-between>
                <EducationElement date="2021-2022" title="Computer Programming Diploma" institution="Seneca College" city="Toronto, Canada" />
                <EducationElement date="2019-2020" title="MBA in Information Technology Management" institution="FIAP" city="Sao Paulo, Brazil" />
                <EducationElement date="2014-2019" title="Bachelor of Laws" institution="UNICEUB" city="Brasilia, Brazil" />
            </div>

            <h3 className="flex justify-left py-5 px-4 text-3xl font-roboto font-black text-white">
                Work
            </h3>


        </div>
    )
}

function EducationElement({ date, title, institution, city }) {
    return (
        <div className="p-4 py-2 m-5 bg-blue-500 rounded text-2xl font-roboto text-white shadow-lg shadow-black">
            <p>{date}</p>
            <p>{title}</p>
            <p>{institution} ({city})</p>
        </div>
    )
}