import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class Popular extends React.Component {
	render() {
		return (
			<div className="text-cente container">
				<h1>
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
							<div className="card-body">
								<label>Fifa</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="fifa"
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
							<div className="card-body">
								<label>Call of duty</label>
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
						<div className="card">
							<div className="image">
								<img
									src="https://cdn.theculturetrip.com/wp-content/uploads/2018/02/36248625952_4f24759efa_k-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Baseball</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="doom"
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
									src="https://ambcrypto.sfo2.digitaloceanspaces.com/2018/06/photo-1518407613690-d9fc990e795f-1024x683.jpeg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Basketball</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="doom"
											value="submit">
											Play Now
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="card-deck text-white pt-4 px-4">
						<div className="card">
							<div className="image">
								<img
									src="http://starcraftcheats.online/wp-content/uploads/2019/01/starcraft-2-poster-printable-1024x683.jpeg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Starcraft</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="starcraft"
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
											className="btn btn-outline-dark"
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
								<label>Billiards</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="doom"
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
									src="https://www.nrlsupercoachtalk.com/wp-content/uploads/vcs_should_invest_like_poker_player-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Poker</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="doom"
											value="submit">
											Play Now
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="card-deck text-white pt-4 px-4">
						<div className="card">
							<div className="image">
								<img
									src="http://www.absfly.com/wp-content/uploads/2017/10/20151023204134-poker-game-gambling-gamble-cards-money-chips-game-1024x683.jpeg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Rummy</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="Pub6"
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
							<div className="card-body">
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
									src="https://epiloguegaming.com/wp-content/uploads/2019/03/APEX_LEGENDS_backDrop-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Apex legends</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark"
											type="submit"
											name="Apex legends"
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
									src="https://joinhomebase.com/wp-content/uploads/2016/08/bowling-pins-1024x683.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<label>Bowling</label>
								<div className="button">
									<Link className="create" to="/matchCreate">
										<button
											className="btn btn-outline-dark "
											type="submit"
											name="Super Smash"
											value="submit">
											Play now
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
