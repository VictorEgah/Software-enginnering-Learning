// Get every student row in the table
const rows = document.querySelectorAll("tbody tr");

// Work out the grade from the total
function getGrade(total) {
  if (total >= 70) {
    return "A";
  } else if (total >= 60) {
    return "B";
  } else if (total >= 50) {
    return "C";
  } else if (total >= 45) {
    return "D";
  } else if (total >= 40) {
    return "E";
  } else {
    return "F";
  }
}

// Calculate Total and Grade for one row
function calculate(row) {
  const inputs = row.querySelectorAll("input");
  const totalCell = row.querySelector(".total");
  const gradeCell = row.querySelector(".grade");

  let total = 0;
  let valid = true;

  inputs.forEach(function (input) {
    const score = Number(input.value);
    const max = Number(input.max);

    // Bonus: CA cannot exceed 10 and Exam cannot exceed 70
    if (score > max || score < 0) {
      input.classList.add("invalid");
      valid = false;
    } else {
      input.classList.remove("invalid");
      total = total + score;
    }
  });

  if (valid) {
    totalCell.textContent = total;
    gradeCell.textContent = getGrade(total);
  } else {
    totalCell.textContent = "-";
    gradeCell.textContent = "Invalid";
  }
}

// Listen for the input event on every field
rows.forEach(function (row) {
  const inputs = row.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      calculate(row);
    });
  });
});