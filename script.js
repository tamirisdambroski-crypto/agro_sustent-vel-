document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Respostas corretas do quiz
    const answers = {
        q1: 'correto',
        q2: 'correto',
        q3: 'correto'
    };

    let score = 0;
    let totalQuestions = 3;

    // Validar Pergunta 1
    const q1User = document.querySelector('input[name="q1"]:checked');
    const f1 = document.getElementById('f1');
    if (q1User) {
        if (q1User.value === answers.q1) {
            score++;
            f1.textContent = "✓ Correto! O transporte de longa distância queima muitos combustíveis fósseis.";
            f1.className = "feedback correct";
        } else {
            f1.textContent = "✕ Incorreto. A resposta certa destaca as emissões de gases poluentes.";
            f1.className = "feedback incorrect";
        }
    } else {
        f1.textContent = "✕ Por favor, responda esta pergunta.";
        f1.className = "feedback incorrect";
    }

    // Validar Pergunta 2
    const q2User = document.querySelector('input[name="q2"]:checked');
    const f2 = document.getElementById('f2');
    if (q2User) {
        if (q2User.value === answers.q2) {
            score++;
            f2.textContent = "✓ Correto! Os drones evitam o desperdício identificando áreas exatas que precisam de atenção.";
            f2.className = "feedback correct";
        } else {
            f2.textContent = "✕ Incorreto. A tecnologia serve para o monitoramento inteligente e economia.";
            f2.className = "feedback incorrect";
        }
    } else {
        f2.textContent = "✕ Por favor, responda esta pergunta.";
        f2.className = "feedback incorrect";
    }

    // Validar Pergunta 3
    const q3User = document.querySelector('input[name="q3"]:checked');
    const f3 = document.getElementById('f3');
    if (q3User) {
        if (q3User.value === answers.q3) {
            score++;
            f3.textContent = "✓ Correto! A FAEP foca na educação, oferecendo treinamentos voltados a práticas sustentáveis.";
            f3.className = "feedback correct";
        } else {
            f3.textContent = "✕ Incorreto. A atuação da FAEP ocorre auxiliando e capacitando produtores.";
            f3.className = "feedback incorrect";
        }
    } else {
        f3.textContent = "✕ Por favor, responda esta pergunta.";
        f3.className = "feedback incorrect";
    }

    // Exibir Caixa com a Pontuação Final
    const resultBox = document.getElementById('quiz-result');
    const resultText = document.getElementById('result-text');
    
    resultBox.classList.remove('hidden');
    resultText.textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    
    if(score === totalQuestions) {
        resultText.textContent += " Excelente! Você entende muito sobre o equilíbrio no agronegócio.";
    } else {
        resultText.textContent += " Bom esforço! Continue estudando a sustentabilidade no campo.";
    }
});
