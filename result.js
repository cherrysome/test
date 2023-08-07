// 로컬스토리지에서 mbti_result 값을 가져옵니다.
const mbtiResult = localStorage.getItem("mbti_result");
let strengths = "";
let weaknesses = "";

// id="result" 요소를 가져옵니다.
const resultElement = document.getElementById("result");
const descriptionElement = document.getElementById("description");

if (mbtiResult) {
  // mbtiResult 값이 존재하는 경우, 결과를 표시합니다.
  resultElement.textContent = `${mbtiResult}입니다!`;

  let description = "";
  switch (mbtiResult) {
    case 'INTJ':
      description = "장점: 독립적이며, 논리적이고 효율적입니다. 계획을 세우고 목표를 성취하는데 집중합니다.<br> 단점: 다른 사람의 감정을 이해하는데 어려움을 느낄 수 있습니다. 변화를 받아들이는데 어려움을 느낍니다.";
      break;
    case 'INTP':
      description = "장점: 독창적이고 독립적인 사고를 가지고 있습니다. 복잡한 문제를 해결하는데 재능이 있습니다.<br> 단점: 이해하고 식별하는데 심각한 어려움을 겪을 수 있는 감정에 멀어질 수 있습니다.";
      break;
    case 'ENTJ':
      description = "장점: 자연스럽게 리더십을 발휘하고, 강력한 결정력과 조직력을 가지고 있습니다.<br> 단점: 감정적인 측면을 고려하지 않고 결정하는 경향이 있을 수 있습니다.";
      break;
    case 'ENTP':
      description = "장점: 열정적이고 창의적이며, 문제 해결에 있어서 전략적인 접근을 가지고 있습니다.<br> 단점: 일상적인 업무나 세부사항에 관심을 잃는 경향이 있습니다.";
      break;
    case 'INFJ':
      description = "장점: 통찰력이 뛰어나고 따뜻하며, 타인에게 이해를 베풀고 싶어합니다.<br> 단점: 다른 사람의 기대나 비판에 상처받기 쉽습니다.";
      break;
    case 'INFP':
      description = "장점: 이상주의적이고 창의적이며, 자신의 가치와 신념에 따라 행동합니다.<br> 단점: 실제 세상에 대한 기대치가 너무 높아 실망하기 쉽습니다.";
      break;
    case 'ENFJ':
      description = "장점: 타인을 돕는 것에 대한 깊은 통찰력과 열정을 가지고 있습니다.<br> 단점: 자신의 감정을 무시하거나 희생하는 경향이 있습니다.";
      break;
    case 'ENFP':
      description = "장점: 열정적이며 창의적이고, 다양한 관점을 이해하는 능력이 있습니다.<br> 단점: 일상적인 업무에 지루함을 느끼거나, 너무 많은 가능성을 고려하며 결정하는데 어려움을 겪을 수 있습니다.";
      break;
    case 'ISTJ':
      description = "장점: 세심하고 신중하며, 신뢰성과 체계성을 가지고 있습니다.<br> 단점: 새로운 접근법이나 생각에 대해 내성적일 수 있습니다.";
      break;
    case 'ISFJ':
      description = "장점: 따뜻하고 친절하며, 일상적인 업무에 대한 성실성과 관심을 가지고 있습니다.<br> 단점: 다른 사람을 돕기 위해 자신의 필요를 무시하는 경향이 있습니다.";
      break;
    case 'ESTJ':
      description = "장점: 사실에 기반한 결정을 내리며, 명확한 기준과 체계를 세우는 능력이 있습니다.<br> 단점: 감정적인 요소나 불확실성에 대한 이해가 부족할 수 있습니다.";
      break;
    case 'ESFJ':
      description = "장점: 사람을 돕는 것을 좋아하며, 일상적인 업무를 관리하는 능력이 있습니다.<br> 단점: 비판이나 갈등을 피하는 경향이 있을 수 있습니다.";
      break;
    case 'ISTP':
      description = "장점: 유연하고 적응력이 좋으며, 주어진 문제를 해결하는 능력이 있습니다.<br> 단점: 규칙을 따르거나 계획을 세우는 것이 어려울 수 있습니다.";
      break;
    case 'ISFP':
      description = "장점: 온화하고 공감력이 있으며, 주변 환경에 잘 적응합니다.<br> 단점: 일상적인 업무나 루틴을 지루하게 느끼는 경향이 있습니다.";
      break;
    case 'ESTP':
      description = "장점: 적응력이 좋고 유연하며, 문제를 신속하게 이해하고 해결하는 능력이 있습니다.<br> 단점: 장기적인 계획이나 목표를 세우는데 어려움을 겪을 수 있습니다.";
      break;
    case 'ESFP':
      description = "장점: 쾌활하고 열정적이며, 새로운 경험을 즐기는 능력이 있습니다.<br> 단점: 세부사항에 대한 주의력이 부족하거나 장기적인 계획을 세우는 것이 어려울 수 있습니다.";
      break;
    default:
      description = "미리 설정된 MBTI 설명을 찾을 수 없습니다.";
  }
  descriptionElement.innerHTML = description;
} else {
  // mbtiResult 값이 없는 경우, "아직 테스트를 진행하지 않았습니다!"를 표시합니다.
  resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
  
  // 버튼의 텍스트를 "테스트 하러 가기"로 변경합니다.
  const restartBtn = document.getElementById("restart-btn");
  restartBtn.textContent = "테스트 하러 가기";
  restartBtn.addEventListener("click", function() {
    // 버튼을 클릭하면 테스트 페이지로 이동합니다.
    window.location.href = "./test.html";
  });
}
