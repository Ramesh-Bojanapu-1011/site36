import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), {
  ssr: false,
});
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), {
  ssr: false,
});
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), {
  ssr: false,
});
import {
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Headder from "@/components/Headder";
import { useLang } from "@/components/LangContext";

type User = {
  name: string;
  email: string;
  password: string;
  registerTime?: string;
};

const COLORS = ["#0088FE", "#00C49F"];

const AdminDashboard = () => {
  const { t } = useLang();
  const [users, setUsers] = useState<User[]>([]);
  const [loggedUsers, setLoggedUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulate fetching all users from localStorage (single user for demo)
    const userStr = localStorage.getItem("user");
    let allUsers: User[] = [];
    if (userStr) {
      allUsers.push(JSON.parse(userStr));
    }
    setUsers(allUsers);

    // Simulate fetching logged users (if loggedInUser exists)
    const loggedUserStr = localStorage.getItem("loggedInUser");
    let logged: User[] = [];
    if (loggedUserStr) {
      logged.push(JSON.parse(loggedUserStr));
    }
    setLoggedUsers(logged);
  }, []);

  // Prepare bar chart data: group users by registration date (YYYY-MM-DD)
  const barData: { date: string; count: number }[] = [];
  if (users.length > 0) {
    const dateMap: Record<string, number> = {};
    users.forEach((user) => {
      if (user.registerTime) {
        const date = user.registerTime.slice(0, 10); // YYYY-MM-DD
        dateMap[date] = (dateMap[date] || 0) + 1;
      }
    });
    Object.entries(dateMap).forEach(([date, count]) => {
      barData.push({ date, count });
    });
    // Sort by date ascending
    barData.sort((a, b) => a.date.localeCompare(b.date));
  }

  const pieData = [
    { name: "Logged Users", value: loggedUsers.length },
    { name: "All Users", value: users.length },
  ];

  return (
    <>
      <Headder />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 p-10">
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-10 text-center">
          {t("adminDashboard.title")}
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* Pie Chart Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border-2 border-blue-100 dark:border-blue-800 flex flex-col items-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">
              {t("adminDashboard.userOverview")}
            </h2>
            <div className="w-[320px] h-[320px] flex items-center justify-center">
              <PieChart width={320} height={320}>
                <Pie
                  data={pieData}
                  cx={160}
                  cy={160}
                  innerRadius={70}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          {/* Bar Chart Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border-2 border-blue-100 dark:border-blue-800 flex flex-col items-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">
              {t("adminDashboard.bar.title")}
            </h2>
            <div className="w-[400px] h-[320px] flex items-center justify-center">
              <BarChart
                width={400}
                height={320}
                data={barData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#0088FE" name="Registered Users" />
              </BarChart>
            </div>
          </div>
        </div>
        {/* User Lists Section */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border-2 border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">
            {t("adminDashboard.table.allUsers")}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-800 rounded-lg shadow">
              <thead>
                <tr className="bg-blue-100 dark:bg-gray-800">
                  <th className="py-3 px-4 text-left font-semibold text-blue-900 dark:text-blue-200">
                    {t("adminDashboard.table.th.number")}
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-blue-900 dark:text-blue-200">
                    {t("adminDashboard.table.th.name")}
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-blue-900 dark:text-blue-200">
                    {t("adminDashboard.table.th.email")}
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-blue-900 dark:text-blue-200">
                    {t("adminDashboard.table.th.registerTime")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-4 px-4 text-gray-500 text-center"
                    >
                      No users registered.
                    </td>
                  </tr>
                ) : (
                  users.map((user, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-blue-100 dark:border-gray-800"
                    >
                      <td className="py-2 px-4 text-blue-700 dark:text-blue-300">
                        {idx + 1}
                      </td>
                      <td className="py-2 px-4 text-blue-700 dark:text-blue-300 font-semibold">
                        {user.name}
                      </td>
                      <td className="py-2 px-4 text-blue-700 dark:text-blue-300">
                        {user.email}
                      </td>
                      <td className="py-2 px-4 text-blue-700 dark:text-blue-300">
                        {user.registerTime
                          ? new Date(user.registerTime).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">
            {t("adminDashboard.table.loggedInUsers")}
          </h2>
          <ul>
            {loggedUsers.length === 0 ? (
              <li className="text-gray-500">No users logged in.</li>
            ) : (
              loggedUsers.map((user, idx) => (
                <li
                  key={idx}
                  className="mb-2 p-2 rounded bg-green-50 dark:bg-gray-800"
                >
                  <span className="font-semibold text-green-700 dark:text-green-300">
                    {user.name}
                  </span>{" "}
                  - {user.email}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
