import React from "react";
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { Bar, Pie } from "react-chartjs-2"; // Import Pie chart from react-chartjs-2
import "chart.js/auto";
import Layout from "../../components/Layout"; // Importing the Layout component
import "./Dashboard.css"; // Importing the CSS file

const monthlyData = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Net Profit",
      data: [40, 50, 55, 50, 60, 55, 60, 60, 65, 60, 60],
      backgroundColor: "#4B5563",
    },
    {
      label: "Revenue",
      data: [70, 80, 95, 95, 85, 100, 90, 110, 90, 85, 90],
      backgroundColor: "#059669",
    },
    {
      label: "Free Cash Flow",
      data: [30, 40, 35, 25, 40, 45, 50, 50, 40, 35, 45],
      backgroundColor: "#D1D5DB",
    },
  ],
};

const pieData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      data: [60, 20, 10, 10], // Example data for the products
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Colors for each slice
    },
  ],
};

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-container">
        {/* Summary Cards */}
        <div className="summary-cards">
          {[{ title: "Total Sales (Today)", value: 0, trend: "up", percent: "0%", color: "#4CAF50" },
            { title: "Total Orders (Today)", value: 0, trend: "down", percent: "0%", color: "#F44336" },
            { title: "Total Customers", value: 0, trend: "up", percent: "0%", color: "#4CAF50" },
            { title: "Total Unique Visitors", value: 0, trend: "up", percent: "16%", color: "#4CAF50" }].map((item, index) => (
              <Card key={index}>
                <CardHeader
                  title={<Typography variant="h6">{item.title}</Typography>}
                />
                <CardContent className="card-content">
                  <Typography variant="h4" className="card-value">
                    {item.value}
                  </Typography>
                  <div className={`trend ${item.trend === "up" ? "trend-up" : "trend-down"}`}>
                    {item.trend === "up" ? <TrendingUp /> : <TrendingDown />} {item.percent}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Charts and Products */}
        <div className="chart-container">
          <Card>
            <CardHeader title={<Typography variant="h6">Monthly Earnings</Typography>} />
            <CardContent>
              <Bar data={monthlyData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
            </CardContent>
          </Card>
          <Card className="pie-chart-card">
            <CardHeader title={<Typography variant="h6">Popular Products</Typography>} />
            <CardContent>
              <div className="pie-chart-content">
                {/* Left side - Product Labels */}
                <div className="product-names">
                  <Typography variant="h6">Product Names</Typography>
                  <ul>
                    {pieData.labels.map((label, index) => (
                      <li key={index}>{label}</li>
                    ))}
                  </ul>
                </div>

                {/* Right side - Pie Chart */}
                <div className="pie-chart-container">
                  <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last Orders Table */}
        <Card>
          <CardHeader title={<Typography variant="h6">Last Orders</Typography>} />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Payment Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} className="table-cell-center">
                    No orders found
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
