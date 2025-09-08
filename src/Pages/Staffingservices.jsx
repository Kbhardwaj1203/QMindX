import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
// import Staffingservicedetails from "../Components/ServiceDetails/Staffingservicedetails";
import Staffingservicedetails from "../Components/ServiceDetails/staffingservicedetails";
import Service8 from "../Components/Services/Service8";
import { useParams } from "react-router-dom";
import serviceData from "../Data/sercicePage.json";

const Staffingservices = () => {
  const { slug } = useParams();
  const service = serviceData.find((s) => s.btnLink === `/service/${slug}`);

  return (
    <div>
      <BreadCumb2 Title={service?.title || "Service Details"}></BreadCumb2>
      <MarqueeText></MarqueeText>
      {/* Pass selected service as prop; component can use it to render dynamic content */}
      <Staffingservicedetails service={service}></Staffingservicedetails>
      <Service8></Service8>
      <Cta2></Cta2>
    </div>
  );
};

export default Staffingservices;