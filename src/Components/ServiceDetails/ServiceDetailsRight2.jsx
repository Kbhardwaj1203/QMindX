import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import { Link } from "react-router-dom";

// Accept dynamic service as a prop
const ServiceDetailsRight2 = ({ service }) => {

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
                                        <img src={service?.heroImage || "/assets/img/service/ai.webp"} alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>{service?.title || "Service Details"}</h2>
                                        <div className="space16"></div>
                                        <p>{service?.desc || "Explore our service offering tailored to your needs."}</p>
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
                                                <p>{service?.overview || "QMindX delivers tailored solutions to help you achieve measurable outcomes with speed and reliability."}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>What You Get</h5>
                                                <div className="space20"></div>
                                                <ul className="expart-list">
                                                  {(service?.whatYouGet || []).map((item, idx) => (
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
                                                  {(service?.delivery || []).map((step, idx) => (
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
                                        <p>We bring full-stack expertise and modern tooling to deliver reliable solutions across industries.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            {(service?.capabilities || []).map((cap, idx) => (
                                              <li key={idx}><span className="check"><i className="bi bi-check-lg"></i></span> {cap}</li>
                                            ))}
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

                            {/* Related services (keep as-is or adjust later) */}
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon1.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-right-dark">Consulting Service</Link></h4>
                                      <div className="space16"></div>
                                      <p>Strategic IT planning  roadmap development Business process analysis and improvement for It solution & technology.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-right-dark">Software Development</Link></h4>
                                      <div className="space16"></div>
                                      <p>Mobile app development for iOS, Android, and cross-platform solutions & web <br/> application.</p>
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
                                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        {item.title}
                                        </button>
                                      </h2>
                                      <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{item.desc}</div>
                                      </div>
                                    </div>
                                    ))}

                                  </div>

                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="sidebar-box-area mb-40">
                          <h3>Search by Keyword</h3>
                          <div className="search">
                              <input type="text" placeholder="Type keyword here" /> 

                              <div className="button">
                                  <button><i className="bi bi-search"></i></button>
                              </div>
                          </div>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Our Services</h3>
                          <ul className="features-list">
                                <li><Link to="/service/service-details-right-dark">Software Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-right-dark">Consulting Service <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-right-dark">Cloud Solution <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-right-dark">Cyber Security <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-right-dark">Data Analytics <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-right-dark">Manage It Services <span><i className="bi bi-chevron-right"></i></span></Link></li>
                          </ul>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Tags</h3>
                          <ul className="tags">
                              <li><a href="#">Software Development</a></li>
                              <li><a href="#">Cloud </a></li>
                              <li><a href="#">It Solution</a></li>
                              <li><a href="#">Data Analytics Service</a></li>
                              <li><a href="#">Technology</a></li>
                              <li><a href="#">Custom Development</a></li>
                              <li><a href="#">Cyber Security</a></li>
                              <li><a href="#">Consulting Service</a></li>
                          </ul>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Download Brochure</h3>
                          <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                          <div className="download-btns">
                              <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                              <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                          </div>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Get A Free Quote</h3>
                          <div className="contact-form">
                              <form action="#">
                                  
                                  <div className="single-input">
                                      <input type="text" placeholder="Your Name" />
                                  </div>

                                  <div className="single-input">
                                      <input type="email" placeholder="Email Address" />
                                  </div>

                                  <div className="single-input">
                                      <input type="number" placeholder="Phone Number" />
                                  </div>

                                  <div className="single-input">
                                      <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                  </div>

                                  <div className="button">
                                      <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>
                  
                </div>
            </div>
        </div>

    );
};

export default ServiceDetailsRight2;