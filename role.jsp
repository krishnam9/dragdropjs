<!DOCTYPE html>
<html>

  <head>
  <style type="text/css">
  
  
  body{

	font-family: 'verdana';
	
}
table {
	font-size: 18px;
    border-collapse: collapse;
}
td, th {
    border: 1px solid black;
    padding: 20px !important;
    vertical-align: top;
  	text-align: left;
  	height: 40px;
}

  	
/* Styles go here */

.box-container {
	height: 200px;
}

.box-item {
	width: 100%;
	z-index: 1000
}



/* for collapse*/


.glyphicon.glyphicon-chevron-down{
    font-weight:100;
}





  </style>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.4/themes/ui-lightness/jquery-ui.css" />
    
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    
	<script src="js/role.js"></script>
    <Script>
    </Script>
  </head>

  <body>
  
  	<center>
	<br/><br/>
	<button id="addProfile">Add Profile</button>
	<button id="showMyRoles">Show My Roles</button>
	<br/><br/>
	
	
	<div class="container-fluid">
      <div class="row">
      
        <table width="50%">
        
        	<tr style="background-color: grey">
				<td>Profiles</td>
				<td>Roles</td>
			</tr>
  			<tr><td width="50%" id="_tdprofile">
      
	        	
      
      
		        <div class="col-xs-7">
		          <div class="panel panel-default" >
		            <div class="panel-heading" id="krishnam">
		              <span class="glyphicon glyphicon-chevron-down" data-toggle="collapse" href="#container1"></span>
    				  <span>Krishnam</span>
		            </div>
		            <div id="container1" class="collapse panel-body box-container">
		            </div>
		          </div>
		        </div>
		        
		    </td>
		    
		    <td width="50%">
		        <div class="col-xs-7">
		          <div class="panel panel-default">
		            <div class="panel-heading">
		              <h1 class="panel-title">Select Role</h1>
		            </div>
		            <div id="container2" class="panel-body box-container">
		            </div>
		          </div>
		        </div>
		        
		     </td></tr>
		   </table>
		   
		   
      </div>
    </div>
    
    
    
  
  </center>
  </body>

</html>
