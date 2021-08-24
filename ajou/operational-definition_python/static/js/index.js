window.onload = function () {
    document.getElementById("id_category").onchange = function () {
        Change();
    };
};

function Change() {
    var category = document.getElementById("id_category");
    var currentSelect = category.options[category.selectedIndex].value;
    console.log('선택된 카테고리: ' + currentSelect)

    if (currentSelect === "HOI") {
        document.getElementById("id_primary_icd_code").parentElement.style.display = "flex";
        document.getElementById("id_primary_edi_code").parentElement.style.display = "none";
        document.getElementById("id_primary_vaccine_code").parentElement.style.display = "none";

        document.querySelector(".icd-codes").parentElement.style.display = "flex";
        document.querySelector(".edi-codes").parentElement.style.display = "flex";
        document.querySelector(".vaccine-codes").parentElement.style.display = "none";
    }
    if (currentSelect === "VOI") {
        document.getElementById("id_primary_icd_code").parentElement.style.display = "none";
        document.getElementById("id_primary_edi_code").parentElement.style.display = "none";
        document.getElementById("id_primary_vaccine_code").parentElement.style.display = "flex";

        document.querySelector(".icd-codes").parentElement.style.display = "flex";
        document.querySelector(".edi-codes").parentElement.style.display = "flex";
        document.querySelector(".vaccine-codes").parentElement.style.display = "flex";
    }
    if (currentSelect === "Condition") {
        document.getElementById("id_primary_icd_code").parentElement.style.display = "flex";
        document.getElementById("id_primary_edi_code").parentElement.style.display = "none";
        document.getElementById("id_primary_vaccine_code").parentElement.style.display = "none";

        document.querySelector(".icd-codes").parentElement.style.display = "flex";
        document.querySelector(".edi-codes").parentElement.style.display = "flex";
        document.querySelector(".vaccine-codes").parentElement.style.display = "none";
    }
    if (currentSelect === "Drug Exposure") {
        document.getElementById("id_primary_icd_code").parentElement.style.display = "none";
        document.getElementById("id_primary_edi_code").parentElement.style.display = "flex";
        document.getElementById("id_primary_vaccine_code").parentElement.style.display = "none";

        document.querySelector(".icd-codes").parentElement.style.display = "none";
        document.querySelector(".edi-codes").parentElement.style.display = "flex";
        document.querySelector(".vaccine-codes").parentElement.style.display = "none";

    }
}

function addQuery() {
    var queryTextarea = document.getElementById("id_query")

    var categoryValue = document.getElementById("id_category").value
    var ICDCodeValue = document.getElementById("id_primary_icd_code").value

    var queryResult = "select * " + categoryValue + ICDCodeValue

    queryTextarea.value = queryResult
}

function copyQuery() {
    var queryTextarea = document.getElementById("id_query")
    queryTextarea.select();
    queryTextarea.setSelectionRange(0, 99999);

    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}


// Add Element
var addICDCodes = document.querySelector(".add-icd-codes");
var addEDICodes = document.querySelector(".add-edi-codes");
var addVaccineCodes = document.querySelector(".add-vaccine-codes");

var codes = document.getElementsByClassName("codes")

var count = 1

addICDCodes.addEventListener("click", function () {

    $(".icd-codes .input-container:eq(" + count++ + ")").addClass("active")

    // var addInputContainer = document.createElement("div");
    //
    // addInputContainer.innerHTML = "<select class=\"add-icd-code\"></select>\n" +
    //     "                                    <input type=\"number\" class=\"subtract-days\" id=\"icd_subtract_days_01\">\n" +
    //     "                                    <input type=\"number\" class=\"add-days\" id=\"icd_add_days_01\">\n" +
    //     "                                    <div class=\"remove-input-container\" onclick=\"removeParentElement(this)\">\n" +
    //     "                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\n" +
    //     "                                             viewBox=\"0 0 24 24\">\n" +
    //     "                                            <path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n" +
    //     "                                        </svg>\n" +
    //     "                                    </div>"
    //
    // addInputContainer.classList.add("input-container")
    // ICDCodes.appendChild(addInputContainer)
});


addEDICodes.addEventListener("click", function () {

    $(".edi-codes .input-container:eq(" + count++ + ")").addClass("active")

    // var EDICodes = document.querySelector(".edi-codes");
    // var clone = EDICodes.firstElementChild.cloneNode(true);
    // EDICodes.appendChild(clone);
});

addVaccineCodes.addEventListener("click", function () {

    $(".vaccine-codes .input-container:eq(" + count++ + ")").addClass("active")

});

function removeParentElement(child) {
    let parent = child.parentNode;

    parent.parentNode.removeChild(parent);
}

$(".subtract-days").after("<small>일 전</small>")
$(".add-days").after("<small>일 후</small>")

