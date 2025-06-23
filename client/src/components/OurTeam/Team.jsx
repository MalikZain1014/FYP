import './Team.css'

const Team = () => {
    return (
        <div className="outContaierTeam">
                 <h1>My Team</h1>
            <div className="TeamContainer">
                <div className="box">
                    <div className="imgBox">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Usama Ahmad <br /><span>Full Stack Developer</span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Abdul Moiz<br /><span>Front End Developer</span></h2>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Haider Ali<br /><span>UI / UX Developer</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
