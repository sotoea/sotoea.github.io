//$(document).ready(function(){
	function pathPrepare ($el) {
			var lineLength = $el[0].getTotalLength();
			$el.css("stroke-dasharray", lineLength);
			$el.css("stroke-dashoffset", lineLength);
		}
	//------------------------------------------------------

	var $second = $("path#second");


	// prepare SVG
	pathPrepare($second);


	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
	  .add(TweenMax.to($second, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	  .add(TweenMax.to("path#second", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 300, tweenChanges: true})
	        .setTween(tween)

	        .addTo(controller);

	//--------------------------------------------------------

	var $l4 = $("path#l4");

	// prepare SVG
	pathPrepare($l4);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l4, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l4", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l5");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l5", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l6");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l6", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger6", duration: 10, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l7");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l7", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger7", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l8");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l8", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 900, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l9");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l9", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger9", duration: 900, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l10");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l10", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger10", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l11");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l11", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger11", duration: 2000, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------
	var $l5 = $("path#l12");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l12", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger12", duration: 2000, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l13");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l13", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger13", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l14");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l14", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger14", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l15");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l15", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger15", duration: 100, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l16");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l16", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger16", duration: 100, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l17");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l17", 1, {stroke: "blue", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger17", duration: 1500, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l18");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l18", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger18", duration: 800, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l19");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l19", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger19", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------

	var $l5 = $("path#l20");

	// prepare SVG
	pathPrepare($l5);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($l5, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path#l20", 1, {stroke: "white", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger20", duration: 300, tweenChanges: true})
					.setTween(tween)
					.addTo(controller);

	//--------------------------------------------------------



//});
