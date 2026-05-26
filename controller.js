import {model} from "./model.js";
import {view} from "./view.js";
export const controller = {
    init()  {

        let assignmentDiv = document.getElementById("assignments");
        let examDiv = document.getElementById("exam");
        let attendanceDiv = document.getElementById("attendance");

        view.createHeadline(examDiv, "Prüfung")
        view.createHeadline(attendanceDiv, "Anwesenheit");


        for (let i = 0; i < 8; i++) {
            let input = view.creatingInput(assignmentDiv, "exercise", i);

            input.addEventListener("change", (e) => {
                model.valueExercise(i, parseInt(input.value));
                this.update();
            });
        }

        //exam
        let examInput = view.creatingInput(examDiv, "exam");

        examInput.addEventListener("change", (e) => {
            model.valueExam(parseInt(examInput.value));
            this.update();
        })

        //attendance
        let attendanceInput = view.creatingInput(attendanceDiv, "attendance");

        attendanceInput.addEventListener("change", (e) => {
            model.valueAttendance(parseInt(attendanceInput.value));
            this.update();
        })



    },
        update() {
            let grade = model.finalGrade();
            view.finalGrade(grade);

            let inputs = document.querySelectorAll(".exercise");

            let worstIndex = model.exercise.indexOf(Math.min(...model.exercise));

            inputs.forEach((input, index) => {
                view.clearHighlight(input);

                if (model.exercise[index] < 50) {
                    view.highlightNegative(input);
                }



                if (index === worstIndex) {
                    view.highlightStriked(input);
                }
            });

            let attendanceInput = document.querySelector(".attendance");
            view.clearHighlight(attendanceInput);
            if (model.attendance <= 80) {
                view.highlightNegative(attendanceInput);
            }

            let examInput = document.querySelector(".exam");
            view.clearHighlight(examInput);
            if (model.exam < 50) {
                view.highlightNegative(examInput);
            }
        },


};

controller.init();