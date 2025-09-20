import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../main";




export default function ExpenseForm({ fetchExpenses }) {
  const { user } = useContext(Context);
  const [form, setForm] = useState({
    month: "",
    description: "",
    amount: "",
  });

  useEffect(() => {
    const currentMonth = new Date().toLocaleString("default", { month: "long", year: "numeric" });
    setForm((prev) => ({ ...prev, month: currentMonth }));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/expenses`, {
        employeeId: user._id,
        month: form.month,
        description: form.description,
        amount: Number(form.amount),
      }, { withCredentials: true });

      alert("Expense added successfully!");
      setForm({ month: "", description: "", amount: "" });
      fetchExpenses(); // refresh table
    } catch (err) {
      console.error(err);
      alert("Failed to add expense");
    }
  };

  return (
   
     
    
  

<form 
  onSubmit={handleSubmit} 
  className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4"
>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
    Submit Expense
  </h2>

  {/* Month */}
  <div>
    <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">
      Month
    </label>
    <input
      id="month"
      name="month"
      placeholder="e.g., September 2025"
      value={form.month}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
    />
  </div>

  {/* Description */}
  <div>
    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
      Description
    </label>
    <input
      id="description"
      name="description"
      placeholder="Expense Description"
      value={form.description}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
    />
  </div>

  {/* Amount */}
  <div>
    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
      Amount
    </label>
    <input
      id="amount"
      name="amount"
      type="number"
      placeholder="Enter amount"
      value={form.amount}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
    />
  </div>

  {/* Submit Button */}
  <button 
    type="submit" 
    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
  >
    Add Expense
  </button>
</form>
    
  
  );
}


// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { Context } from "../../main";
// import ExpenseForm from "./ExpenseForm";

// export default function ExpenseList() {
//   const { user } = useContext(Context);
//   const [expenses, setExpenses] = useState([]);

//   // Fetch expenses from backend
//   const fetchExpenses = async () => {
//     try {
//       const { data } = await axios.get(`/api/expenses/${user._id}`, {
//         withCredentials: true,
//       });
//       setExpenses(data);
//     } catch (err) {
//       console.error("Error fetching expenses:", err);
//       setExpenses([]);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();

//     // Cleanup: optional, nothing to destroy here
//     return () => {};
//   }, []);

//   // Delete an expense
//   const deleteExpense = async (id) => {
//     if (!window.confirm("Delete this expense?")) return;
//     try {
//       await axios.delete(`/api/expenses/${id}`, { withCredentials: true });
//       fetchExpenses();
//     } catch (err) {
//       console.error("Failed to delete expense:", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Monthly Expenses</h2>

//       {/* Expense Form */}
//       <ExpenseForm fetchExpenses={fetchExpenses} />

//       {/* Expense Table */}
//       <table className="w-full border-collapse border mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Month</th>
//             <th className="border p-2">Description</th>
//             <th className="border p-2">Amount</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.length === 0 && (
//             <tr>
//               <td colSpan="4" className="text-center p-4">
//                 No expenses found
//               </td>
//             </tr>
//           )}
//           {expenses.map((exp) => (
//             <tr key={exp._id}>
//               <td className="border p-2">{exp.month}</td>
//               <td className="border p-2">{exp.description}</td>
//               <td className="border p-2">{exp.amount}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => deleteExpense(exp._id)}
//                   className="bg-red-600 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
