/*------Directives------*/
angular.module('DUOC.directives', [])


	/*tap*/
	.directive('ngTap', function() {
	    return function(scope, element, attrs) {
		      var tapping,touchstart = false,touchmove = false;
		      tapping = false;
		      element.bind('touchstart', function(e) {
		        element.addClass('active');
		        touchstart = {
		        	x: e.touches[0].pageX,
		        	y: e.touches[0].pageY
		        };
		        tapping = true;
		      });
		      element.bind('touchmove', function(e) {
		        element.removeClass('active');
		        if(Math.abs(Math.sqrt(touchstart.x*touchstart.x+touchstart.y*touchstart.y)-Math.sqrt(e.touches[0].pageX*e.touches[0].pageX+e.touches[0].pageY*e.touches[0].pageY)) > 5)
		        {
		        	tapping = false;
		        }
		      });
		      element.bind('touchend', function(e) {
		      	var el = $(this);
		        element.removeClass('active');
		        if(tapping) {
		        	Elac.tapEl = el;
		        	e.preventDefault();
		          	scope.$apply(attrs['ngTap'], element);
		        }
		      });
		    };
	})
	/*blur*/
	.directive('ngBlur', function() {
	    return function(scope, element, attrs) {
	    		element.bind('blur', function(e) {
			      		var el = $(this);
			        	Elac.blurEl = el;
			          	scope.$apply(attrs['ngBlur'], element);
			    });	      
		    };
	})
	/*swipe left and right*/
	.directive('ngSwipelr', function() {
	    return function(scope, element, attrs) {
		      	var testing = false,
		      		lr = false,
		      		_check_direction = function(el,e){
						var direction = "",
							clientX = el.data("clientX"),
							clientY = el.data("clientY"),
							directionX = Number(e.touches[0].pageX-clientX),
							directionY = Number(e.touches[0].pageY-clientY),
							_directionX = Math.abs(directionX),
							_directionY = Math.abs(directionY);
						if(clientX == "none" || !clientX)
						{
							return "unknow";
						}
						if(_directionX<_directionY*1.8)
						{
							if(directionY<=0)
							{
								direction = "up";
							}
							else
							{
								direction = "down";
							}
						}
						else
						{
							if(directionX>=0)
							{
								direction = "right";
								lr = true;
							}
							else
							{
								direction = "left";
								lr = true;
							}
						}
						return direction;
					};
		      	element.bind('touchstart', function(e) {
			        var el = $(this);
						el.data("flickDirection","testing")
							.data("clientX",e.touches[0].pageX)
						  	.data("clientY",e.touches[0].pageY);
					testing = true;
			    });
		      	element.bind('touchmove', function(e) {
			        var el = $(this);
					if(testing)
					{
						el.data("flickDirection",_check_direction(el,e));
						testing = false;
					}
					if(lr)
					{
						e.preventDefault();
					}
			    });
			    element.bind('touchend', function(e) {
			        var el = $(this),
			        	d = el.data("flickDirection");
			        if(d=="left" || d=="right")
			        {
			        	Elac.slrEl = element;
			        	scope.$apply(attrs['ngSwipelr'], element);
			        	return false;
			        }
			        el.data("flickDirection","end");
			        testing = false;
			        lr = false;
			    });
		}
	})
	/*swipe left*/
	.directive('ngSwipel', function() {
	    return function(scope, element, attrs) {
		      	var testing = false,
		      		lr = false,
		      		_check_direction = function(el,e){
						var direction = "",
							clientX = el.data("clientX"),
							clientY = el.data("clientY"),
							directionX = Number(e.touches[0].pageX-clientX),
							directionY = Number(e.touches[0].pageY-clientY),
							_directionX = Math.abs(directionX),
							_directionY = Math.abs(directionY);
						if(clientX == "none" || !clientX)
						{
							return "unknow";
						}
						if(_directionX<_directionY*1.8)
						{
							if(directionY<=0)
							{
								direction = "up";
							}
							else
							{
								direction = "down";
							}
						}
						else
						{
							if(directionX>=0)
							{
								direction = "right";
								lr = true;
							}
							else
							{
								direction = "left";
								lr = true;
							}
						}
						return direction;
					};
		      	element.bind('touchstart', function(e) {
			        var el = $(this);
						el.data("flickDirection","testing")
							.data("clientX",e.touches[0].pageX)
						  	.data("clientY",e.touches[0].pageY);
					testing = true;
			    });
		      	element.bind('touchmove', function(e) {
			        var el = $(this);
					if(testing)
					{
						el.data("flickDirection",_check_direction(el,e));
						testing = false;
					}
					if(lr)
					{
						e.preventDefault();
					}
			    });
			    element.bind('touchend', function(e) {
			        var el = $(this),
			        	d = el.data("flickDirection");
			        if(d=="left")
			        {
			        	Elac.slEl = element;
			        	scope.$apply(attrs['ngSwipel'], element);
			        }
			        el.data("flickDirection","end");
			        testing = false;
			        lr = false;
			    });
		}
	})
	/*swipe right*/
	.directive('ngSwiper', function() {
	    return function(scope, element, attrs) {
		      	var testing = false,
		      		lr = false,
		      		_check_direction = function(el,e){
						var direction = "",
							clientX = el.data("clientX"),
							clientY = el.data("clientY"),
							directionX = Number(e.touches[0].pageX-clientX),
							directionY = Number(e.touches[0].pageY-clientY),
							_directionX = Math.abs(directionX),
							_directionY = Math.abs(directionY);
						if(clientX == "none" || !clientX)
						{
							return "unknow";
						}
						if(_directionX<_directionY*1.8)
						{
							if(directionY<=0)
							{
								direction = "up";
							}
							else
							{
								direction = "down";
							}
						}
						else
						{
							if(directionX>=0)
							{
								direction = "right";
								lr = true;
							}
							else
							{
								direction = "left";
								lr = true;
							}
						}
						return direction;
					};
		      	element.bind('touchstart', function(e) {
			        var el = $(this);
						el.data("flickDirection","testing")
							.data("clientX",e.touches[0].pageX)
						  	.data("clientY",e.touches[0].pageY);
					testing = true;
			    });
		      	element.bind('touchmove', function(e) {
			        var el = $(this);
					if(testing)
					{
						el.data("flickDirection",_check_direction(el,e));
						testing = false;
					}
					if(lr)
					{
						e.preventDefault();
					}
			    });
			    element.bind('touchend', function(e) {
			        var el = $(this),
			        	d = el.data("flickDirection");
			        if(d=="right")
			        {
			        	Elac.slEr = element;
			        	scope.$apply(attrs['ngSwiper'], element);
			        }
			        el.data("flickDirection","end");
			        testing = false;
			        lr = false;
			    });
		}
	})
	/*swipe up and down*/
	.directive('ngSwiped', function() {
	    return function(scope, element, attrs) {
		      	var testing = false,
		      		lr = false,
		      		_check_direction = function(el,e){
						var direction = "",
							clientX = el.data("clientX"),
							clientY = el.data("clientY"),
							directionX = Number(e.touches[0].pageX-clientX),
							directionY = Number(e.touches[0].pageY-clientY),
							_directionX = Math.abs(directionX),
							_directionY = Math.abs(directionY);
						if(clientX == "none" || !clientX)
						{
							return "unknow";
						}
						if(_directionX<_directionY*1.8)
						{
							if(directionY<=0)
							{
								direction = "up";
							}
							else
							{
								direction = "down";
							}
						}
						else
						{
							if(directionX>=0)
							{
								direction = "right";
								lr = true;
							}
							else
							{
								direction = "left";
								lr = true;
							}
						}
						return direction;
					};
		      	element.bind('touchstart', function(e) {
			        var el = $(this);
						el.data("flickDirection","testing")
							.data("clientX",e.touches[0].pageX)
						  	.data("clientY",e.touches[0].pageY);
					testing = true;
			    });
		      	element.bind('touchmove', function(e) {
			        var el = $(this);
					if(testing)
					{
						el.data("flickDirection",_check_direction(el,e));
						testing = false;
					}
					if(lr)
					{
						e.preventDefault();
					}
			    });
			    element.bind('touchend', function(e) {
			        var el = $(this),
			        	d = el.data("flickDirection");
			        if(d=="down")
			        {
			        	Elac.slEr = element;
			        	scope.$apply(attrs['ngSwiped'], element);
			        }
			        el.data("flickDirection","end");
			        testing = false;
			        lr = false;
			    });
		}
	})
	/*page scroll*/
	.directive('ngScroll', function() {
	    return function(scope, element, attrs) {
		      element.bind('touchend', function(e) {
		        scope.$apply(attrs['ngScroll'], element);
		      });
		    };
	}).