
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        $(".tablinks").css("text-align","left");
    }
    $('.tabcontent').hide();

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    //evt.currentTarget.className += " active";
    $("."+cityName+"_tablinks").addClass('active');
    var urlString = 'url("assets/images/'+ cityName +'-background.jpg")';
    document.getElementById("homeheaderbar").style.backgroundImage =  urlString;
    $(".tablinks.active").css("text-align","right");
}

function resizepage() {
    //HFheight=$("header").height() + $("footer").height();
    //HFheight = 83+$("footer").height();
    //HHBheight = $(window).height() - HFheight;
	Fslheight = $(window).height() + 36 -98;
    HHBheight = $(window).height() - 98;
	HHBheightMB = $(window).height() - 125;
    HHBwidth=$(window).width();
    HHBCOLwidth=(HHBwidth/2)-2;
    HHBCOLheight=(HHBheight/4)-1;
    teamsidebarheight=$(".content_bar").height()-6;
    businesssidebarheight=$(".content_bar").height()-6;
    //alert(HHBheight);
	if(HHBwidth > 768){
		$(".home_left_col").width(HHBCOLwidth);
    	$(".home_right_col").width(HHBCOLwidth);
    	$(".home_left_col div.tab button").height(HHBCOLheight);
		$(".header-bar").height(HHBheight);
	}else {
		$("home_left_col").css("width","100%");
		$(".home_right_col").css("width","100%");
		$(".home_left_col div.tab button").css("height","auto");
		$(".header-bar").css("height","auto");
		$(".contact-bar").height(HHBheightMB);
		$(".new-full-height").height(HHBheightMB);
	}
    $(".teamsidebar").height(Fslheight);
    $(".businesssidebar").height(Fslheight);
}
$(window).resize(function (e) {
    resizepage();
});
$(document).ready(function () {
    resizepage();
    openCity('click', 'focus');
    setTimeout(function(){ resizepage();},1000);
    setTimeout(function(){ resizepage();},2000);
    setTimeout(function(){ resizepage();},3000);
    setTimeout(function(){ $('.focus_tablinks').addClass('active');},300);
});
