

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../main";
import api from "../../api/axios";




export default function Dashboard() {
  const { user } = useContext(Context);
  const [salarySlips, setSalarySlips] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loadingSlips, setLoadingSlips] = useState(true);
  const [loadingExpenses, setLoadingExpenses] = useState(true);

  useEffect(() => {
    const fetchSalarySlips = async () => {
      try {
        const res = await api.get('/salary-slips', { withCredentials: true });
        setSalarySlips(Array.isArray(res.data) ? res.data : res.data.slips || []);
      } catch (err) {
        console.error("Failed to fetch salary slips:", err);
        setSalarySlips([]);
      } finally {
        setLoadingSlips(false);
      }
    };

    const fetchExpenses = async () => {
      try {
        const res = await api.get( '/expenses', { withCredentials: true });
        setExpenses(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
        setExpenses([]);
      } finally {
        setLoadingExpenses(false);
      }
    };

    fetchSalarySlips();
    fetchExpenses();
  }, []);

  // Restrict visibility to employees only
  if (!user || user.role !== "Employer" && user.role !== "Job Seeker") {
    return <h1 className="p-6 text-red-600 font-bold">Access Denied</h1>;
  }

  return (
    // <div className="p-6 space-y-6">
    //   {/* Salary Slips Section */}
    //   <div className="bg-white shadow rounded-lg p-4">
    //     <h2 className="text-xl font-semibold mb-2">Salary Slips</h2>
    //     <table className="border-collapse border border-gray-300 w-full">
    //       <thead>
    //         <tr className="bg-gray-200">
    //           <th className="border p-2">Month</th>
    //           <th className="border p-2">Basic Pay</th>
    //           <th className="border p-2">Allowances</th>
    //           <th className="border p-2">Deductions</th>
    //           <th className="border p-2">Net Salary</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {loadingSlips ? (
    //           <tr>
    //             <td colSpan="5" className="text-center p-4">
    //               <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 inline-block"></span>
    //             </td>
    //           </tr>
    //         ) : salarySlips.length > 0 ? (
    //           salarySlips.map((slip) => (
    //             <tr key={slip._id}>
    //               <td className="border p-2">{slip.month}</td>
    //               <td className="border p-2">{slip.basicPay}</td>
    //               <td className="border p-2">{slip.allowances}</td>
    //               <td className="border p-2">{slip.deductions}</td>
    //               <td className="border p-2">{slip.netSalary}</td>
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td colSpan="5" className="text-center p-4 text-gray-500 italic">
    //               No salary slips found
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>

    //   {/* Expenses Section */}
    //   <div className="bg-white shadow rounded-lg p-4">
    //     <h2 className="text-xl font-semibold mb-2">Expense History</h2>
    //     <table className="border-collapse border border-gray-300 w-full">
    //       <thead>
    //         <tr className="bg-gray-200">
    //           <th className="border p-2">Month</th>
    //           <th className="border p-2">Description</th>
    //           <th className="border p-2">Amount</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {loadingExpenses ? (
    //           <tr>
    //             <td colSpan="3" className="text-center p-4">
    //               <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 inline-block"></span>
    //             </td>
    //           </tr>
    //         ) : expenses.length > 0 ? (
    //           expenses.map((e) => (
    //             <tr key={e._id}>
    //               <td className="border p-2">{e.month}</td>
    //               <td className="border p-2">{e.description}</td>
    //               <td className="border p-2">{e.amount}</td>
    //             </tr>
    //           ))
    //         ) : (
    //           <tr>
    //             <td colSpan="3" className="text-center p-4 text-gray-500 italic">
    //               No expenses submitted
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
  {/* Salary Slips Section */}
  <div className="bg-white shadow-lg rounded-xl p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
      💰 Salary Slips
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <th className="p-3 text-sm font-medium text-left">Month</th>
            <th className="p-3 text-sm font-medium text-left">Basic Pay</th>
            <th className="p-3 text-sm font-medium text-left">Allowances</th>
            <th className="p-3 text-sm font-medium text-left">Deductions</th>
            <th className="p-3 text-sm font-medium text-left">Net Salary</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loadingSlips ? (
            <tr>
              <td colSpan="5" className="text-center p-6">
                <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 inline-block"></span>
              </td>
            </tr>
          ) : salarySlips.length > 0 ? (
            salarySlips.map((slip, idx) => (
              <tr
                key={slip._id}
                className={`hover:bg-blue-50 transition ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3">{slip.month}</td>
                <td className="p-3">{slip.basicPay}</td>
                <td className="p-3">{slip.allowances}</td>
                <td className="p-3">{slip.deductions}</td>
                <td className="p-3 font-semibold text-green-600">{slip.netSalary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center p-6 text-gray-500 italic"
              >
                No salary slips found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>

  {/* Expenses Section */}
  <div className="bg-white shadow-lg rounded-xl p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
      📊 Expense History
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <th className="p-3 text-sm font-medium text-left">Month</th>
            <th className="p-3 text-sm font-medium text-left">Description</th>
            <th className="p-3 text-sm font-medium text-left">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loadingExpenses ? (
            <tr>
              <td colSpan="3" className="text-center p-6">
                <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 inline-block"></span>
              </td>
            </tr>
          ) : expenses.length > 0 ? (
            expenses.map((e, idx) => (
              <tr
                key={e._id}
                className={`hover:bg-green-50 transition ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3">{e.month}</td>
                <td className="p-3">{e.description}</td>
                <td className="p-3 font-semibold text-red-600">₹{e.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="text-center p-6 text-gray-500 italic"
              >
                No expenses submitted
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}
