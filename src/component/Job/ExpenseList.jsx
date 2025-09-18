


import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/axios";


export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Define async function inside useEffect
    const fetchExpenses = async () => {
      try {
        const res = await axios.get("/api/expenses", { withCredentials: true });
        setExpenses(res.data);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
      }
    };

    fetchExpenses();
  }, []); // empty dependency → runs once on mount

  return (
    

    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Expenses</h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white text-left">
          <th className="p-3 text-sm font-medium">Month</th>
          <th className="p-3 text-sm font-medium">Description</th>
          <th className="p-3 text-sm font-medium">Amount</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {expenses.length > 0 ? (
          expenses.map((e, idx) => (
            <tr
              key={e._id}
              className={`hover:bg-green-50 transition ${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-3 text-gray-700">{e.month}</td>
              <td className="p-3 text-gray-700">{e.description}</td>
              <td className="p-3 text-gray-900 font-semibold">₹{e.amount}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="3"
              className="text-center p-4 text-gray-500 italic"
            >
              No expenses submitted
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
}
