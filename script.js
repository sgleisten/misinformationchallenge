const scenarios = [
    {
        headline: "New Miracle Diet Causes Rapid Weight Loss in Just One Week!",
        content: "A new diet sweeping the nation promises rapid weight loss with minimal effort. According to experts, participants can lose up to 10 pounds in just one week by following this simple regimen.",
        source: "example-fake-news-site.com", // Fictional Source
        date: "March 15, 2024",
        isFake: true,
        feedback: "This article is an example of misleading information. The headline uses sensational language to attract attention. The source, 'example-fake-news-site.com,' is not a recognized or reputable health website. Claims of rapid weight loss without effort are typically unrealistic and unverified by credible health experts."
    },
    {
        headline: "NASA Confirms Water on Mars",
        content: "NASA has announced the discovery of water on Mars, providing new hope for the possibility of life on the red planet.",
        source: "NASA.gov", // Real Source
        date: "July 20, 2021",
        isFake: false,
        feedback: "This is a real news article. NASA is a reputable and credible source for space-related news. The discovery of water on Mars has been confirmed by multiple sources and scientific studies."
    },
    {
        headline: "Celebrity Endorses Miracle Hair Growth Product",
        content: "A famous actor has been promoting a new hair growth product that claims to regrow hair in just a few weeks.",
        source: "example-fake-celeb-news.com", // Fictional Source
        date: "April 5, 2023",
        isFake: true,
        feedback: "This article is likely misleading. Celebrity endorsements do not guarantee the effectiveness of a product. The source 'example-fake-celeb-news.com' is not known for credible or scientifically-backed information."
    },
    {
        headline: "Study Finds Link Between Coffee Consumption and Longer Lifespan",
        content: "A new study published in a reputable medical journal has found that regular coffee consumption is linked to a longer lifespan.",
        source: "PubMed.gov", // Real Source
        date: "June 12, 2022",
        isFake: false,
        feedback: "This is a real news article. The study is published in a reputable medical journal, and such findings are usually backed by extensive research and peer reviews."
    },
    {
        headline: "Tech Giant Announces Revolutionary New Smartphone",
        content: "A leading technology company has just announced a new smartphone with groundbreaking features that will change the industry.",
        source: "TechCrunch.com", // Real Source
        date: "January 8, 2024",
        isFake: false,
        feedback: "This is a real news article. Major announcements from reputable technology companies are often covered by reliable sources and usually include verifiable information about the product."
    },
    {
        headline: "Shark Sightings at Popular Beach Increase Due to Climate Change",
        content: "Scientists report that climate change has led to an increase in shark sightings at a popular beach, urging swimmers to exercise caution.",
        source: "Nature.com", // Real Source
        date: "August 19, 2023",
        isFake: false,
        feedback: "This is a real news article. 'Nature.com' is a credible source, and climate change affecting wildlife patterns is a well-documented phenomenon."
    }
];


    // Add more scenarios here

let currentScenarioIndex = 0;
let score = 0;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('real-button').addEventListener('click', () => checkAnswer(false));
document.getElementById('fake-button').addEventListener('click', () => checkAnswer(true));
document.getElementById('next-button').addEventListener('click', nextScenario);
document.getElementById('replay-button').addEventListener('click', replayGame);

function startGame() {
    document.getElementById('game-intro').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('score-container').classList.remove('hidden');
    displayScenario();
    updateScore();
    updateProgress();
}

function displayScenario() {
    const scenario = scenarios[currentScenarioIndex];
    document.getElementById('headline').textContent = scenario.headline;
    document.getElementById('content').textContent = scenario.content;
    document.getElementById('source').textContent = `Source: ${scenario.source}`;
    document.getElementById('date').textContent = `Date: ${scenario.date}`;
}

function checkAnswer(isFake) {
    const scenario = scenarios[currentScenarioIndex];
    const feedback = scenario.isFake === isFake ? "Correct! " : "Incorrect. ";
    document.getElementById('feedback').textContent = feedback + scenario.feedback;

    if (scenario.isFake === isFake) {
        score += 10;
    }

    document.getElementById('feedback-container').classList.remove('hidden');
    document.getElementById('decision-buttons').classList.add('hidden');
    updateScore();
}

function nextScenario() {
    currentScenarioIndex++;

    if (currentScenarioIndex >= scenarios.length) {
        endGame();
        return;
    }

    document.getElementById('feedback-container').classList.add('hidden');
    document.getElementById('decision-buttons').classList.remove('hidden');
    displayScenario();
    updateProgress();
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function updateProgress() {
    document.getElementById('progress').textContent = `${currentScenarioIndex + 1}/${scenarios.length}`;
}

function endGame() {
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('game-summary').classList.remove('hidden');
    document.getElementById('final-score').textContent = score;
}

function replayGame() {
    currentScenarioIndex = 0;
    score = 0;
    document.getElementById('game-summary').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('decision-buttons').classList.remove('hidden');
    document.getElementById('feedback-container').classList.add('hidden');
    displayScenario();
    updateScore();
    updateProgress();
}
