$(document).ready(function() {


	  $('.box-item').draggable({
	    cursor: 'move',
	    helper: function() {
	        return $(this).clone()
	    }
	  });

	  $("#container1").droppable({
	    drop: function(event, ui) {
	      var itemid = $(event.originalEvent.toElement).attr("itemid");
	      $('.box-item').each(function() {
	        if ($(this).attr("itemid") === itemid) {
	          $(this).appendTo("#container1");
	          //$(this).draggable.css('position', 'absolute');
	        }
	      });
	    }
	  });

	  $("#container2").droppable({
	    drop: function(event, ui) {
	      var itemid = $(event.originalEvent.toElement).attr("itemid");
	      $('.box-item').each(function() {
	        if ($(this).attr("itemid") === itemid) {
	          $(this).appendTo("#container2");
	          //$(this).draggable.css('position', 'absolute');
	        }
	      });
	    }
	  });
	
	
	  
	var roles; 
	$.ajax({
        type        : 'GET',
        url         : 'roles',
        // using the done promise callback
        success: function(data, textStatus, jqXHR) {
        	console.log('role datas:'+data);
        	roles = data;
        	populateRoles(data);
        	droppableAgain();
        }
	});
	
	
	var populateRoles = function(data) {
		console.log('role datas:'+data);
		
		var count = $("#container2 div").length;
		alert(count);
		
		if(count <= 0) {
		
			for (var key in data) {
				
				var aRow = "<div itemid='" + data[key].roleId + "' class='btn btn-default box-item ui-draggable ui-draggable-handle'>" + data[key].roleName + "</div>";			
				
				$("#container2").append(aRow);
			}
		}
		
	}
	
	
	var droppableAgain = function(container1, container2) {
		
		
		$('.box-item').draggable({
		    cursor: 'move',
		    helper: function() {
		        return $(this).clone()
		    }
		  });

		  $(container1).droppable({
		    drop: function(event, ui) {
		      var itemid = $(event.originalEvent.toElement).attr("itemid");
		      $('.box-item').each(function() {
		        if ($(this).attr("itemid") === itemid) {
		          $(this).appendTo(container1);
		        }
		      });
		    }
		  });

		  $(container2).droppable({
		    drop: function(event, ui) {
		      var itemid = $(event.originalEvent.toElement).attr("itemid");
		      $('.box-item').each(function() {
		        if ($(this).attr("itemid") === itemid) {
		          $(this).appendTo(container2);
		        }
		      });
		    }
		  });
		
	}

	
	
	$('#showMyRoles').click(function(){
		
		event.preventDefault();
		alert($('#container1').html());
	    
	});
	
	
	$('#addProfile').click(function(){
		
		event.preventDefault();
		
		var aProfile = "<div class='col-xs-7'>" +
				"<div class='panel panel-default' >" +
				"<div class='panel-heading' id='raaga'>" +
				"<span class='glyphicon glyphicon-chevron-down' data-toggle='collapse' href='#profile2'></span>" +
				"<span>Profile 2</span>" +
				"</div>" +
				"<div id='profile2' class='collapse panel-body box-container'>" +
				"</div>" +
				"</div>" +
				"</div>" 
				;
		
		
		$("#_tdprofile").append(aProfile);
		populateRoles(roles);
		droppableAgain("#container1", "#profile2");
	});
	
	/*$('.panel').click(function(){
		
		event.preventDefault();
		$(this).toggle('slow');
		//populateRoles(roles);
	});*/
	
	$('.glyphicon').click(function () {
		console.log('her cli');
        $(this).toggleClass("glyphicon-chevron-down").toggleClass("glyphicon-chevron-up");
        droppableAgain();
    });
		
});
