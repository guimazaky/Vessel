import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const [progress, setProgress] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/home");

          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col place-content-between h-screen content-center">
      <div className="my-auto">
        <h1 className="text-center text-white font-didot text-8xl">Vessel</h1>
      </div>

      <div className=" mb-20">
        <Progress value={progress} className="w-7xl mx-auto " />
      </div>
    </div>
  );
}

export default LoadingPage;
