/* =====================================
   LOGISTICS ACADEMY
   JAVASCRIPT
===================================== */


/* =====================================
   1. CHUYỂN TRANG
===================================== */

const navButtons =
    document.querySelectorAll(".nav-btn");

const pages =
    document.querySelectorAll(".page");


function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    navButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.page === pageName
        ) {

            button.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageName === "progress") {

        updateProgress();

    }

}


navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showPage(button.dataset.page);

        }
    );

});


/* =====================================
   2. NÚT BẮT ĐẦU HỌC
===================================== */

const startLearning =
    document.getElementById("startLearning");


startLearning.addEventListener(
    "click",
    () => {

        showPage("lessons");

    }
);


/* =====================================
   3. DỮ LIỆU BÀI HỌC
===================================== */

const lessons = [

    {
        id: 1,

        title: "PO là gì?",

        short:
            "Purchase Order – Đơn đặt hàng",

        content: `
            <h2>📄 PO – Purchase Order</h2>

            <p>
                PO là viết tắt của
                <strong>Purchase Order</strong>,
                nghĩa là Đơn đặt hàng.
            </p>

            <h3>PO thường có những thông tin gì?</h3>

            <ul>
                <li>Tên người mua</li>
                <li>Tên nhà cung cấp</li>
                <li>Tên nguyên liệu / hàng hóa</li>
                <li>Product Code</li>
                <li>Số lượng</li>
                <li>Đơn giá</li>
                <li>Ngày giao hàng</li>
                <li>Số PO</li>
            </ul>

            <div class="example">
                <strong>Ví dụ thực tế:</strong><br>
                PO No: PO-2026-001<br>
                Product: Alpha Arbutin<br>
                Quantity: 100 kg
            </div>
        `
    },


    {
        id: 2,

        title: "Invoice",

        short:
            "Hóa đơn thương mại",

        content: `
            <h2>📄 Commercial Invoice</h2>

            <p>
                Invoice là hóa đơn thương mại
                do người bán phát hành.
            </p>

            <h3>Cần kiểm tra:</h3>

            <ul>
                <li>Seller</li>
                <li>Buyer</li>
                <li>Invoice No.</li>
                <li>Invoice Date</li>
                <li>Description</li>
                <li>Quantity</li>
                <li>Unit Price</li>
                <li>Total Amount</li>
            </ul>

            <div class="example">
                Invoice dùng để xác định
                giá trị thương mại của lô hàng.
            </div>
        `
    },


    {
        id: 3,

        title: "Packing List",

        short:
            "Phiếu đóng gói",

        content: `
            <h2>📦 Packing List</h2>

            <p>
                Packing List cho biết hàng được
                đóng gói như thế nào.
            </p>

            <h3>Thông tin quan trọng:</h3>

            <ul>
                <li>Số kiện</li>
                <li>Gross Weight</li>
                <li>Net Weight</li>
                <li>Quy cách đóng gói</li>
                <li>Dimensions</li>
                <li>Product Description</li>
            </ul>
        `
    },


    {
        id: 4,

        title: "COA",

        short:
            "Certificate of Analysis",

        content: `
            <h2>🧪 COA – Certificate of Analysis</h2>

            <p>
                COA là chứng nhận phân tích chất lượng
                của một lô sản phẩm.
            </p>

            <h3>Ví dụ chỉ tiêu:</h3>

            <ul>
                <li>Appearance</li>
                <li>Assay</li>
                <li>pH</li>
                <li>Moisture</li>
                <li>Heavy Metals</li>
                <li>Microbiology</li>
            </ul>

            <div class="example">
                Khi nhận nguyên liệu,
                có thể dùng Lot Number để
                đối chiếu COA với hàng thực tế.
            </div>
        `
    },


    {
        id: 5,

        title: "MSDS",

        short:
            "Material Safety Data Sheet",

        content: `
            <h2>⚠️ MSDS</h2>

            <p>
                MSDS cung cấp thông tin về
                an toàn và nguy hiểm của hóa chất
                hoặc nguyên liệu.
            </p>

            <h3>MSDS thường có:</h3>

            <ul>
                <li>Hazard identification</li>
                <li>Composition</li>
                <li>First aid measures</li>
                <li>Fire fighting</li>
                <li>Handling and storage</li>
                <li>Exposure controls</li>
                <li>Transport information</li>
            </ul>
        `
    },


    {
        id: 6,

        title: "ETD / ETA",

        short:
            "Thời gian đi và đến",

        content: `
            <h2>🚢 ETD và ETA</h2>

            <p>
                <strong>ETD</strong> =
                Estimated Time of Departure
            </p>

            <p>
                Nghĩa là thời gian dự kiến
                hàng/phương tiện khởi hành.
            </p>

            <br>

            <p>
                <strong>ETA</strong> =
                Estimated Time of Arrival
            </p>

            <p>
                Nghĩa là thời gian dự kiến
                hàng/phương tiện đến.
            </p>

            <div class="example">
                ETD JKT: 10-Jun-2026<br>
                ETA HCM: 16-Jun-2026
            </div>
        `
    },


    {
        id: 7,

        title: "FOB / CIF",

        short:
            "Điều kiện Incoterms",

        content: `
            <h2>🚢 FOB và CIF</h2>

            <p>
                <strong>FOB</strong>:
                Free On Board.
            </p>

            <p>
                Người bán giao hàng lên tàu
                tại cảng quy định.
            </p>

            <br>

            <p>
                <strong>CIF</strong>:
                Cost, Insurance and Freight.
            </p>

            <p>
                Giá bao gồm chi phí hàng,
                bảo hiểm và cước vận chuyển
                đến cảng đích quy định.
            </p>
        `
    },


    {
        id: 8,

        title: "Quản lý tồn kho",

        short:
            "Nhập – xuất – tồn",

        content: `
            <h2>📊 Quản lý tồn kho</h2>

            <p>
                Công thức cơ bản:
            </p>

            <div class="example">

                Tồn cuối =
                Tồn đầu + Nhập - Xuất

            </div>

            <h3>Ví dụ:</h3>

            <p>
                Tồn đầu: 100 kg
            </p>

            <p>
                Nhập: 50 kg
            </p>

            <p>
                Xuất: 30 kg
            </p>

            <p>
                <strong>
                    Tồn cuối = 120 kg
                </strong>
            </p>
        `
    }

];


