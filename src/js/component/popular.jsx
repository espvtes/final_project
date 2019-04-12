import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class Popular extends React.Component {
	render() {
		return (
			<div className="text-center container" id="popgame">
				<h2 className="text-white">Popular Games</h2>
				<div className="card-deck text-white px-4">
					<div className="row matches py-4 rounded">
						<div className="row">
							<div className="col">
								<div className="card-deck text-white pt-4 px-4">
									<div className="card">
										<div className="image">
											<img
												src="https://cdn.ghanasoccernet.com/2018/06/FIFA.jpg"
												className="card-img-top"
												alt="..."
											/>
										</div>
										<div className="card-body">
											<label>Fifa</label>
											<div className="button">
												<Link
													className="create"
													to="/playNow">
													<button
														className="btn btn-outline-dark text-white"
														id="button"
														type="submit"
														name="fifa"
														value="submit">
														Play Now
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card-deck text-white pt-4 px-4">
									<div className="card">
										<div className="image">
											<img
												src="https://epiloguegaming.com/wp-content/uploads/2019/03/APEX_LEGENDS_backDrop-1024x683.jpg"
												className="card-img-top"
												alt="..."
											/>
										</div>
										<div className="card-body">
											<label>Apex legends</label>
											<div className="button">
												<Link
													className="create"
													to="/playNow">
													<button
														className="btn btn-outline-dark text-white"
														type="submit"
														id="button"
														name="Apex legends"
														value="submit">
														Play Now
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card-deck text-white pt-4 px-4">
									<div className="card">
										<div className="image">
											<img
												src="https://www.bbva.com/wp-content/uploads/2019/02/fornite-apertura-bbva-1024x683.jpg"
												className="card-img-top"
												alt="..."
											/>
										</div>
										<div className="card-body">
											<label>Fortnite</label>
											<div className="button">
												<Link
													className="create"
													to="/playNow">
													<button
														className="btn btn-outline-dark text-white"
														type="submit"
														name="Fortnite"
														value="submit">
														Play Now
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
