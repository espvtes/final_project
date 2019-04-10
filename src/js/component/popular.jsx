import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class Popular extends React.Component {
	render() {
		return (
			<div className="text-cente container" id="popgame">
				<h1 className="popgame">
					<b>Popular Games</b>
				</h1>
				<div className="matches py-4">
					<div className="card-deck text-white px-4">
						<div className="card">
							<div className="image">
								<img
									src="https://cdn.ghanasoccernet.com/2018/06/FIFA.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body text-center">
								<label>Fifa</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="FIFA"
											value="submit">
											Play Now
										</button>
									</Link>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="image">
								<img
									src="https://www.bbva.com/wp-content/uploads/2019/02/fornite-apertura-bbva-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body text-center">
								<label>Fortnite</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="Fortnite"
											value="submit">
											Play Now
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="image">
								<img
									src="https://yese69.com/wp-content/uploads/data/2018/1/2/call-of-duty-ghost-wallpaper-1920x1280-hd-WTG3025204-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body text-center">
								<label>Call of Duty</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="call of duty"
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
		);
	}
}
