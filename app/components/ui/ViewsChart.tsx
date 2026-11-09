"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = { month: string; views: number };

export default function ViewsChart({ data }: { data: Point[] }) {
  const first = data[0];
  const last = data[data.length - 1];

  return (
    <div
      role="img"
      aria-label={`Line chart of monthly content views, rising from ${first.views.toLocaleString("en-US")} in ${first.month} to ${last.views.toLocaleString("en-US")} in ${last.month}.`}
    >
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="rgba(245,235,221,0.12)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: "#e8d3b3", fontSize: 13 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(245,235,221,0.25)" }}
          />
          <YAxis
            tick={{ fill: "#e8d3b3", fontSize: 13 }}
            tickLine={false}
            axisLine={false}
            width={48}
          />
          <Tooltip
            contentStyle={{
              background: "#5b3321",
              border: "1px solid #e8d3b3",
              borderRadius: 12,
              color: "#f5ebdd",
            }}
            labelStyle={{ color: "#e8d3b3" }}
            itemStyle={{ color: "#f5ebdd" }}
          />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#f6a56b"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#f6a56b", stroke: "#5b3321", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
