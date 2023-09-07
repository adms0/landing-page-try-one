import './index.css';
import {PRICING_DATA_CATEGORIES as data} from './dummy-data';
const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-subheading">
        <p className="primary-subheading">Pricing</p>
      </div>
      <div className="pricing-card-categories">
        {data?.map((e, index) => {
          return (
            <div className="pricing-info" key={e?.title + `ke-${index}`}>
              <h2>{e?.title}</h2>
              <div style={{marginTop: '1rem'}}>
                <ul style={{listStyleType: 'none', textAlign: 'left'}}>
                  {e?.items?.map((item, indexItem) => {
                    return (
                      <li key={indexItem}>
                        {indexItem + 1} {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Pricing;
