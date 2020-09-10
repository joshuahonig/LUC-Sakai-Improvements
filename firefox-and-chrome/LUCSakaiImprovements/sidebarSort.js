var sidebar = $("#toolMenu > ul:nth-child(1)").children();

var newSidebar = [/* 
    {"title": "Sidebar's Title", "elm": <jQuery element object>}
    */
];

/* Skip the first element; it is the menu collapse button */
for (var x = 1; x < sidebar.length; x++) {
    newSidebar.push({
        "title": $($(sidebar[x]).children()[0]).children()[1].innerText,
        "elm": sidebar[x]
    })
}
newSidebar.sort(function (a, b) {
    var titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase();
    if (titleA < titleB) 
        return -1;
    
    if (titleA > titleB) 
        return 1;
    
    return 0; // default return value
});

/* tabs are sorted; now replace the old tabs */
for (var x = 0; x < newSidebar.length; x++){
$("#toolMenu > ul:nth-child(1)")[0].append(newSidebar[x]['elm'])
}