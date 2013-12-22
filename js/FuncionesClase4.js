$(function(){
			$('.publicar').on('click', mostrarFormulario);

			function mostrarFormulario(){
				$('form').slideToggle();
			}

			$('form').on('submit', procesarFormulario);

			function procesarFormulario(ev){
				ev.preventDefault();
				var titulo = $('input[name=titulo]').val();
				var autor = $('input[name=autor]').val();
				var tag = $('input[name=tag]').val();
				var espacio = '0';

				var template = '<article class="post"> \
						<div class="descripcion"> \
							<figure class="imagen"> \
								<img src="imagenes/foto.jpg"/> \
							</figure> \
							<div class="detalles"> \
								<h2 class="titulo"> \
									'+titulo+' \
								</h2> \
								<p> \
									por <a href="#">'+autor+'</a> \
								</p> \
								<a class="tag" href="#">'+tag+'</a> \
								<p class="fecha">hace <strong>0</strong>min</p> \
							</div> \
						</div> \
						<div class="acciones"> \
							<div class="votos"> \
								<a class="up" href="#"></a> \
							 	<span class="total">0</span> \
							 	<a class="down" href="#"></a> \
							</div> \
							<div class="datos"> \
								<a class="comentarios" href="#"> \
									 '+espacio+'0 \
								</a> \
								<a class="estrellita"> \
									 \
								</a> \
 \
							</div> \
						</div> \
					</article>';

					$('.posts').prepend($(template).fadeIn(function(){
						$(this).css('display', 'inline-block')
					}));
					$('input[type=text]').val('');
					$('form').slideUp();

			}

			function crearSizer(pixels){
				return function(){
					$('body').css('font-size', pixels+'px');
				}
			}

			$('.sizer').each(function(i, link){
				var pixels = $(link).prop('hash').substring(1);
				$(link)
					.css('font-size', pixels+'px')
					.on('click', crearSizer(pixels));


			});

			function crearContador (valorInicial){
				var contador = valorInicial || 0;

				return{
					up : function(){
						return ++contador;
					},
					down : function(){
						return --contador;
					}

				};

			};

			$('.total').each(function(i, elem){
				var contTotal = crearContador(elem.innerHTML);
				$(elem)
				.siblings('.up')
					.on('click', function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.up());
					})
				.siblings('.down')
					.on('click', function(ev){
						ev.preventDefault();
						$(elem).html(contTotal.down());
					})
			});


});