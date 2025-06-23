// ApplyAdmission.js
import './ApplyAdmission.css';
import { Building, GraduationCap, FootballBall, User } from 'iconoir-react';

const ApplyAdmission = () => {
    return (
        <div className="apply-admission">
            <div className="upperContainer_Admission">
                <div className="apply-admission-top">
                    <div className="apply-admission-top-icon">
                        <Building className='apIcon' />
                    </div>
                    <div className="right-side-top-admiision">
                        <div className="apply-admission-top-title">University Life</div>
                        <div className="apply-admission-top-subtitle">Overall in here</div>
                    </div>
                </div>
                <div className="apply-admission-top">
                    <div className="apply-admission-top-icon">
                        <GraduationCap className='apIcon' />
                    </div>
                    <div className="right-side-top-admiision">
                        <div className="apply-admission-top-title">Graduation</div>
                        <div className="apply-admission-top-subtitle">Overall in here</div>

                    </div>
                </div>
                <div className="apply-admission-top">
                    <div className="apply-admission-top-icon">
                        <FootballBall className='apIcon' />
                    </div>
                    <div className="right-side-top-admiision">
                        <div className="apply-admission-top-title">Athletics</div>
                        <div className="apply-admission-top-subtitle">Overall in here</div>
                    </div>
                </div>
                <div className="apply-admission-top">
                    <div className="apply-admission-top-icon">
                        <User className='apIcon' />
                    </div>
                    <div className="right-side-top-admiision">
                        <div className="apply-admission-top-title">Social</div>
                        <div className="apply-admission-top-subtitle">Overall in here</div>
                    </div>
                </div>

            </div>
            <div className="apply-admission-main">
                <div className="apply-admission-main-image">

                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Apply for Admission" />
                </div>
                <div className="apply-admission-main-content">
                    <div className="apply-admission-main-title">Apply for Admission</div>
                    <span className="apply-admission-main-subtitle">Fall 2023 applications are now open</span>
                    <p className="apply-admission-main-description">
                        We don’t just give students an education and experiences that set them up for success in a career.
                        We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.
                    </p>
                    <button className="mycustomButton">Apply Now</button>
                </div>
            </div>
        </div>
    );
}

export default ApplyAdmission;
