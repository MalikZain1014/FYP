import './Pricing.css'; // Make sure to import your CSS file

const Pricing = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="panel pricing-table">
          
          <div className="pricing-plan">
            <img src="https://img.icons8.com/?size=1x&id=P8rzGafrijWl&format=png" alt="" className="pricing-img" />
            <h2 className="pricing-header">Student Essentials</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">Access to course materials</li>
              <li className="pricing-features-item">Limited cloud storage</li>
            </ul>
            <span className="pricing-price">Free</span>
            <a href="#/" className="pricing-button">Enroll now</a>
          </div>
          
          <div className="pricing-plan">
            <img src="https://img.icons8.com/?size=1x&id=SQUhc67Yi70U&format=png" alt="" className="pricing-img" />
            <h2 className="pricing-header">Student Plus</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">Unlimited course access</li>
              <li className="pricing-features-item">Enhanced cloud storage</li>
            </ul>
            <span className="pricing-price">$99</span>
            <a href="#/" className="pricing-button is-featured">Start trial</a>
          </div>
          
          <div className="pricing-plan">
            <img src="https://img.icons8.com/?size=1x&id=e57Y1CnsOasB&format=png" alt="" className="pricing-img" />
            <h2 className="pricing-header">Researcher Pro</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">Advanced research tools</li>
              <li className="pricing-features-item">Collaboration features</li>
            </ul>
            <span className="pricing-price">$199</span>
            <a href="#/" className="pricing-button">Get started</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
