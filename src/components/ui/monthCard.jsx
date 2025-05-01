import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { db } from "../../config/firebase";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function MonthCard() {
  const [newSalary, setNewSalary] = useState(0);

  useEffect(() => {
    const fetchSalary = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error("Usuário não está logado");
        return;
      }

      const userDocRef = doc(db, "users", user.uid);

      try {
        // Verifique se o documento do usuário existe
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          // Se o documento não existir, crie um novo com dados iniciais
          await setDoc(userDocRef, {
            Salary: 0, // Valor inicial de Salary
          });
        }

        const data = docSnap.data();
        const currentSalary = data.Salary || 0;

        setNewSalary(currentSalary);
      } catch (err) {
        console.error("Erro ao buscar salário:", err);
      }
    };

    fetchSalary();
  }, []);

  const handleApply = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("Usuário não está logado");
      return;
    }

    const userDocRef = doc(db, "users", user.uid);

    try {
      await updateDoc(userDocRef, {
        Salary: Number(newSalary),
      });

      alert("Salário atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar salário:", err);
    }
  };

  return (
    <div className="border-2 border-white/25 rounded-2xl h-64 flex bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000]">
      <div className="flex m-4 w-full">
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="font-lexend text-4xl">Month Income:</h1>
          <div className="flex flex-col gap-2">
            <span className="font-inter text-2xl text-white/75">Salary:</span>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value)}
                className="font-lexend text-5xl text-green-600 w-1/2 h-15 px-4 border-b-1 border-white/50"
              />
              <span className="text-5xl text-green-600">R$</span>
              <Button className="w-20 h-10" onClick={handleApply}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthCard;
