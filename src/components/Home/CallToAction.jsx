import { BsChevronRight } from "react-icons/bs";

const CallToAction = () => {
  return (
    <div className="call-to-action-home" id="generating-free">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="action-content">
              <img src="/images/logo-i2.png" alt="" />

              <div className="h3" data-aos="fade-up" data-aos-duration="1000">
                Leverage the power of
                <br />
                <b>infinite assets.</b>
              </div>
              <a
                href="https://discord.gg/myntist"
                className="btn-lg"
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Get started for free <BsChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
