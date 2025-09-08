import { useMemo, useState } from "react";
import data from "../../Data/projectPage.json";

const categories = [
  "All",
  "Web Applications",
  "Laravel Projects",
  "Mobile Apps (Android & iOS)",
  "Core PHP Projects",
  "WordPress Projects",
  "Shopify Projects",
  "Figma / UI-UX Designs",
];

const deriveCategory = (title = "") => {
  const t = title.toLowerCase();
  if (t.includes("(laravel)")) return "Laravel Projects";
  if (t.includes("(core php)")) return "Core PHP Projects";
  if (t.includes("(wordpress)")) return "WordPress Projects";
  if (t.includes("(shopify)")) return "Shopify Projects";
  if (t.includes("(android app)") || t.includes("(ios app)")) return "Mobile Apps (Android & iOS)";
  if (t.includes("(figma)") || t.includes("invision")) return "Figma / UI-UX Designs";
  return "Web Applications";
};

const Project4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const enrichedData = useMemo(
    () => data.map((item) => ({ ...item, category: deriveCategory(item.title) })),
    []
  );

  const filteredData = useMemo(
    () =>
      selectedCategory === "All"
        ? enrichedData
        : enrichedData.filter((p) => p.category === selectedCategory),
    [selectedCategory, enrichedData]
  );

  return (
    <div className="project-boxs-area sp">
      <div className="container">
        {/* Filters */}
        <div className="mb-4 d-flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="project-page-box">
                <div className="image">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.icon} alt={item.title} />
                  </a>
                </div>
                <div className="heading2">
                  <h4>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h4>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn"
                  >
                    Learn More <span><i className="bi bi-arrow-right"></i></span>
                  </a>
                  <div className="mt-2">
                    <span className="badge bg-secondary">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project4;
