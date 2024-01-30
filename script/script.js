// datepicker
$("#inputDate").datepicker({});

$("#inputDate-2").datepicker({});

// Chart JS

$(function () {
    $(".chart-1").easyPieChart({
        size: 78,
        barColor: "#F14C4C",
        scaleLength: 0,
        lineWidth: 5,
        trackColor: "#EEE",
        lineCap: "circle",
        animate: 2000,
    });
});

$(function () {
    $(".chart-2").easyPieChart({
        size: 78,
        barColor: "#0F6CD9",
        scaleLength: 0,
        lineWidth: 5,
        trackColor: "#F14C4C",
        lineCap: "circle",
        animate: 2000,
    });
});

// Quill Editor
var toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    ["clean"], // remove formatting button
];

Quill.register("modules/counter", function (quill, options) {
    var container = document.querySelector(options.container);
    quill.on("text-change", function () {
        var text = quill.getText();
        if (options.unit === "word") {
            container.innerText = text.split(/\s+/).length + " words";
        } else {
            container.innerText = text.length + " characters";
        }
    });
});
var quill = new Quill("#editor-container", {
    modules: {
        toolbar: toolbarOptions,
        counter: {
            container: "#counter",
            unit: "character",
        },
    },
    theme: "snow",
});
var form = document.querySelector("form");
form.onsubmit = function () {
    // Populate hidden form on submit
    var about = document.querySelector("input[name=box]");
    about.value = JSON.stringify(quill.getContents());

    console.log("field length: " + about.value.length + " ", $(form).serialize(), $(form).serializeArray());

    // No back end to actually submit to!
    alert("Open the console to see the submit data!");
    return false;
};