/* =====================================
   4. HIỂN THỊ DANH SÁCH BÀI HỌC
===================================== */

const lessonList =
    document.getElementById("lessonList");

const lessonContent =
    document.getElementById("lessonContent");


function renderLessons() {

    lessonList.innerHTML = "";


    lessons.forEach(lesson => {

        const button =
            document.createElement("button");

        button.className =
            "lesson-button";


        button.innerHTML = `
            <strong>
                ${lesson.id}. ${lesson.title}
            </strong>

            <span>
                ${lesson.short}
            </span>
        `;


        button.addEventListener(
            "click",
            () => {

                openLesson(
                    lesson,
                    button
                );

            }
        );


        lessonList.appendChild(button);

    });

}


function openLesson(
    lesson,
    selectedButton
) {

    lessonContent.innerHTML =
        lesson.content;


    document
        .querySelectorAll(".lesson-button")
        .forEach(button => {

            button.classList.remove("active");

        });


    selectedButton.classList.add("active");


    markLessonComplete(lesson.id);

}


renderLessons();


/* =====================================
   5. LƯU BÀI ĐÃ HỌC
===================================== */

let completedLessons =
    JSON.parse(
        localStorage.getItem(
            "completedLessons"
        )
    ) || [];


function markLessonComplete(id) {

    if (
        !completedLessons.includes(id)
    ) {

        completedLessons.push(id);

        localStorage.setItem(
            "completedLessons",
            JSON.stringify(
                completedLessons
            )
        );

    }

}


/* =====================================
   6. QUIZ
===================================== */

const quizQuestions = [

    {
        question:
            "PO là viết tắt của từ nào?",

        answers: [

            "Purchase Order",

            "Product Order",

            "Packing Order",

            "Payment Order"

        ],

        correct: 0

    },


    {
        question:
            "COA là tài liệu gì?",

        answers: [

            "Chứng nhận xuất xứ",

            "Chứng nhận phân tích",

            "Hóa đơn",

            "Phiếu đóng gói"

        ],

        correct: 1

    },


    {
        question:
            "ETA nghĩa là gì?",

        answers: [

            "Thời gian khởi hành dự kiến",

            "Thời gian giao hàng thực tế",

            "Thời gian đến dự kiến",

            "Ngày phát hành Invoice"

        ],

        correct: 2

    },


    {
        question:
            "Packing List dùng để thể hiện điều gì?",

        answers: [

            "Thông tin đóng gói hàng",

            "Thuế nhập khẩu",

            "Tỷ giá",

            "Hợp đồng lao động"

        ],

        correct: 0

    },


    {
        question:
            "Công thức tồn cuối là gì?",

        answers: [

            "Tồn đầu - Nhập + Xuất",

            "Tồn đầu + Nhập - Xuất",

            "Nhập + Xuất",

            "Tồn đầu + Xuất"

        ],

        correct: 1

    }

];


