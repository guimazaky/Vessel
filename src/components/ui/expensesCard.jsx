import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Trash, Plus, Pencil } from "lucide-react";
import { Button } from "./button";

function ExpensesCard() {
  const [expenses, setExpenses] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newExpense, setNewExpense] = useState("");
  const [newExpenseValue, setNewExpenseValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [userDocRef, setUserDocRef] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        const docRef = doc(db, "users", userId);

        // Verifique se o documento do usuário existe
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          // Se o documento não existir, crie um novo documento com dados iniciais
          await setDoc(docRef, {
            Expenses: {},
          });
        }

        setUserDocRef(docRef);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (!userDocRef) return;

      try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setExpenses(userData.Expenses || {});
        }
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };

    getUserData();
  }, [userDocRef]);

  const getCurrentMonthYear = () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
  };

  const handleDeleteExpense = async (expenseKey) => {
    try {
      const updatedExpenses = { ...expenses };
      delete updatedExpenses[expenseKey];

      await updateDoc(userDocRef, {
        Expenses: updatedExpenses,
      });

      setExpenses(updatedExpenses);
    } catch (err) {
      console.error("Erro ao excluir expense:", err);
    }
  };

  const onSubmitExpense = async () => {
    try {
      const monthYear = getCurrentMonthYear();
      let updatedExpenses = { ...expenses };

      if (isEditing) {
        if (editingKey !== newExpense) {
          delete updatedExpenses[editingKey];
        }

        updatedExpenses[monthYear] = updatedExpenses[monthYear] || {};
        updatedExpenses[monthYear][newExpense] = Number(newExpenseValue);

        await updateDoc(userDocRef, {
          Expenses: updatedExpenses,
        });
      } else {
        updatedExpenses[monthYear] = updatedExpenses[monthYear] || {};
        updatedExpenses[monthYear][newExpense] = Number(newExpenseValue);

        await updateDoc(userDocRef, {
          Expenses: updatedExpenses,
        });
      }

      setExpenses(updatedExpenses);
      setShowForm(false);
      setNewExpense("");
      setNewExpenseValue(0);
      setIsEditing(false);
      setEditingKey(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-20 bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000] rounded-2xl">
      <div className="text-center flex flex-col gap-4">
        <span className="text-4xl font-inter">Expenses:</span>
        <h1 className="text-5xl font-lexend text-red-600">
          -{" "}
          {Object.values(expenses[getCurrentMonthYear()] || {})
            .reduce(
              (acc, val) =>
                acc + (typeof val === "number" && !isNaN(val) ? val : 0),
              0
            )
            .toFixed(2)}{" "}
          R$
        </h1>
      </div>

      <div className="flex flex-col justify-start w-8/10 gap-2 border-white/50 h-60 items-center">
        <div className="text-2xl text-white/50 p-4 h-100 w-100 overflow-y-scroll scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <ul className="flex flex-col gap-2">
            {Object.entries(expenses[getCurrentMonthYear()] || {}).map(
              ([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between items-center mb-2 border-b-1 border-white/50"
                >
                  <span>
                    {key}: R${" "}
                    {typeof value === "number" ? value.toFixed(2) : "0.00"}
                  </span>
                  <div className="flex gap-2">
                    <Pencil
                      className="cursor-pointer"
                      onClick={() => {
                        setIsEditing(true);
                        setEditingKey(key);
                        setNewExpense(key);
                        setNewExpenseValue(value);
                        setShowForm(true);
                      }}
                    />
                    <Trash
                      className="cursor-pointer"
                      onClick={() => handleDeleteExpense(key)}
                    />
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div
        className="flex rounded-full h-12 w-12 items-center justify-center hover:border-2 cursor-pointer border-white/50"
        onClick={() => {
          setShowForm(true);
          setIsEditing(false);
          setNewExpense("");
          setNewExpenseValue(0);
        }}
      >
        <Plus className="w-8 h-8" />
      </div>

      {showForm && (
        <div className="absolute top-2/6 left-1/2 transform -translate-x-1/2 w-120 h-80 bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000] p-6 rounded-lg border-1 border-white/50">
          <h2 className="text-2xl font-bold mb-4">
            {isEditing ? "Edit Expense" : "Add new Expense"}
          </h2>
          <input
            onChange={(e) => setNewExpense(e.target.value)}
            type="text"
            placeholder="Name"
            className="border-2 border-gray-300 p-2 mb-4 w-full"
            value={newExpense}
          />
          <input
            onChange={(e) => setNewExpenseValue(e.target.value)}
            type="number"
            placeholder="Value"
            className="border-2 border-gray-300 p-2 mb-4 w-full"
            value={newExpenseValue}
          />
          <div className="flex justify-end gap-4">
            <Button
              className="bg-gray-400"
              onClick={() => {
                setShowForm(false);
                setIsEditing(false);
                setEditingKey(null);
              }}
            >
              Cancel
            </Button>
            <Button onClick={onSubmitExpense}>
              {isEditing ? "Update" : "Add"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpensesCard;
