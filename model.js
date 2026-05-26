"use strict";

let exercise = document.getElementById("exercise");
let exam = document.getElementById("exam");
let attendance = document.getElementById("attendance");
export let model = {
    exercise : [0, 0, 0, 0, 0, 0, 0, 0],
    exam: 0,
    attendance: 0,

    isPositive(points) {
        return points > 50;
    },

    valueExercise(index, value){
        this.exercise[index] = value;
    },

    valueExam(value){
        this.exam = value;
    },

    valueAttendance(value){
        this.attendance = value;
    },

    exerciseGrading (exercisePoints) {
    return exercisePoints > 50;
},

    exerciseAverage(){
        //finding worst exercise
        let worst = this.exercise[0];
        for (let i = 1; i < this.exercise.length; i++) {
            if (this.exercise[i] < worst) {
                worst = this.exercise[i];
            }
        }

        //calculate sum of all exercises
        let sum = 0;
        for (let i = 0; i < this.exercise.length; i++) {
            sum += this.exercise[i];
        }

        //remove worst exercise
        sum -= worst;

        //calculate average of remaining exercises
        return sum/7;
    },

    ExercisesPositive() {
        let positiveCount = 0;

        for (let i = 0; i < this.exercise.length; i++) {
            if (this.exercise[i] > 50) {
                positiveCount++;
            }
        }

        return positiveCount >= 6; //because 75% of 8 are 6
    },

    finalPercentage() {
        let exerciseAvg = this.exerciseAverage();
        return ((exerciseAvg * 0.6) + (this.exam * 0.4));
    },

    finalGrade() {
        if (this.attendance <= 80) {
            return "Nicht Genügend"
        }
        let percent = this.finalPercentage();

        if (percent <= 50) return "Nicht Genügend";
        if (percent <= 61) return "Genügend";
        if (percent <= 74) return "Befriedigend";
        if (percent <= 86) return "Gut";
        if (percent <= 100) return "Sehr gut";

        return "Ungültige Eingabe";

    }
}