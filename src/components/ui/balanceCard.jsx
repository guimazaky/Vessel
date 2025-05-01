import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function BalanceCard() {
  const [userData, setUserData] = useState(null);
  const [userDocRef, setUserDocRef] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        const ref = doc(db, "users", userId);
        setUserDocRef(ref);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (!userDocRef) return;

      try {
        // Verifique se o documento do usuário existe
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          // Se o documento não existir, crie um novo com dados iniciais
          await setDoc(userDocRef, {
            Name: "", // Nome inicial
            Salary: 0, // Salário inicial
            Expenses: {}, // Despesas iniciais
          });
        }

        const data = docSnap.data();
        setUserData({ ...data, id: docSnap.id });
      } catch (err) {
        console.error("Erro ao buscar dados do usuário:", err);
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

  const calculateBalance = () => {
    if (!userData) return "0.00";

    const salary = userData.Salary || 0;
    const monthYear = getCurrentMonthYear();

    const expenses =
      userData.Expenses && userData.Expenses[monthYear]
        ? Object.values(userData.Expenses[monthYear]).reduce(
            (acc, val) => acc + (typeof val === "number" ? val : 0),
            0
          )
        : 0;

    return (salary - expenses).toFixed(2);
  };

  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex justify-between bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000]">
      <div className="flex flex-col justify-between m-4">
        <h1 className="font-lexend text-4xl">Your Balance:</h1>

        {userData && (
          <>
            <div>
              <span className="font-inter text-2xl text-white/75">Name:</span>
              <h1 className="font-lexend text-3xl">{userData.Name}</h1>
            </div>

            <div>
              <span className="font-inter text-2xl text-white/75">
                Balance:
              </span>
              <h1 className="font-lexend text-3xl text-green-400">
                {calculateBalance()} R$
              </h1>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col justify-end m-4">
        <span className="font-inter text-1xl text-white/75">Year/Month:</span>
        <h2 className="font-lexend text-2xl">{getCurrentMonthYear()}</h2>
      </div>
    </div>
  );
}

export default BalanceCard;
