// ---------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- GENERAL ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathInitContent = "reports/init-content.html"

function fetchContent(url, sourceId, targetId) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(xhr.responseText, 'text/html');
            document.getElementById(targetId).innerHTML = doc.getElementById(sourceId).innerHTML;
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function changeCurrentReport(src) {
    handleLabChange(src)
}

function handleLabChange(value) {
    let sourceId = value + "-sidebar"
    fetchContent(pathInitContent, sourceId, "side-btn-wrapper");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB1 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab1 = "reports/lab1.html"

function lab1LoadFirstArticle() {
    fetchContent(pathLab1, "p1", "output");
}

function lab1LoadSecondArticle() {
    fetchContent(pathLab1, "p2", "output");
}

function lab1LoadThirdArticle() {
    fetchContent(pathLab1, "p3-btn", "side-btn-wrapper");
}

function lab1LoadThirdArticlePart1() {
    fetchContent(pathLab1, "p3-1", "output");
}

function lab1LoadThirdArticlePart2() {
    fetchContent(pathLab1, "p3-2", "output");
}

function lab1LoadThirdArticlePart3() {
    fetchContent(pathLab1, "p3-3", "output");
}

function lab1BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab1-sidebar", "side-btn-wrapper");
}


function lab1LoadFourthArticle() {
    fetchContent(pathLab1, "lab1-conclusion", "output");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB2 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab2 = "reports/lab2.html"

function lab2LoadFirstArticle() {
    fetchContent(pathLab2, "p1", "output");
}

function lab2LoadSecondArticle() {
    fetchContent(pathLab2, "p2", "output");
}

function lab2LoadThirdArticle() {
    fetchContent(pathLab2, "p3-btn", "side-btn-wrapper");
}

function lab2LoadThirdArticlePart1() {
    fetchContent(pathLab2, "p3-1", "output");
}

function lab2LoadThirdArticlePart2() {
    fetchContent(pathLab2, "p3-2", "output");
}

function lab2LoadThirdArticlePart3() {
    fetchContent(pathLab2, "p3-3", "output");
}

function lab2LoadFourthArticlePart4() {
    fetchContent(pathLab2, "p3-4", "output");
}

function lab2BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab2-sidebar", "side-btn-wrapper");
}

function lab2LoadFourthArticle() {
    fetchContent(pathLab2, "p4", "output");
}

function lab2LoadFifthArticle() {
    fetchContent(pathLab2, "lab2-conclusion", "output");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB3 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab3 = "reports/lab3.html"

function lab3LoadFirstArticle() {
    fetchContent(pathLab3, "p1", "output");
}

function lab3LoadSecondArticle() {
    fetchContent(pathLab3, "p2", "output")
}

function lab3LoadThirdArticle() {
    fetchContent(pathLab3, "p3-btn", "side-btn-wrapper");
}

function lab3LoadThirdArticlePart1() {
    fetchContent(pathLab3, "p3-1", "output");
}

function lab3LoadThirdArticlePart2() {
    fetchContent(pathLab3, "p3-2", "output");
}

function lab3LoadThirdArticlePart3() {
    fetchContent(pathLab3, "p3-3", "output");
}

function lab3LoadFourthArticlePart4() {
    fetchContent(pathLab3, "p3-4", "output");
}

function lab3BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab3-sidebar", "side-btn-wrapper");
}

function lab3LoadFourthArticle() {
    fetchContent(pathLab3, "p4-sidebar", "side-btn-wrapper")
}

function lab3LoadFourthArticlePart1() {
    fetchContent(pathLab3, "p4-1", "output");
}

function lab3LoadFourthArticlePart2() {
    fetchContent(pathLab3, "p4-2", "output");
}

function lab3LoadFourthArticlePart3() {
    fetchContent(pathLab3, "p4-3", "output");
}

function lab3LoadFifthArticle() {
    fetchContent(pathLab3, "lab3-conclusion", "output");
}


// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB4 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab4 = "reports/lab4.html"

function lab4LoadFirstArticle() {
    fetchContent(pathLab4, "p1", "output");
}

function lab4LoadSecondArticle() {
    fetchContent(pathLab4, "p2-btn", "side-btn-wrapper");
}

function lab4LoadSecondArticlePart1() {
    fetchContent(pathLab4, "p2-1", "output");
}

function lab4LoadSecondArticlePart2() {
    fetchContent(pathLab4, "p2-2", "output");
}

function lab4LoadSecondArticlePart3() {
    fetchContent(pathLab4, "p2-3", "output");
}

function lab4BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab4-sidebar", "side-btn-wrapper");
}


function lab4LoadThirdArticle() {
    fetchContent(pathLab4, "lab4-conclusion", "output");
}


// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB5 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab5 = "reports/lab5.html"

function lab5LoadFirstArticle() {
    fetchContent(pathLab5, "p1", "output");
}

function lab5LoadSecondArticle() {
    fetchContent(pathLab5, "p2", "output");
}

function lab5LoadThirdArticle() {
    fetchContent(pathLab5, "p3", "output");
}

