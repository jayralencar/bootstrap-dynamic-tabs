(function ( $ ) {
	var ev = new $.Event('remove'),
	orig = $.fn.remove;
	$.fn.remove = function() {
		$(this).trigger(ev);
		return orig.apply(this, arguments);
	}
	var tabs = [];
	$.fn.TAB = function(options) {
		var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );

		if(this.find('.nav-tabs').length==0){
			this.append($('<ul/>', {class: 'nav nav-tabs'}).sortable({
				connectWith: this
			}));
		}else{
			this.find('.nav-tabs').sortable({
				connectWith: this
			});
		}

		if(this.find('.tab-content').length==0){
			this.append($('<div/>', {class: 'tab-content'}));
		}


		return this;
	};

	$.fn.addTab = function(options){
		var settings = $.extend({
            // These are the defaults.
            title: "Titulo Padrão",


        }, options );

		if(!settings.id){
			settings.id = trataId(settings.title);
		}else{
			settings.id = trataId(settings.id)
		}

		if(tabs.indexOf(settings.id)>=0){
			var aba = this.find('.nav-tabs').find('li').find('a[href="#'+settings.id+'"]');
			aba.tab('show');
			$(settings.id).tab('show');
		}else{

			tabs.push(settings.id);

			btn_close = $('<button/>',{
				class: 'close',
				type: 'button'
			}).text('x').click(function(){
				closer = $(this);     
				a = closer.parent();
				href = a.attr('href');
				a.parent().remove(); 
				var ativo = $(href).hasClass('active');
				$(href).remove();
				var idx = href.substring(1)
				tabs.splice(tabs.indexOf(idx),1);
				if(ativo){
					$('.nav-tabs li:eq(0) a').tab('show');	
				}
				
			});

			this.find('.active').removeClass('active')

			var ancora = $('<a/>',{
				href: '#'+settings.id,
				'data-toggle': 'tab'
			});

			if(settings.icon){
				ancora.append($('<i/>').addClass('fa').addClass(settings.icon)).append(' ')
			}

			ancora.append(btn_close).append(settings.title)


			//Carregando scripts
			if(settings.loadScripts){

				if(typeof(settings.loadScripts) == 'string'){
					var script = $('<script/>',{
						type:"text/javascript",
						src: settings.loadScripts
					});
					$('head').append(script)
					btn_close.on('click',function(){
						script.remove();
					})
				}else if(typeof(settings.loadScripts) == 'object'){
					var scripts = [];
					for(var i = 0 ; i < settings.loadScripts.length; i++){
						var script = $('<script/>',{
							type:"text/javascript",
							src: settings.loadScripts[i]
						});
						scripts.push(script);
						$('head').append(script);

					}
					btn_close.on('click',function(){
						for(var i = 0 ; i < scripts.length; i++){
							scripts[i].remove();	
						}
						
					})
				}
			}

			//Carregand CSS
			if(settings.loadStyles){
				if(typeof(settings.loadStyles) == 'string'){
					var style = $('<link/>',{
						href: settings.loadStyles,
						rel: 'stylesheet',
						type: 'text/css'
					});
					$('head').append(style);
					btn_close.on('click', function(){
						style.remove();
					})

				}else if(typeof(settings.loadStyles) == 'object'){
					var styles = [];
					for(var i = 0 ; i < settings.loadStyles.length; i++){
						var style = $('<link/>',{
							href: settings.loadStyles[i],
							rel: 'stylesheet',
							type: 'text/css'
						});
						styles.push(style);
						$('head').append(style);
					}
					btn_close.on('click',function(){
						for(var i = 0 ; i < styles.length; i++){
							styles[i].remove();	
						}

					})
				}
			}


			this.find('.nav-tabs').append($('<li/>', {class:'active'})
				.append(ancora));

			this.find('.tab-content').append($('<div/>', {
				class:'tab-pane active',
				id: settings.id
			}));

			var pagina = this.find('.tab-content').find('#'+settings.id);

			if(settings.text){
				pagina.text(settings.text)
			}

			if(settings.html){
				pagina.html(settings.html)
			}

			if(settings.ajaxFile){
				$.ajax({
		            mimeType: 'text/html; charset=utf-8', // ! Need set mimeType only when run from local file
		            url: settings.ajaxFile,
		            type: 'GET',
		            success: function(data) {
		            	pagina.html(data)
		            },
		            error: function (jqXHR, textStatus, errorThrown) {
		            	alert(errorThrown);
		            },
		            dataType: "html"
		            // async: false
		        });
			}




		}
		return this;

	}

	function trataId(s){
		var r=s.toLowerCase();
		r = r.replace(new RegExp("\\s", 'g'),"");
		r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
		r = r.replace(new RegExp("æ", 'g'),"ae");
		r = r.replace(new RegExp("ç", 'g'),"c");
		r = r.replace(new RegExp("[èéêë]", 'g'),"e");
		r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
		r = r.replace(new RegExp("ñ", 'g'),"n");                            
		r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
		r = r.replace(new RegExp("œ", 'g'),"oe");
		r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
		r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
		r = r.replace(new RegExp("\\W", 'g'),"");
		r = r.replace(/[^\w\s]/gi, '');
		return r;
	}

	

}( jQuery ));
