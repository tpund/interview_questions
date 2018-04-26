window.onload=function() {
    $( ".dragme_1" ).draggable({ containment: ".dragzone_q1", scroll: true });
    $( ".dragme_2" ).draggable({ containment: ".dragzone_q2", scroll: true });
    $( ".dragme_3" ).draggable({ containment: ".dragzone_q3", scroll: true });
    $( ".dragme_4" ).draggable({ containment: ".dragzone_q4", scroll: true });

    //HIDDEN EASTEREGG
    var easterEgg = '';
    $(".dragme_1").click(function(){
        easterEgg += '1';
    });
    $(".dragme_2").click(function(){
        easterEgg += '2';
    });
    $(".dragme_3").click(function(){
        easterEgg += '3';
    });
    $(".dragme_4").click(function(){
        easterEgg += '4';
        if (easterEgg == '314') $('.easterEgg').slideToggle("fast");
    });
    //END EASTEREGG
};