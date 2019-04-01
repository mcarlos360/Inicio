var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`		<div class="col s12 m7">
								<div class="row">
									<div class="signin-box">
										<h1 class="Inicio">Inicio</h1>
										<form class="signin-form">
											<div class="section">
												<a class="btn btn-tw hiden-on-small-only">Iniciar sesión con Twitter</a>
												<a class="btn btn-tw hide-on-med-and-up">Iniciar sesión</a>
												<!--div class="divider"></div-->
												<div class="section">
													<input type="text" name="username" placeholder="Nombre de usuario" />
													<input type="password" name="password" placeholder="Contraseña" />
													<button class="btn waves-effect waves-light btn-signin" type="submit">Entrar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="row">
									<div class="login-box">
										¿No tienes cuenta? <a href="/signup">Regístrate</a>
										<div class="divider"></div>
										<a href="/">Regresar</a>
									</div>
								</div>
							</div>`;
module.exports = landing(signinForm);