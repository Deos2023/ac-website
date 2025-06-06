
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { starRatings, acTypes, brands, inverterTypes, ACType, Brand, InverterType } from "@/lib/ac-selection-data";

const StarSelectionPage = () => {
  const { type, brand, inverter, tonnage } = useParams<{ type: string; brand: string; inverter: string; tonnage: string }>();
  const acType = type as ACType;
  const brandId = brand as Brand;
  const inverterType = inverter as InverterType;
  const tonnageValue = decodeURIComponent(tonnage || "");
  
  // Find the current selections for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  const currentBrand = brands.find(b => b.id === brandId)?.name || "Brand";
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SelectionLayout 
      title="Select Star Rating" 
      description={`Choose the energy efficiency rating for your ${currentBrand} ${tonnageValue} ${currentType}.`}
      currentStep={4}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
        {starRatings.map((star) => (
          <SelectionCard
            key={star}
            title={star}
            to={`/products/${acType}/${brandId}/${inverterType}/${encodeURIComponent(tonnageValue)}/${encodeURIComponent(star)}`}
            className="h-32 flex items-center justify-center"
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default StarSelectionPage;
