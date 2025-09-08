import { Link } from 'react-router-dom';
import data from '../../Data/sercicePage.json';
import { GiBrain } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";
import { FaIndustry, FaChartLine, FaLaptopCode, FaCogs, FaShieldAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";

const iconMap = {
  GiBrain,
  AiOutlineRobot,
  FaIndustry,
  FaChartLine,
  FaLaptopCode,
  FaCogs,
  FaShieldAlt,
  MdOutlineAnalytics,
  SiTensorflow
};

const Service6 = () => {
  return (
    <div className="servcie2 service-page-sec">
      <div className="space100"></div>
      <div className="container">
        <div className="row">
          {data.map((item, i) => {
            const IconComponent = iconMap[item.icon]; // pick the correct icon component
            return (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="servcie2-box">
                  <div className="icon">
                    {IconComponent ? <IconComponent size={40} /> : null}
                  </div>
                  <Link to={item.btnLink} className="arrow">
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <div className="heading1">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service6;
