
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => navigate(-1)}
      className="group mb-4"
    >
      <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
      Back
    </Button>
  );
};

export default BackButton;
