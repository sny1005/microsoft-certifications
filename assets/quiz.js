// Shared quiz widget: click-to-answer with immediate feedback.
// Markup convention:
//   <div class="quiz-q" data-answer="b">
//     <p class="q">Question text</p>
//     <button class="opt" data-key="a">Option A</button>
//     ...
//     <p class="why">Explanation shown after answering.</p>
//   </div>
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.quiz-q .opt');
  if (!btn) return;
  var q = btn.closest('.quiz-q');
  if (q.classList.contains('answered')) return;
  q.classList.add('answered');
  var answer = q.getAttribute('data-answer');
  q.querySelectorAll('.opt').forEach(function (o) {
    if (o.getAttribute('data-key') === answer) o.classList.add('correct');
  });
  if (btn.getAttribute('data-key') !== answer) btn.classList.add('incorrect');
});
