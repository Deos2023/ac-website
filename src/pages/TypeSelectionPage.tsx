
import { useEffect } from "react";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { acTypes } from "@/lib/ac-selection-data";

const TypeSelectionPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <SelectionLayout 
      title="Select Your AC Type" 
      description="Choose the type of air conditioner that best suits your requirements."
      currentStep={0}
      showBackButton={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {acTypes.map((type) => (
          <SelectionCard
            key={type.id}
            image={type.image}
            title={type.name}
            to={`/select-brand/${type.id}`}
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default TypeSelectionPage;
