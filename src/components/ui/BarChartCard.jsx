import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { db } from "../../config/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BarChart = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(Array(12).fill(0));
  const [userDocRef, setUserDocRef] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        setUserDocRef(doc(db, "users", userId));
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (!userDocRef) return;

      try {
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          // Cria um novo documento com valores iniciais caso não exista
          await setDoc(userDocRef, {
            Expenses: {}, // Definindo um objeto vazio para as despesas
          });
        }

        const user = docSnap.data();
        const expensesByMonth = Array(12).fill(0);
        const monthsMap = user.Expenses || {};

        Object.entries(monthsMap).forEach(([monthKey, expensesMap]) => {
          const monthIndex = parseInt(monthKey.split("-")[1], 10) - 1;
          if (expensesMap && typeof expensesMap === "object") {
            const sum = Object.values(expensesMap).reduce(
              (acc, val) => acc + (typeof val === "number" ? val : 0),
              0
            );
            expensesByMonth[monthIndex] += sum;
          }
        });

        setMonthlyExpenses(expensesByMonth);
      } catch (err) {
        console.error("Erro ao buscar dados do usuário:", err);
      }
    };

    getUserData();
  }, [userDocRef]);

  const option = {
    title: { show: false },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
        axisTick: { alignWithLabel: true },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        axisLabel: { show: false },
        min: 0,
        max: 2000,
      },
    ],
    series: [
      {
        name: "Expenses",
        type: "bar",
        barWidth: "30%",
        data: monthlyExpenses,
        itemStyle: {
          color: "#FC4B08",
          borderRadius: [100, 100, 0, 0],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full h-full text-center gap-4 items-center justify-center bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000] rounded-xl">
      <span className="text-4xl text-white/50 font-inter">Year:</span>
      <h1 className="text-5xl font-lexend">2025</h1>
      <ReactECharts option={option} style={{ height: "400px", width: "90%" }} />
    </div>
  );
};

export default BarChart;
