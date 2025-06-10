
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { inverterTypes, brands, acTypes, ACType, Brand } from "@/lib/ac-selection-data";
import { getAvailableInverterTypes } from "@/lib/utils";

const InverterSelectionPage = () => {
  const { type, brand } = useParams<{ type: string; brand: string }>();
  const acType = type as ACType;
  const brandId = brand as Brand;
  
  // Find the current AC type and brand names for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  
  // Get only inverter types that have products available for this AC type and brand
  const availableInverterTypeIds = getAvailableInverterTypes(acType, brandId);
  const availableInverterTypes = inverterTypes.filter(inverterType => 
    availableInverterTypeIds.includes(inverterType.id)
  );
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SelectionLayout 
      title="Select Inverter Type" 
      description={`Choose the inverter technology for your ${currentBrand} ${currentType}.`}
      currentStep={2}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {availableInverterTypes.map((inverterType) => (
          <SelectionCard
            key={inverterType.id}
            title={inverterType.name}
            to={`/select-tonnage/${acType}/${brandId}/${inverterType.id}`}
            className="h-48 flex items-center justify-center"
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default InverterSelectionPage;
