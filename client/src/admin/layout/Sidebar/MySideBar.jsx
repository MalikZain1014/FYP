import { useEffect, useState } from 'react';
import { navigationLinks } from "../../../data/data"; // Make sure to adjust the path
import './MySideBar.css'
import { useContext } from 'react';
import { SidebarContext } from "../../../context/sidebarContext";
import {
    Home, // Replace with the correct icon component
    Journal,
    Mail, // Replace with the correct icon component
    Calendar, // Replace with the correct icon component
    ReportColumns, // Replace with the correct icon component
    Reports, // Replace with the correct icon component
    PrinterAlt, // Replace with the correct icon component
    User,
    Settings,
    UserStar,
    City, // Replace with the correct icon component
    Book
} from 'iconoir-react';
import { personsImgs } from '../../../utils/images';

const MySideBar = () => {
    const [activeLinkIdx] = useState(1);
    const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);

    useEffect(() => {
        if (isSidebarOpen) {
            setSidebarClass('sidebar-change');
        } else {
            setSidebarClass('');
        }
    }, [isSidebarOpen]);

    return (
        <div className={`sidebar ${sidebarClass}`}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="profile image" />
                </div>
                <span className="info-name">alice-doe</span>
            </div>

            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map((navigationLink) => {
                            let IconComponent;

                            switch (navigationLink.id) {
                                case 1:
                                    IconComponent = Home;
                                    break;
                                case 2:
                                    IconComponent = UserStar;
                                    break;
                                case 3:
                                    IconComponent = Mail;
                                    break;
                                case 4:
                                    IconComponent = Journal;
                                    break;
                                case 5:
                                    IconComponent = Calendar;
                                    break;
                                case 6:
                                    IconComponent = Reports;
                                    break;
                                case 7:
                                    IconComponent = ReportColumns;
                                    break;
                                case 8:
                                    IconComponent = PrinterAlt;
                                    break;
                                case 9:
                                    IconComponent = User;
                                    break;
                                case 10:
                                    IconComponent = City;
                                    break;
                                case 11:
                                    IconComponent = Book;
                                    break;
                                case 12:
                                    IconComponent = Settings;
                                    break;
                                default:
                                    IconComponent = Home; // Default to Home icon
                                    break;
                            }

                            return (
                                <li className="nav-item" key={navigationLink.id}>
                                    <a
                                        href="#"
                                        className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
                                    >
                                        <IconComponent className="nav-link-icon" />
                                        <span className="nav-link-text">{navigationLink.title}</span>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default MySideBar;
