import "./MainContent.css"
// import Subscriptions from "../Subscriptions/Subscriptions";
// import Savings from "../Savings/Savings";
// import Financial from "../Financial/Financial";
import Cards from "../adminComponents/Cards/Cards";
import Transactions from "../adminComponents/Transactions/Transaction";
import Report from "../adminComponents/Reports/Reports";
import Money from "../adminComponents/Money/Money";
import DuePay from "../adminComponents/DuaPay/DuePay";
import FinantialAdvise from "../adminComponents/FinantialAdvise/FinantialAdvise";
import Applicatoins from "../adminComponents/Applicatoins/Applicatoins";

const MainContent = () => {
    return (
        <div className="main-content-holder">
            <div className="content-grid-one">
                <Cards/>
                <Transactions/>
                <Report/>
            </div>
            <div className="content-grid-two">
                <Money/>
                <div className="grid-two-item">
                    <div className="subgrid-two">
                        <Applicatoins/>
                        {/* <Savings /> */}
                    </div>
                </div>

                <div className="grid-two-item">
                    <div className="subgrid-two">
                        <DuePay/>
                        <FinantialAdvise/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;