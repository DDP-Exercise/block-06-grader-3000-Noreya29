"use strict";

export const view = {
    createHeadline(parent, text) {
        let headline = document.createElement("h3");
        headline.textContent = text;
        parent.appendChild(headline);
    },


    creatingInput(parent, className, index) {
        const input = document.createElement("input");

        input.type = "number";
        input.min = 0;
        input.max = 100;
        input.value = 0;
        input.classList.add(className);

        if (index !== undefined) {
            input.dataset.index = index;
        }

        parent.appendChild(input);
        return input;
    },

    finalGrade(text) {
        document.getElementById("grade").textContent ="Die endgültige Note ist: " + text;
    },

    highlightNegative(input) {
        input.classList.add("negative");
    },

    highlightStriked(input) {
        input.classList.add("striked");
    },

    clearHighlight(input) {
        input.classList.remove("negative", "striked");
    }
}
