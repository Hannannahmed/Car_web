import React from "react";

const Faq = () => {
  const accordian_content = [
    {
      heading: "How long does it take to inspect your car?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading: "Continually implement B2C methods of empowerment?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading: "Quickly fabricate technically sound networks before?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      heading:
        "Compellingly streamline innovative niches vis-a-vis market-driven?",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing.",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <p className="faq_head">FAQs</p>
          <h1 className="Frequently_head">Frequently Ask Question</h1>
          <div className="col-md-12">
            {accordian_content.map((item, index) => (
              <div className="accordion mt-2" id="accordionExample" key={index}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapseOne"+index}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h6 className="accordian_heading"> {item.heading}</h6>
                    </button>
                  </h2>
                  <div
                    id={"collapseOne"+index}
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="accordian_para">{item.para}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
