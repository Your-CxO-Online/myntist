import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
const CallAction = () => {
	return (
		<div className="call-to-action founder-action" id="generating-free">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="call-to-content">
							<div
								className="h2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<b>Join our Discord community </b>
								to discover more
							</div>
							<Link
								href="https://discord.gg/myntist"
								target="_blank"
								className="btn-lg"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								Join our Discord <BsChevronRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallAction;
