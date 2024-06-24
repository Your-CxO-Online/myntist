import { BsChevronRight } from 'react-icons/bs'
const CallAction = () => {
    return (
        <div className="call-to-action" id='generating-free'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-content">
                  <div className="h2" data-aos="fade-up" data-aos-duration="1000">
                    <b>Join our Telegram community </b>
                    and start collaborating
                  </div>
                  <button
                    className="btn-lg"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    Get started for free <BsChevronRight/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CallAction;