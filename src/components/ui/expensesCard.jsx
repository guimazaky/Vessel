import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Trash, Plus, Pencil } from "lucide-react";
import { Button } from "./button";

function ExpensesCard() {
  const [userList, setUserList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(filteredData);
      } catch (err) {
        console.erro(err);
      }
    };

    getUserData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center h-full space-y-20 bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000] rounded-2xl">
      <div className=" text-center flex flex-col gap-4">
        <span className="text-4xl font-inter ">Expenses:</span>
        {userList.map((users) => (
          <h1 className="text-5xl font-lexend text-red-600">
            {"-" + users.Expenses + "R$"}
          </h1>
        ))}
      </div>
      <div className="flex flex-col justify-start w-8/10 gap-2 border-white/50">
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          agua: 250R$
          <div className="flex gap-4">
            <Pencil className="cursor-pointer" />
            <Trash className="cursor-pointer" />
          </div>
        </span>
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          luz: 125R$
          <div className="flex gap-4">
            <Pencil className="cursor-pointer" />
            <Trash className="cursor-pointer" />
          </div>
        </span>
        <span className="text-2xl text-white/50 border-white/50 border-b-1 p-2 flex justify-between">
          gas: 125R$
          <div className="flex gap-4">
            <Pencil onClick="" className="cursor-pointer" />
            <Trash className="cursor-pointer" />
          </div>
        </span>
      </div>
      <div
        className="flex  rounded-full h-12 w-12 items-center justify-center hover:border-2 cursor-pointer border-white/50"
        onClick={() => setShowForm(true)}
      >
        <Plus className="w-8 h-8" />
      </div>
      {showForm && (
        <div className="absolute top-2/6 left-1/2 transform -translate-x-1/2 w-120 h-80 bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000] p-6 rounded-lg border-1 border-white/50">
          <h2 className="text-2xl font-bold mb-4">Add new Expense</h2>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-gray-300 p-2 mb-4 w-full"
          />
          <input
            type="number"
            placeholder="Value"
            className="border-2 border-gray-300 p-2 mb-4 w-full"
          />
          <div className="flex justify-end gap-4">
            <Button className="bg-gray-400" onClick={() => setShowForm(false)}>
              {" "}
              Cancel{" "}
            </Button>
            <Button> Add </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpensesCard;
