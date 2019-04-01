var yo = require('yo-yo');
var landing = require('../landing');
module.exports = yo`		<div class="col s12 m7">
								<div class="row">
									<div class="signup-box">
										<h1 class="Inicio">Inicio</h1>
										<form class="signup-form">
											<h2>Registrate</h2>
											<div class="section">
												<a class="btn btn-tw hiden-on-small-only">Iniciar sesión con Twitter</a>
												<a class="btn btn-tw hide-on-med-and-up">Iniciar sesión</a>
												<!--div class="divider"></div-->
												<div class="section">
													<input type="email" name="email" placeholder="Correo electrónico" />
													<input type="text" name="name" placeholder="Nombre completo" />
													<input type="text" name="username" placeholder="Nombre de usuario" />
													<input type="password" name="password" placeholder="Contraseña" />
													<button class="btn waves-effect waves-light btn-signup" type="submit">Registrar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="row">
									<div class="login-box">
										¿Tienes cuenta? <a href="/signin">Entrar</a>
										<div class="divider"></div>
										<a href="/">Regresar</a>
									</div>
								</div>
							</div>`;