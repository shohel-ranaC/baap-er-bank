document.getElementById("btn-deposit").addEventListener("click", () => {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = Number(depositField.value);

  //   deposit total
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositAmount = Number(depositTotal.innerText);
  const currentDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = currentDepositTotal;
  //   clear input field
  depositField.value = "";

  //   balance Total
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = Number(balanceTotal.innerText);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = currentBalanceTotal;
});
