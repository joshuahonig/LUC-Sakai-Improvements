/* First, color-code all the buttons at the top of the page */
var courseBtns = $(".link-container");
/* start at 1 because button 0 is the home button */
for (var x = 1; x < courseBtns.length; x++){
    var courseClr = randomColor({seed: courseBtns[x].title, luminosity: 'dark'});
    /* only change the button color if the course isn't selected */
    if (!($(courseBtns[x].parentElement).hasClass("is-selected"))){
        /* this course is not selected */
        $(courseBtns[x]).css('background-color', courseClr);
    }
    else {
        /* this course is selected; set the header color */
        $('#topnav_container').css('background-color', courseClr);
        $(".Mrphs-headerLogo").css('background-color', courseClr);
    }
}
