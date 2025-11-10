document.getElementById("bmiForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const h = parseFloat(document.getElementById("height").value); // cm
  const w = parseFloat(document.getElementById("weight").value); // kg
  const out = document.getElementById("result");

  if (!h || !w) {
    out.textContent = "Anna pituus ja paino.";
    return;
  }

  const m = h / 100;
  const bmi = w / (m * m);
  const val = bmi.toFixed(1);

  let cls = "ok";
  let txt = "Normaalipaino";
  if (bmi < 18.5) { cls = "mid"; txt = "Alipaino"; }
  else if (bmi >= 25 && bmi < 30) { cls = "mid"; txt = "Ylipaino"; }
  else if (bmi >= 30) { cls = "bad"; txt = "Huomattava ylipaino"; }

  out.innerHTML = `BMI: <strong>${val}</strong> – <span class="${cls}">${txt}</span>`;
});
