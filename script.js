const faqItems = document.querySelectorAll('.faq-item h3');
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

// FAQ 클릭 시 답변 표시/숨기기
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

// 문의 제출 처리
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // 폼 데이터 처리
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // 확인 메시지 표시
  responseMessage.textContent = `문의해 주셔서 감사합니다, ${name}님. 빠르게 답변드리겠습니다!`;
  responseMessage.style.color = 'green';

  // 폼 초기화
  form.reset();
});
