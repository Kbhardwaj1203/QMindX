import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ServiceDetailsRight2 from "../Components/ServiceDetails/ServiceDetailsRight2";
import Service8 from "../Components/Services/Service8";
import { useParams } from "react-router-dom";
import serviceData from "../Data/sercicePage.json";

const ServiceDetailsRightDark = () => {
  const { slug } = useParams();
  const service = serviceData.find((s) => s.btnLink === `/service/${slug}`);

  return (
    <div>
      <BreadCumb2 Title={service?.title || "Service Details"}></BreadCumb2>
      <MarqueeText></MarqueeText>
      {/* Pass selected service as prop; component can use it to render dynamic content */}
      <ServiceDetailsRight2 service={service}></ServiceDetailsRight2>
      <Service8></Service8>
      <Cta2></Cta2>
    </div>
  );
};

export default ServiceDetailsRightDark;