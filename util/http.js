import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-20f35-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
