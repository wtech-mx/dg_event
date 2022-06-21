
/*
 * This example shows that you can:
 * - change the language on the fly.
 */

	var myDictionary = {
		es : {
			'ABOUT US' : 'SOBRE NOSOTROS',
            'EVENTS' : 'EVENTOS',
            'GALLERY' : 'GALERÍA',
            'SERVICES' : 'SERVICIOS',
            'PRESS' : 'PRENSA',
            'CONTACT' : 'CONTACTO',
            'PAUSE |' : 'PAUSA',
            'AUDIO' : 'AUDIO',
            'LIFE IS WORTH' : 'LA VIDA VALE',
            'CELEBRATING' : 'CELEBRANDO',
            'PRESS' : 'PRENSA',
			'DG Event Planning purpose as a company is to meet the needs of our clients' : 'El propósito de DG Event Planning como empresa es satisfacer las necesidades de nuestros clientes ',
			'y advising them in every step of the event planning process, ensuring' : 'y asesorarlos en cada paso del proceso de planificación del evento, asegurando',
			'all their expectations are met by carefully taking care of every aspect' : 'todas sus expectativas se cumplen cuidando cuidadosamente cada aspecto',
			'and bringing their vision to life. We provide our clients with optimal talent ' : 'y dando vida a su visión. Aportamos a nuestros clientes el talento óptimo',
			'and consistency, creative and unique ideas; giving beauty and harmony ' : 'y consistencia, ideas creativas y únicas; dando belleza y armonia',
			'to every detail, our most important goal is that our clients can enjoy the ' : 'a cada detalle, nuestro objetivo más importante es que nuestros clientes puedan disfrutar de la',
			'process of planning as we help them create the most memorable life experiences.' : 'proceso de planificación mientras los ayudamos a crear las experiencias de vida más memorables.',
		}
	}
	$.tr.dictionary(myDictionary);

	$(document).ready(function() {

		// change the language
		$('#language').change(function() {
			$.tr.language($(this).val());

			var tr = $.tr.translator();
			$('#aboutus').text(tr('ABOUT US'));
			$('#about').text(tr('ABOUT US'));
			$('#EVENTS').text(tr('EVENTS'));
			$('#GALLERY').text(tr('GALLERY'));
			$('#galeria').text(tr('GALLERY'));
			$('#SERVICES').text(tr('SERVICES'));
			$('#services').text(tr('SERVICES'));
			$('#PRESS').text(tr('PRESS'));
			$('#CONTACT').text(tr('CONTACT'));
			$('#PAUSE').text(tr('PAUSE |'));
			$('#AUDIO').text(tr('AUDIO'));
			$('#life').text(tr('LIFE IS WORTH'));
			$('#cel').text(tr('CELEBRATING'));
			$('#press').text(tr('PRESS'));
			$('#tx1').text(tr('DG Event Planning purpose as a company is to meet the needs of our clients'));
			$('#tx2').text(tr('y advising them in every step of the event planning process, ensuring'));
			$('#tx3').text(tr('all their expectations are met by carefully taking care of every aspect'));
			$('#tx4').text(tr('and bringing their vision to life. We provide our clients with optimal talent '));
			$('#tx5').text(tr('and consistency, creative and unique ideas; giving beauty and harmony '));
			$('#tx6').text(tr('to every detail, our most important goal is that our clients can enjoy the '));
			$('#tx7').text(tr('process of planning as we help them create the most memorable life experiences.'));
		});

		// default language is English if no cookies present
		var language = $.tr.language('en', true);

		$('#language').val(language);
		$('#language').change();
	});
