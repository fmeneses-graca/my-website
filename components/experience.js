import Card from "./card"

export default function Experience() {
    return (
        <div id="experience" className="section-container">
            <h1>My Experience</h1>

            <h2>Education</h2>

            <div className="flex-container">
                <Card style="small-card" title="Computer Programming Diploma" text={senecaCardText()} />
                <Card style="small-card" title="MBA in Information Technology Management" text={fiapCardText()} />
                <Card style="small-card" title="Bachelor of Laws" text={uniceubCardText()} />
            </div>

            <h2>Work</h2>

            <div className="flex-container">
                <Card style="large-card" title="Sales Associate" text={legoCardText()} />
                <Card style="large-card" title="Legal Data Analyst" text={oabCardText()} />
            </div>
        </div>
    )
}

function senecaCardText() {
    return (
        <>
            2021 - 2022<br />
            Seneca College<br />
            Toronto, Canada
        </>
    )
}

function fiapCardText() {
    return (
        <>
            2019 - 2020<br />
            FIAP<br />
            Sao Paulo, Brazil
        </>
    )
}

function uniceubCardText() {
    return (
        <>
            2014 - 2019<br />
            UNICEUB<br />
            Brasilia, Brazil
        </>
    )
}

function legoCardText() {
    return (
        <>
            Mar 2022 - Present<br />
            LEGO (Toronto, Canada)<br /><br />
            While I was an international student, I worked part-time as a sales associate. 
            I provided high-level customer experience with a friendly approach to 
            drive sales revenue, conversion, and customer satisfaction. Daily, I communicated 
            with guests and team members, performed cash register functions, assisted in the 
            receiving and stocking products, maintained store displays and implemented brand visual standards.
        </>
    )
}

function oabCardText() {
    return (
        <>
            Apr 2019 - Jun 2021<br />
            OAB (Brasilia, Brazil)<br /><br />
            As a legal technician and credited lawyer, I conducted data-oriented research, 
            prepared reports and presentations, and maintained databases and tracking systems. 
            Daily, I collected, organized, and analyzed data to support the development of legal 
            services along with lawyers in my team. In two years, I elevated legal data analysis 
            standards by improving how data was collected and stored, implementing automated analytical 
            dashboards, and producing business process manuals.
        </>
    )

}