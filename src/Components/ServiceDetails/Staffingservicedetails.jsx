import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import { Link } from "react-router-dom";

// Accept dynamic service as a prop
const Staffingservicedetails = ({ service }) => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 details-right-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src={service?.heroImage || "/assets/img/service/staffing.webp"} alt="Staffing Service" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>{service?.title || "Staffing Service"}</h2>
                                        <div className="space16"></div>
                                        <p>{service?.desc || "Providing the right talent to drive your business forward efficiently and effectively."}</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Overview</h5>
                                                <div className="space16"></div>
                                                <p>{service?.overview || "Our staffing service connects companies with qualified professionals, ensuring the right fit for every role."}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>What You Get</h5>
                                                <div className="space20"></div>
                                                <ul className="expart-list">
                                                  {(service?.whatYouGet || [
                                                    "Access to a vast talent pool",
                                                    "Screened and qualified candidates",
                                                    "Flexible hiring solutions",
                                                    "Streamlined recruitment process"
                                                  ]).map((item, idx) => (
                                                    <li key={idx}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                                  ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Delivery</h5>
                                                <div className="space20"></div>
                                                <ul className="expart-list">
                                                  {(service?.delivery || [
                                                    "Candidate sourcing and screening",
                                                    "Interview coordination",
                                                    "Reference and background checks",
                                                    "Onboarding support"
                                                  ]).map((step, idx) => (
                                                    <li key={idx}><span className="check"><i className="bi bi-check-lg"></i></span> {step}</li>
                                                  ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Capabilities</h5>
                                        <div className="space16"></div>
                                        <p>We provide end-to-end staffing solutions across industries, leveraging expertise in recruitment, talent management, and workforce planning.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            {(service?.capabilities || [
                                              "Permanent and temporary staffing",
                                              "Executive search",
                                              "Industry-specific talent solutions",
                                              "Workforce optimization"
                                            ]).map((cap, idx) => (
                                              <li key={idx}><span className="check"><i className="bi bi-check-lg"></i></span> {cap}</li>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

                            {/* Related services */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon1.png" alt="HR Consulting" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-right-dark">HR Consulting</Link></h4>
                                      <div className="space16"></div>
                                      <p>Strategic HR guidance to optimize workforce performance and organizational growth.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="Talent Acquisition" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-right-dark">Talent Acquisition</Link></h4>
                                      <div className="space16"></div>
                                      <p>End-to-end recruitment solutions to find the right talent for every role.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                            </div>

                            <div className="space50"></div>

                            <div className="faq-area-all">
                                <div className="heading1">
                                    <h5>Frequently Asked Question</h5>
                                </div>
                                <div className="space20"></div>

                                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">

                                {data.slice(0,4).map((item, index)=>(
                                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
                                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id={`flush-heading${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                        {item.title}
                                        </button>
                                      </h2>
                                      <div ref={accordionContentRef} id={`flush-collapse${index}`} className="accordion-collapse collapse accordion-content" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{item.desc}</div>
                                      </div>
                                    </div>
                                    ))}

                                  </div>

                            </div>

                        </div>
                    </div>

                    {/* Sidebar remains unchanged */}
                    <div className="col-lg-4">
                      {/* ... same as original ... */}
                  </div>
                  
                </div>
            </div>
        </div>

    );
};

export default Staffingservicedetails;
