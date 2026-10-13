

import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";

function App() {
  const [page, setPage] = useState("Overview");

  const [rows] = useState([
    {
      account: "Acme Inc.",
      owner: "John Smith",
      plan: "Pro",
      status: "Healthy",
      users: 120,
    },
    {
      account: "Bright Labs",
      owner: "Sarah Lee",
      plan: "Basic",
      status: "At Risk",
      users: 45,
    },
    {
      account: "Northstar Co.",
      owner: "David Kim",
      plan: "Pro",
      status: "Healthy",
      users: 210,
    },
    {
      account: "Bluewave Ltd.",
      owner: "Emma Davis",
      plan: "Enterprise",
      status: "Critical",
      users: 80,
    },
    {
      account: "Summit Group",
      owner: "Alex Brown",
      plan: "Basic",
      status: "Healthy",
      users: 32,
    },
    {
      account: "Greenfield Inc.",
      owner: "Mia Wilson",
      plan: "Pro",
      status: "At Risk",
      users: 95,
    },
    {
      account: "Crestview Co.",
      owner: "Noah Taylor",
      plan: "Enterprise",
      status: "Healthy",
      users: 175,
    },
    {
      account: "Silverline Ltd.",
      owner: "Olivia Martin",
      plan: "Pro",
      status: "Critical",
      users: 61,
    },
  ]);

  const columns = [
    { key: "account", label: "Account" },
    { key: "owner", label: "Owner" },
    { key: "plan", label: "Plan" },
    { key: "status", label: "Status" },
    { key: "users", label: "Users" },
  ];

  const cards = [
    { label: "Total Users", value: "1,250" },
    { label: "Revenue", value: "$8,450" },
    { label: "Active Projects", value: "24" },
    { label: "Tasks Completed", value: "186" },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Pulse</h2>

        <nav aria-label="Main navigation">
          {["Overview", "Accounts", "Alerts", "Reports", "Team", "Settings"].map(
            (item) => (
              <button
                key={item}
                className={page === item ? "active" : ""}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            )
          )}
        </nav>
      </aside>

      <div className="main-area">
        <header className="header">
          <h2>{page}</h2>
          <span>Analytics Dashboard</span>
        </header>

        <main className="content">
          <h1>{page}</h1>

          <p>
            {page === "Overview"
              ? "Welcome to your analytics dashboard."
              : `Welcome to the ${page} section.`}
          </p>

          {page === "Overview" && (
            <div className="cards">
              {cards.map((card) => (
                <div className="card" key={card.label}>
                  <h3>{card.label}</h3>
                  <p>{card.value}</p>
                </div>
              ))}
            </div>
          )}

          {(page === "Overview" ||
            page === "Accounts" ||
            page === "Reports") && (
            <section className="dashboard-section">
              <h2>Customer Accounts</h2>
              <DataTable columns={columns} rows={rows} />
            </section>
          )}

          {page === "Alerts" && (
            <section className="dashboard-section">
              <h2>Account Alerts</h2>
              <p>Review accounts that may need attention.</p>
              <DataTable
                columns={columns}
                rows={rows.filter(
                  (row) =>
                    row.status === "At Risk" ||
                    row.status === "Critical"
                )}
              />
            </section>
          )}

          {page === "Team" && (
            <section className="dashboard-section">
              <h2>Team Members</h2>
              <DataTable
                columns={[
                  { key: "owner", label: "Team Member" },
                  { key: "account", label: "Assigned Account" },
                  { key: "plan", label: "Plan" },
                ]}
                rows={rows}
              />
            </section>
          )}

          {page === "Settings" && (
            <section className="dashboard-section">
              <h2>Settings</h2>
              <p>Pulse dashboard settings will appear here.</p>
            </section>
          )}
        </main>

        <footer className="footer">
          Pulse UI Shell — Version 1.0
        </footer>
      </div>
    </div>
  );
}

export default App;
