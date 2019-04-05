import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class MatchesForm extends React.Component {
	render() {
		return (
			<div className="matches">
				<div className="card-deck px-4">
					<div className="card">
						<div className="image">
							<img
								src="https://cdn.ghanasoccernet.com/2018/06/FIFA.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>FIFA</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="fifa"
										value="submit">
										Join lounge!!!
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
						<div className="card-body">
							<label>Call of duty</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="call of duty"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img
								src="https://cdn.theculturetrip.com/wp-content/uploads/2018/02/36248625952_4f24759efa_k-1024x683.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>BASEBALL</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="doom"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img
								src="https://ambcrypto.sfo2.digitaloceanspaces.com/2018/06/photo-1518407613690-d9fc990e795f-1024x683.jpeg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>BASKETBALL</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="doom"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="card-deck pt-4 px-4">
					<div className="card">
						<div className="image">
							<img
								src="http://starcraftcheats.online/wp-content/uploads/2019/01/starcraft-2-poster-printable-1024x683.jpeg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>STARCARFT</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="starcraft"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img
								src="https://bitneni.com/wp-content/uploads/2019/02/Doom-3-1024x683.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>Doom</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="doom"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img
								src="https://www.customwallpaper.net.au/wp-content/uploads/2015/12/AdobeStock_29313093-1024x683.jpeg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>BILLIARDS</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="doom"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img
								src="https://www.nrlsupercoachtalk.com/wp-content/uploads/vcs_should_invest_like_poker_player-1024x683.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="card-body">
							<label>POKER</label>
							<div className="button">
								<Link className="create" to="/matchCreate">
									<button
										className="btn btn-success"
										type="submit"
										name="doom"
										value="submit">
										Join lounge!!!
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
