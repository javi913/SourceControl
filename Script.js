    $(function() {

        $("#grades").keyup(function() {

            var grades = $("#grades").val().trim();
            grades = grades.split(/\s+/);
            var message = '';
            
            for (var i in grades) {

                var test_grade = grades[i];
                var grade = '';

                console.log('grades.length ' + grades.length);
                console.log('test_grade.length ' + test_grade.length);

                if ((grades.length == 1) && (test_grade.length == 0)) {
                    
                }
                else if (isNaN(test_grade) && (test_grade.length > 0)) {
                    message = "<strong>ERROR</strong> - Please only enter numbers.";
                }
                else if (test_grade < 0) {
                    message = "<strong>ERROR</strong> - Valid grades are 0 - 100.";
                }
                else if ((test_grade < 60) && (test_grade >= 0)) {
                    grade = "F";
                }
                else if (test_grade < 70) {
                    grade = "D";
                }
                else if (test_grade < 80) {
                    grade = "C";
                }
                else if (test_grade < 90) {
                    grade = "B";
                }
                else if (test_grade <= 100) {
                    grade = "A";
                }
                else if (test_grade > 100) {
                    message = "<strong>ERROR</strong> - Valid grades are 0 - 100.";
                    break;
                }
                message += grade + " ";

            }

            $("#calculated-grades").html(message);

        });

    });
    