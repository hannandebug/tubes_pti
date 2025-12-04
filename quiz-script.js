const questions = [
    {
        id: 1,
        question: "Apa yang dimaksud dengan hoax di media sosial?",
        options: [
            "Informasi yang sedang viral",
            "Berita palsu yang disebarkan untuk menyesatkan publik",
            "Konten yang lucu dan menghibur",
            "Informasi dari sumber terpercaya"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Hoax adalah informasi palsu atau berita bohong yang disebarkan dengan tujuan menyesatkan publik, sering tanpa verifikasi terlebih dahulu."
    },
    {
        id: 2,
        question: "Manakah yang termasuk dampak dari perilaku tidak etis di media sosial? (Pilih lebih dari satu jawaban yang benar)",
        options: [
            "Sanksi hukum dan reputasi buruk",
            "Mendapat banyak followers",
            "Kehilangan pekerjaan atau peluang karir",
            "Menjadi lebih populer"
        ],
        correctAnswer: [0, 2],
        multipleAnswers: true,
        explanation: "Perilaku tidak etis dapat menyebabkan sanksi hukum (UU ITE), rusaknya reputasi, dan kehilangan kesempatan kerja karena banyak perusahaan yang melacak jejak digital karyawan."
    },
    {
        id: 3,
        question: "Apa itu oversharing di media sosial?",
        options: [
            "Berbagi konten edukatif secara berlebihan",
            "Membagikan informasi pribadi secara berlebihan tanpa mempertimbangkan privasi",
            "Memberikan banyak like kepada orang lain",
            "Mengikuti banyak akun media sosial"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Oversharing adalah perilaku membagikan informasi pribadi secara berlebihan di media sosial tanpa mempertimbangkan privasi dan dampaknya terhadap diri sendiri maupun orang lain."
    },
    {
        id: 4,
        question: "Mengapa penting untuk memverifikasi informasi sebelum membagikannya di media sosial?",
        options: [
            "Agar terlihat lebih pintar",
            "Untuk mendapat banyak like",
            "Untuk mencegah penyebaran hoax dan misinformasi",
            "Supaya tidak ketinggalan berita viral"
        ],
        correctAnswer: [2],
        multipleAnswers: false,
        explanation: "Memverifikasi informasi penting untuk mencegah penyebaran hoax dan misinformasi yang dapat menyesatkan publik dan menimbulkan dampak negatif di masyarakat."
    },
    {
        id: 5,
        question: "Apa yang dimaksud dengan doxing?",
        options: [
            "Memberikan dokumentasi lengkap pada postingan",
            "Mencari dan menyebarkan informasi pribadi seseorang tanpa izin",
            "Memblokir akun yang tidak disukai",
            "Menghapus konten yang tidak pantas"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Doxing adalah tindakan mencari, mengumpulkan, dan menyebarkan informasi pribadi seseorang di internet tanpa izin dengan tujuan mengancam, mempermalukan, atau membahayakan korban."
    },
    {
        id: 6,
        question: "Manakah yang termasuk tips bermedia sosial yang baik? (Pilih lebih dari satu jawaban yang benar)",
        options: [
            "Menggunakan bahasa yang sopan dan menghindari ujaran kebencian",
            "Membagikan semua informasi pribadi",
            "Membatasi dan melindungi informasi pribadi",
            "Menyebarkan berita tanpa cek kebenarannya"
        ],
        correctAnswer: [0, 2],
        multipleAnswers: true,
        explanation: "Tips bermedia sosial yang baik termasuk menggunakan bahasa sopan, menghindari ujaran kebencian, serta membatasi dan melindungi informasi pribadi agar tidak disalahgunakan."
    },
    {
        id: 7,
        question: "Apa yang dimaksud dengan 'faker' atau akun palsu di media sosial?",
        options: [
            "Akun yang jarang digunakan",
            "Identitas fiktif untuk menyamar atau menipu",
            "Akun bisnis resmi",
            "Akun yang diverifikasi"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Faker atau akun palsu adalah identitas fiktif yang dibuat di media sosial dengan tujuan menyamar, menipu, atau melakukan aktivitas tidak etis seperti penipuan atau manipulasi opini."
    },
    {
        id: 8,
        question: "Mengapa hate speech berbahaya di media sosial?",
        options: [
            "Karena dapat memicu konflik dan diskriminasi",
            "Karena membuat orang terkenal",
            "Karena menarik perhatian banyak orang",
            "Karena meningkatkan engagement"
        ],
        correctAnswer: [0],
        multipleAnswers: false,
        explanation: "Hate speech atau ujaran kebencian berbahaya karena dapat menyebar cepat di media sosial, memicu konflik sosial, dan menciptakan diskriminasi terhadap individu atau kelompok tertentu."
    },
    {
        id: 9,
        question: "Apa hubungan antara etika bermedia sosial dan digital literacy?",
        options: [
            "Tidak ada hubungannya",
            "Etika bermedia sosial berkaitan erat dengan kesadaran digital",
            "Digital literacy hanya tentang teknologi",
            "Keduanya tidak penting"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Etika bermedia sosial berkaitan erat dengan digital literacy atau kesadaran digital, yaitu kemampuan untuk menggunakan teknologi digital secara bertanggung jawab, kritis, dan etis."
    },
    {
        id: 10,
        question: "Manakah contoh pelanggaran etika di media sosial?",
        options: [
            "Membagikan konten edukatif",
            "Menyebarkan hoax dan ujaran kebencian",
            "Memberikan komentar positif",
            "Mengikuti akun inspiratif"
        ],
        correctAnswer: [1],
        multipleAnswers: false,
        explanation: "Menyebarkan hoax dan ujaran kebencian adalah pelanggaran etika serius di media sosial yang dapat merugikan banyak pihak dan melanggar hukum (UU ITE)."
    }
];

let currentQuestion = 0;
let selectedAnswers = [];
let showExplanation = false;
let score = 0;

// ========== RENDER PERTAMA KALI (FULL RENDER) ==========
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    const currentQ = questions[currentQuestion];
    
    let html = `
        <div class="quiz-wrapper">
            <div class="quiz-card">
                <div class="quiz-header">
                    <h1>E-THICS Quiz</h1>
                    <p>Uji Pengetahuan Etika Bermedia Sosial Anda</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                        <span>Pertanyaan <span id="current-q-num">${currentQuestion + 1}</span> dari ${questions.length}</span>
                        <span>Skor: <span id="score-display">${score}</span></span>
                    </div>
                    <div class="quiz-progress">
                        <div class="quiz-progress-bar" id="progress-bar" style="width: ${((currentQuestion + 1) / questions.length) * 100}%"></div>
                    </div>
                </div>
                <div class="quiz-body" id="quiz-body">
                    <!-- Content akan di-update di sini -->
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    updateQuizBody();
}

// ========== UPDATE HANYA BODY (TIDAK FULL RE-RENDER) ==========
function updateQuizBody() {
    const quizBody = document.getElementById('quiz-body');
    const currentQ = questions[currentQuestion];
    
    let html = `
        ${currentQ.multipleAnswers ? `
            <div class="alert-multiple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span><strong>Pilih lebih dari satu jawaban yang benar!</strong></span>
            </div>
        ` : ''}
        
        <div class="question-number">Pertanyaan ${currentQuestion + 1}</div>
        <h2 class="question-text">${currentQ.question}</h2>
        
        <div class="options-container" id="options-container">
            ${renderOptions()}
        </div>
        
        <div id="explanation-container"></div>
        
        <div class="quiz-buttons" id="quiz-buttons">
            ${renderButtons()}
        </div>
    `;
    
    quizBody.innerHTML = html;
}

// ========== RENDER OPTIONS ==========
function renderOptions() {
    const currentQ = questions[currentQuestion];
    return currentQ.options.map((option, index) => {
        const isSelected = selectedAnswers.includes(index);
        const isCorrect = currentQ.correctAnswer.includes(index);
        let classes = 'option-btn';
        
        if (showExplanation) {
            if (isCorrect) classes += ' correct';
            else if (isSelected) classes += ' incorrect';
        } else if (isSelected) {
            classes += ' selected';
        }
        
        return `
            <button class="${classes}" 
                    data-index="${index}"
                    ${showExplanation ? 'disabled' : ''}>
                <div class="option-label">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span>${option}</span>
                </div>
                ${showExplanation && isCorrect ? `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                ` : showExplanation && isSelected ? `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f44336" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                ` : ''}
            </button>
        `;
    }).join('');
}

// ========== RENDER BUTTONS ==========
function renderButtons() {
    if (!showExplanation) {
        return `
            <button class="btn-submit" id="btn-submit" ${selectedAnswers.length === 0 ? 'disabled' : ''}>
                Submit Jawaban
            </button>
        `;
    } else {
        return `
            <button class="btn-next" id="btn-next">
                ${currentQuestion < questions.length - 1 ? 'Pertanyaan Selanjutnya' : 'Lihat Hasil'}
            </button>
        `;
    }
}

// ========== UPDATE OPTIONS SAJA (SMOOTH) ==========
function updateOptionsOnly() {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = renderOptions();
    attachOptionListeners();
    
    // Update button state
    const btnSubmit = document.getElementById('btn-submit');
    if (btnSubmit) {
        btnSubmit.disabled = selectedAnswers.length === 0;
    }
}

// ========== ATTACH EVENT LISTENERS ==========
function attachOptionListeners() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!showExplanation) {
                const index = parseInt(this.getAttribute('data-index'));
                selectAnswer(index);
            }
        });
    });
}

function attachSubmitListener() {
    const btnSubmit = document.getElementById('btn-submit');
    if (btnSubmit) {
        btnSubmit.addEventListener('click', submitAnswer);
    }
}

function attachNextListener() {
    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
        btnNext.addEventListener('click', nextQuestion);
    }
}

// ========== SELECT ANSWER (HANYA UPDATE OPTIONS) ==========
function selectAnswer(index) {
    const currentQ = questions[currentQuestion];
    
    if (currentQ.multipleAnswers) {
        if (selectedAnswers.includes(index)) {
            selectedAnswers = selectedAnswers.filter(i => i !== index);
        } else {
            selectedAnswers.push(index);
        }
    } else {
        selectedAnswers = [index];
    }
    
    updateOptionsOnly(); // Hanya update options, bukan seluruh halaman
}

// ========== SUBMIT ANSWER ==========
function submitAnswer() {
    showExplanation = true;
    
    if (isCorrectAnswer()) {
        score++;
        document.getElementById('score-display').textContent = score;
    }
    
    // Update options dengan state baru
    updateOptionsOnly();
    
    // Tampilkan explanation
    showExplanationBox();
    
    // Update buttons
    document.getElementById('quiz-buttons').innerHTML = renderButtons();
    attachNextListener();
}

// ========== SHOW EXPLANATION BOX ==========
function showExplanationBox() {
    const currentQ = questions[currentQuestion];
    const explanationContainer = document.getElementById('explanation-container');
    
    const html = `
        <div class="explanation-box ${isCorrectAnswer() ? 'correct' : 'incorrect'}" style="animation: fadeIn 0.5s ease;">
            <div class="explanation-title">
                ${isCorrectAnswer() ? `
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span style="color: #4CAF50;">Jawaban Benar! 🎉</span>
                ` : `
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f44336" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span style="color: #f44336;">Jawaban Kurang Tepat</span>
                `}
            </div>
            ${!isCorrectAnswer() ? `
                <p style="color: #666; margin-bottom: 10px;">
                    <strong>Jawaban yang benar:</strong> ${currentQ.correctAnswer.map(i => String.fromCharCode(65 + i)).join(', ')}
                </p>
            ` : ''}
            <p class="explanation-text">${currentQ.explanation}</p>
        </div>
    `;
    
    explanationContainer.innerHTML = html;
}

// ========== CHECK CORRECT ANSWER ==========
function isCorrectAnswer() {
    const currentQ = questions[currentQuestion];
    const sortedSelected = [...selectedAnswers].sort();
    const sortedCorrect = [...currentQ.correctAnswer].sort();
    return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
}

// ========== NEXT QUESTION ==========
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        selectedAnswers = [];
        showExplanation = false;
        
        // Update progress bar
        document.getElementById('progress-bar').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
        document.getElementById('current-q-num').textContent = currentQuestion + 1;
        
        // Update body
        updateQuizBody();
        attachOptionListeners();
        attachSubmitListener();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showResult();
    }
}

// ========== SHOW RESULT ==========
function showResult() {
    const container = document.getElementById('quiz-container');
    const percentage = (score / questions.length) * 100;
    
    let message = '';
    let messageClass = '';
    
    if (percentage >= 80) {
        message = '🎉 Luar Biasa! Anda memahami etika bermedia sosial dengan sangat baik!';
        messageClass = 'excellent';
    } else if (percentage >= 60) {
        message = '👍 Bagus! Masih ada ruang untuk belajar lebih banyak tentang etika digital.';
        messageClass = 'good';
    } else {
        message = '💪 Tetap semangat! Pelajari lebih lanjut tentang etika bermedia sosial.';
        messageClass = 'need-improvement';
    }
    
    const html = `
        <div class="quiz-wrapper">
            <div class="quiz-card">
                <div class="result-screen">
                    <svg class="result-icon" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 20px;">Quiz Selesai!</h2>
                    <div class="result-score">${score}/${questions.length}</div>
                    <div class="result-percentage">Skor Anda: ${percentage.toFixed(0)}%</div>
                    
                    <div class="result-message ${messageClass}">
                        ${message}
                    </div>
                    
                    <button class="btn-restart" id="btn-restart">
                        Ulangi Quiz
                    </button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    document.getElementById('btn-restart').addEventListener('click', restartQuiz);
}

// ========== RESTART QUIZ ==========
function restartQuiz() {
    currentQuestion = 0;
    selectedAnswers = [];
    showExplanation = false;
    score = 0;
    renderQuiz();
    attachOptionListeners();
    attachSubmitListener();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    renderQuiz();
    attachOptionListeners();
    attachSubmitListener();
});