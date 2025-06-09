
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { tonnageOptions, acTypes, brands, inverterTypes, ACType, Brand, InverterType } from "@/lib/ac-selection-data";
import { getAvailableTonnages } from "@/lib/utils";

const TonnageSelectionPage = () => {
  const { type, brand, inverter } = useParams<{ type: string; brand: string; inverter: string }>();
  const acType = type as ACType;
  const brandId = brand as Brand;
  const inverterType = inverter as InverterType;
  
  // Find the current selections for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  const currentInverter = inverterTypes.find(i => i.id === inverterType)?.name || "Type";
  
  // Get only tonnage options that have products available for this combination
  const availableTonnages = getAvailableTonnages(acType, brandId, inverterType);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SelectionLayout 
      title="Select Tonnage" 
      description={`Choose the cooling capacity for your ${currentBrand} ${currentInverter}.`}
      currentStep={3}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {availableTonnages.map((tonnage) => (
          <SelectionCard
            key={tonnage}
            title={tonnage}
            to={`/select-star/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnage)}`}
            className="h-32 flex items-center justify-center"
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default TonnageSelectionPage;
