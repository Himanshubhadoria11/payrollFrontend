import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";




export default function SalarySlips() {
  const [slips, setSlips] = useState([]);
  const [editingSlip, setEditingSlip] = useState(null);
  const [form, setForm] = useState({
    employeeId: "",
    month: "",
    basicPay: "",
    allowances: "",
    deductions: "",
  });

  // Fetch all salary slips
  const fetchSlips = async () => {
    try {
      // const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips`, {
      //   withCredentials: true,
      // });
       const token = localStorage.getItem("token");
const res= await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips`, {
  headers: { Authorization: `Bearer ${token}` }
});
      setSlips(res.data);
    } catch (err) {
      console.error("Error fetching slips:", err);
      toast.error("Failed to fetch salary slips");
    }
  };

  useEffect(() => {
    fetchSlips();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        basicPay: Number(form.basicPay),
        allowances: Number(form.allowances) || 0,
        deductions: Number(form.deductions) || 0,
      };
      payload.netSalary =
        payload.basicPay + payload.allowances - payload.deductions;

      if (editingSlip) {
        // await axios.put(
        //   `${import.meta.env.VITE_API_BASE_URL}/api/salary-slips/${editingSlip._id}`,
        //   payload,
        //   { withCredentials: true }
        // );
        const token = localStorage.getItem("token");
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips/${editingSlip._id}`,
        payload, 
        {
  headers: { Authorization: `Bearer ${token}` }
});
        toast.success("Salary slip updated!");
      } else {
        // await axios.post( `${import.meta.env.VITE_API_BASE_URL}/api/salary-slips`, payload, {
        //   withCredentials: true,
        // });
         const token = localStorage.getItem("token");
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips`,
        payload, 
        {
  headers: { Authorization: `Bearer ${token}` }
});
        toast.success("Salary slip added!");
      }

      setForm({
        employeeId: "",
        month: "",
        basicPay: "",
        allowances: "",
        deductions: "",
      });
      setEditingSlip(null);
      fetchSlips();
    } catch (err) {
      console.error("Add/Update failed:", err);
      toast.error("Failed to add/update salary slip");
    }
  };


//   const deleteSlip = async (id) => {
//   if (!window.confirm("Delete this slip?")) return;
//   try {
//     // await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips/${id}`, {
//     //   withCredentials: true, // if your backend requires cookies/auth
//     // });
//     const token = localStorage.getItem("token");
//      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips/${id}`, {
//   headers: { Authorization: `Bearer ${token}` }
// });
//     toast.success("Salary slip deleted!");
//     fetchSlips(); // refresh list
//   } catch (err) {
//     console.error("Delete failed:", err);
//     toast.error("Failed to delete salary slip");
//   }
// };

const deleteSlip = async (id) => {
  if (!window.confirm("Delete this slip?")) return;

  const token = localStorage.getItem("token"); // declare token here
  if (!token) {
    toast.error("No token found. Please login.");
    return;
  }

  try {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/salary-slips/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Salary slip deleted!");
    fetchSlips(); // refresh list
  } catch (err) {
    console.error("Delete failed:", err);
    toast.error("Failed to delete salary slip");
  }
};

  const startEdit = (slip) => {
    setEditingSlip(slip);
    setForm({
      employeeId: slip.employeeId,
      month: slip.month,
      basicPay: slip.basicPay,
      allowances: slip.allowances,
      deductions: slip.deductions,
    });
  };

  const cancelEdit = () => {
    setEditingSlip(null);
    setForm({
      employeeId: "",
      month: "",
      basicPay: "",
      allowances: "",
      deductions: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Salary Slips</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-6 max-w-lg">
        <input
          name="employeeId"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
          disabled={!!editingSlip}
          required
          className="border p-2 w-full"
        />
        <input
          name="month"
          placeholder="Month (e.g., September-2025)"
          value={form.month}
          onChange={handleChange}
          disabled={!!editingSlip}
          required
          className="border p-2 w-full"
        />
        <input
          name="basicPay"
          type="number"
          placeholder="Basic Pay"
          value={form.basicPay}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="allowances"
          type="number"
          placeholder="Allowances"
          value={form.allowances}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="deductions"
          type="number"
          placeholder="Deductions"
          value={form.deductions}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className={`px-4 py-2 rounded text-white ${
              editingSlip ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            {editingSlip ? "Update Slip" : "Add Slip"}
          </button>
          {editingSlip && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-4 py-2 rounded bg-gray-500 text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Table Section */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Employee ID</th>
            <th className="border p-2">Month</th>
            <th className="border p-2">Basic Pay</th>
            <th className="border p-2">Allowances</th>
            <th className="border p-2">Deductions</th>
            <th className="border p-2">Net Salary</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slips.map((slip) => (
            <tr key={slip._id}>
              <td className="border p-2">{slip.employeeId}</td>
              <td className="border p-2">{slip.month}</td>
              <td className="border p-2">{slip.basicPay}</td>
              <td className="border p-2">{slip.allowances}</td>
              <td className="border p-2">{slip.deductions}</td>
              <td className="border p-2">{slip.netSalary}</td>
              <td className="border p-2">
                <button
                  onClick={() => startEdit(slip)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-full mr-2"
                >
                  Edit
                </button>
               
                <button
                  onClick={() => deleteSlip(slip._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded-4xl"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {slips.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center p-4">
                No salary slips found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

