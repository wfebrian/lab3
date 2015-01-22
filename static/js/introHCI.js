'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
var flag = 1;
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("undergraduate student in computer science");
    if(flag == 1){
      $("#testjs").text("Who am I?");
      $('.jumbotron h1').text("Wesley Febrian");
      flag = 0;
    }else{
      $("#testjs").text("What's my name?");
      flag = 1;
    }
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading 
    e.preventDefault();
    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    //Note the difference between # and .
    //#jumbotron selects the element with id="jumbotron"
    //.jumbotron selects the element with class="jumbotron"
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    var projectID = (containingProject[0].id);
    //console.log("PROJECT ID IS " + projectID);
    if(description.length == 0){
        if (projectID == "project1") { 
          $(containingProject).append("<div class='project-description'><p>Run-of-the-Mill is a daily project</p></div>"); 
        }
        else if(projectID == "project2"){
          $(containingProject).append("<div class='project-description'><p>Up in the Air: Airplane window peek</p></div>"); 
        }
        else if(projectID == "project3"){
          $(containingProject).append("<div class='project-description'><p>Travel: Places around the globe</p></div>"); 
        }
        else if(projectID == "project4"){
          $(containingProject).append("<div class='project-description'><p>Beaches: Shores and Waves</p></div>"); 
        }
        else if(projectID == "project5"){
          $(containingProject).append("<div class='project-description'><p>Nature: Greens and Trees</p></div>"); 
        }
        else if(projectID == "project6"){
          $(containingProject).append("<div class='project-description'><p>Animals: Mostly Quadropeds</p></div>"); 
        }
        else if(projectID == "project7"){
          $(containingProject).append("<div class='project-description'><p>Monochrome: Black and White Pictures</p></div>"); 
        }
        else{
          $(containingProject).append("<div class='project-description'><p>Solitude: Not alone but pensive</p></div>"); 
        }
    }
    else{
      $(this).show();
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