let currentQuestion = 0;

let quizScore = 0;

let selectedAnswer = false;


const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const question =
    document.getElementById(
        "question"
    );

const answers =
    document.getElementById(
        "answers"
    );

const nextQuestion =
    document.getElementById(
        "nextQuestion"
    );

const quizResult =
    document.getElementById(
        "quizResult"
    );

const quizScoreElement =
    document.getElementById(
        "quizScore"
    );


function loadQuestion() {

    selectedAnswer = false;

    nextQuestion.disabled = true;

    quizResult.textContent = "";


    const current =
        quizQuestions[
            currentQuestion
        ];


    questionNumber.textContent =
        `Câu ${currentQuestion + 1}
         / ${quizQuestions.length}`;


    question.textContent =
        current.question;


    answers.innerHTML = "";


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer) {

        return;

    }


    selectedAnswer = true;

    const current =
        quizQuestions[
            currentQuestion
        ];


    const allAnswers =
        document.querySelectorAll(
            ".answer"
        );


    allAnswers.forEach(
        button => {

            button.disabled = true;

        }
    );


    if (
        selectedIndex ===
        current.correct
    ) {

        selectedButton
            .classList
            .add("correct");


        quizScore++;

        quizResult.textContent =
            "✅ Chính xác!";

    } else {

        selectedButton
            .classList
            .add("wrong");


        allAnswers[
            current.correct
        ]
        .classList
        .add("correct");


        quizResult.textContent =
            "❌ Chưa đúng. Đáp án đúng đã được đánh dấu.";

    }


    quizScoreElement.textContent =
        quizScore;


    nextQuestion.disabled = false;

}


nextQuestion.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuestion();

        }

    }
);


/* =====================================
   7. KẾT THÚC QUIZ
===================================== */

function finishQuiz() {

    questionNumber.textContent =
        "🎉 Hoàn thành";


    question.textContent =
        `Bạn đạt ${quizScore}/${quizQuestions.length} điểm.`;


    answers.innerHTML = "";


    if (
        quizScore ===
        quizQuestions.length
    ) {

        quizResult.textContent =
            "🏆 Xuất sắc! Bạn đã nắm khá chắc kiến thức cơ bản.";

    } else if (
        quizScore >= 3
    ) {

        quizResult.textContent =
            "👍 Khá tốt! Hãy tiếp tục học thêm.";

    } else {

        quizResult.textContent =
            "📚 Bạn nên học lại các bài cơ bản.";

    }


    nextQuestion.textContent =
        "Làm lại Quiz";


    nextQuestion.disabled = false;


    nextQuestion.onclick =
        restartQuiz;

}


/* =====================================
   8. LÀM LẠI QUIZ
===================================== */

function restartQuiz() {

    currentQuestion = 0;

    quizScore = 0;

    quizScoreElement.textContent =
        "0";


    nextQuestion.textContent =
        "Câu tiếp theo →";


    nextQuestion.onclick = null;


    loadQuestion();

}


loadQuestion();


/* =====================================
   9. TIẾN ĐỘ
===================================== */

function updateProgress() {

    const total =
        lessons.length;


    const completed =
        completedLessons.length;


    const percent =
        Math.round(
            completed /
            total *
            100
        );


    document.getElementById(
        "completedCount"
    ).textContent =
        completed;


    document.getElementById(
        "progressBar"
    ).style.width =
        percent + "%";


    document.getElementById(
        "lessonStat"
    ).textContent =
        completed;


    document.getElementById(
        "quizStat"
    ).textContent =
        quizScore;


    let level =
        "Người mới";


    if (completed >= 3) {

        level =
            "Đang học";

    }


    if (completed >= 6) {

        level =
            "Khá";

    }


    if (completed === total) {

        level =
            "Logistics Pro";

    }


    document.getElementById(
        "levelStat"
    ).textContent =
        level;


    document.getElementById(
        "progressText"
    ).textContent =
        completed === 0
            ? "Bạn chưa hoàn thành bài học nào."
            : `Bạn đã hoàn thành ${completed}/${total} bài học (${percent}%).`;

}