function lab5LoadFourthArticle() {
    fetchContent(pathLab5, "lab5-conclusion", "output");
}


// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB5.1 -------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab51 = "reports/lab5.1.html"

function lab51LoadFirstArticle() {
    fetchContent(pathLab51, "p1", "output");
}

function lab51LoadSecondArticle() {
    fetchContent(pathLab51, "p2", "output")
}

function lab51LoadThirdArticle() {
    fetchContent(pathLab51, "p3", "output");
}


function lab51LoadFourthArticle() {
    fetchContent(pathLab51, "p4", "output")
}

function lab51LoadFifthArticle() {
    fetchContent(pathLab51, "p5", "output")
}

function lab51LoadSixthArticle() {
    fetchContent(pathLab51, "p6", "output")
}

function lab51LoadSeventhArticle() {
    fetchContent(pathLab51, "p7", "output")
}

function lab51LoadConclusions() {
    fetchContent(pathLab51, "lab5.1-conclusion", "output")
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB6 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab6 = "reports/lab6.html"

function lab6LoadFirstArticle() {
    fetchContent(pathLab6, "p1", "output");
}

function lab6LoadSecondArticle() {
    fetchContent(pathLab6, "p2", "output")
}

function lab6LoadThirdArticle() {
    fetchContent(pathLab6, "p3", "output");
}


function lab6LoadFourthArticle() {
    fetchContent(pathLab6, "p4", "output")
}

function lab6LoadFifthArticle() {
    fetchContent(pathLab6, "p5", "output")
}

function lab6LoadSixthArticle() {
    fetchContent(pathLab6, "p6", "output")
}

function lab6LoadSeventhArticle() {
    fetchContent(pathLab6, "p7", "output")
}

function lab6LoadEighthArticle() {
    fetchContent(pathLab6, "p8", "output")
}

function lab6LoadConclusions() {
    fetchContent(pathLab6, "lab6-conclusion", "output")
}


// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB7 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab7 = "reports/lab7.html"

function lab7LoadFirstArticle() {
    fetchContent(pathLab7, "p1", "output");
}

function lab7LoadSecondArticle() {
    fetchContent(pathLab7, "p2-btn", "side-btn-wrapper");
}

function lab7LoadSecondArticlePart1() {
    fetchContent(pathLab7, "p2-1", "output");
}

function lab7LoadSecondArticlePart2() {
    fetchContent(pathLab7, "p2-2", "output");
}

function lab7LoadSecondArticlePart3() {
    fetchContent(pathLab7, "p2-3", "output");
}

function lab7LoadThirdArticle() {
    fetchContent(pathLab7, "p3-btn", "side-btn-wrapper");
}

function lab7LoadThirdArticlePart1() {
    fetchContent(pathLab7, "p3-1", "output");
}

function lab7LoadThirdArticlePart2() {
    fetchContent(pathLab7, "p3-2", "output");
}

function lab7LoadThirdArticlePart3() {
    fetchContent(pathLab7, "p3-3", "output");
}

function lab7BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab7-sidebar", "side-btn-wrapper");
}

function lab7LoadConclusions() {
    fetchContent(pathLab7, "lab7-conclusion", "output");
}



// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB8 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab8 = "reports/lab8.html"

function lab8LoadFirstArticle() {
    fetchContent(pathLab8, "p1", "output");
}

function lab8LoadSecondArticle() {
    fetchContent(pathLab8, "p2-btn", "side-btn-wrapper");
}

function lab8LoadSecondArticlePart1() {
    fetchContent(pathLab8, "p2-1", "output");
}

function lab8LoadSecondArticlePart2() {
    fetchContent(pathLab8, "p2-2", "output");
}

function lab8LoadSecondArticlePart3() {
    fetchContent(pathLab8, "p2-3", "output");
}

function lab8LoadThirdArticle() {
    fetchContent(pathLab8, "p3-btn", "side-btn-wrapper");
}

function lab8LoadThirdArticlePart1() {
    fetchContent(pathLab8, "p3-1", "output");
}

function lab8LoadThirdArticlePart2() {
    fetchContent(pathLab8, "p3-2", "output");
}

function lab8LoadThirdArticlePart3() {
    fetchContent(pathLab8, "p3-3", "output");
}

function lab8BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab8-sidebar", "side-btn-wrapper");
}

function lab8LoadConclusions() {
    fetchContent(pathLab8, "lab8-conclusion", "output");
}


// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB9 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab9 = "reports/lab9.html"

function lab9LoadFirstArticle() {
    fetchContent(pathLab9, "p1", "output");
}

function lab9LoadSecondArticle() {
    fetchContent(pathLab9, "p2-btn", "side-btn-wrapper");
}

function lab9LoadSecondArticlePart1() {
    fetchContent(pathLab9, "p2-1", "output");
}

function lab9LoadSecondArticlePart2() {
    fetchContent(pathLab9, "p2-2", "output");
}

function lab9BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab9-sidebar", "side-btn-wrapper");
}

function lab9LoadConclusions() {
    fetchContent(pathLab9, "lab9-conclusion", "output");
}