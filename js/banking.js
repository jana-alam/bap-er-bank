// total balance
const balance = document.getElementById("total-balance");
// deposit transaction
const totalDeposited = document.getElementById("total-deposited");
const inputDeposit = document.getElementById("input-deposit");
const buttonDeposit = document.getElementById("button-deposit");

buttonDeposit.addEventListener("click", function () {
  const prevDepositedAmount = parseFloat(totalDeposited.innerText);
  const depositAmount = parseFloat(inputDeposit.value);

  const totalDepositAmount = depositAmount + prevDepositedAmount;
  totalDeposited.innerText = totalDepositAmount;
  inputDeposit.value = "";

  //   update final balance
  const presentBalance = parseFloat(balance.innerText);
  const updatedBalance = presentBalance + depositAmount;
  balance.innerText = updatedBalance;
});

// withdrawn transaction

const totalWithdrawn = document.getElementById("total-withdrawn");
const inputWithdraw = document.getElementById("input-withdraw");
const buttonWithdraw = document.getElementById("button-withdraw");

buttonWithdraw.addEventListener("click", function () {
  const prevWithdrawnAmount = parseFloat(totalWithdrawn.innerText);
  const withdrawAmount = parseFloat(inputWithdraw.value);

  const totalWithdrawAmount = prevWithdrawnAmount + withdrawAmount;
  totalWithdrawn.innerText = totalWithdrawAmount;
  inputWithdraw.value = "";

  //   update final balance

  const presentBalance = parseFloat(balance.innerText);
  const updatedBalance = presentBalance - withdrawAmount;
  balance.innerText = updatedBalance;
});
