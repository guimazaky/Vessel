import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function BalanceCard() {
  const [userList, setUserList] = useState([]);

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
    <div className="border-2 border-white/25 rounded-2xl h-64 flex justify-between bg-radial-[at_50%_-30%] from-[#15015f] to-[#000000]">
      <div className="flex flex-col justify-between m-4 ">
        <h1 className=" font-lexend text-4xl ">Your Balance:</h1>
        <div className="">
          <span className="font-inter text-2xl text-white/75">Name:</span>
          {userList.map((users) => (
            <h1 className=" font-lexend text-3xl"> {users.Name}</h1>
          ))}
        </div>

        <div>
          <span className="font-inter text-2xl text-white/75">Balance:</span>
          <h1 className=" font-lexend text-3xl text-green-400">1.500R$</h1>
        </div>
      </div>
      <div className="flex flex-col justify-end m-4">
        <span className="font-inter text-1xl text-white/75">mês/ano:</span>
        <h2 className="font-lexend text-2xl">01/25</h2>
      </div>
    </div>
  );
}

export default BalanceCard;
