document.getElementById("btn-withdraw").addEventListener("click", () => {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawTotal = Number(withdrawField.value);
  //   console.log(newWithdraw);

  // withdraw Balance
  const withdrawBalance = document.getElementById("withdraw-total");
  const previousWithdrawTotal = Number(withdrawBalance.innerText);

  //   minus from balance total
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = Number(balanceTotal.innerText);

  withdrawField.value = "";

  if (newWithdrawTotal > previousBalanceTotal) {
    alert("Baaper Bank a Etttto Tk Nay Jaaaahhh");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
  withdrawBalance.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  balanceTotal.innerText = currentBalanceTotal;

  withdrawField.value = "";
});
