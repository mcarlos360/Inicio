var page = require('page');
/*var empty= require('empty-element');
var yo = require('yo-yo');


page('/', function (ctx, next){
	var main = document.getElementById('main-container'); 
	main.innerHTML = 'Home <a href="/signup">Signup</a>'; 
	})

page('/signup', function(ctx, next){
	var main = document.getElementById('main-container');
var el = yo`<div class="container">
					<div class="row">
					<div class="col s10 push-s1">	
						<div class="row">
							<div class="col m5 hide-on-small-only">
								<img class="iphone" src="phone.png">
							</div>
							<div class="col s12 m7">
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
										<!--div class="divider"></div-->
										¿Tienes cuenta? <a href="/signin">Entrar</a>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>`;
			empty(main).appendChild(el);
		}) */
require('./homepage');
require('./signup');
page();