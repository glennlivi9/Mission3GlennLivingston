$("#calculator").click(function () {
    var iAssignWeight = .55;
    var iGroupWeight = .05;
    var iQuizWeight = .1;
    var iExamWeight = .2;
    var iIntexWeight = .1;
    var letterGrade = "";

    //bring in input values

    var iAssignPct = iAssignWeight * $("#assign").val();
    var iGroupPct = iGroupWeight * $("#group").val();
    var iQuizPct = iQuizWeight * $("#quiz").val();
    var iExamPct = iExamWeight * $("#exam").val();
    var iIntexPct = iIntexWeight * $("#intex").val();

    var totalPct = ((iAssignPct + iGroupPct + iQuizPct + iExamPct + iIntexPct));
    var totalPctRounded = totalPct.toFixed(2);

    if (totalPct > 94) {
        letterGrade = "A"
    }
    else if (totalPct > 90) {
        letterGrade = "A-"
    }
    else if (totalPct > 87) {
        letterGrade = "B+"
    }
    else if (totalPct > 83) {
        letterGrade = "B"
    }
    else if (totalPct > 80) {
        letterGrade = "B-"
    }
    else if (totalPct > 77) {
        letterGrade = "C+"
    }
    else if (totalPct > 73) {
        letterGrade = "C"
    }
    else if (totalPct > 70) {
        letterGrade = "C-"
    }
    else if (totalPct > 67) {
        letterGrade = "D+"
    }
    else if (totalPct > 63) {
        letterGrade = "D"
    } else if (totalPct > 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "F"
    }

    alert("Your final grade is " + totalPctRounded + "% with a letter grade of " + letterGrade )

})
