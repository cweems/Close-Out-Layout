$('div#content').infinitescroll({
		navSelector  	: "#next:last",
		nextSelector 	: "a#next:last",
		itemSelector 	: "#content",
		debug		 	: false,
		dataType	 	: 'html',
		loadingImg		: 'images/loading.gif',
        maxPage         : 9,
//		prefill			: true,
//		path: ["http://nuvique/infinite-scroll/test/index", ".html"]
		path: function(index) {
			return "index" + index + ".html";
		}
		// behavior		: 'twitter',
		// appendCallback	: false, // USE FOR PREPENDING
		// pathParse     	: function( pathStr, nextPage ){ return pathStr.replace('2', nextPage ); }
    }, function(newElements, data, url){
    	//USE FOR PREPENDING
    	// $(newElements).css('background-color','#ffef00');
    	// $(this).prepend(newElements);
    	//
    	//END OF PREPENDING

//    	window.console && console.log('context: ',this);
//    	window.console && console.log('returned: ', newElements);
    	
    });