// 從 YAML 文件加載的引言會通過 window.quotesData 傳遞
const quotes = window.quotesData || [
  "願你被這個世界溫柔以待", // 默認引言，以防加載失敗
];

function displayRandomQuote() {
  const quoteElement = document.querySelector('.random-quote .quote-text');
  if (quoteElement) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
}

// 當頁面加載完成時顯示隨機引言
document.addEventListener('DOMContentLoaded', displayRandomQuote); 