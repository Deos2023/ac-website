
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectionLayout from "@/components/SelectionLayout";
import SelectionCard from "@/components/SelectionCard";
import { brands, acTypes, ACType } from "@/lib/ac-selection-data";
import { getAvailableBrands } from "@/lib/utils";

const BrandSelectionPage = () => {
  const { type } = useParams<{ type: string }>();
  const acType = type as ACType;
  
  // Find the current AC type name for display
  const currentType = acTypes.find(t => t.id === acType)?.name || "AC";
  
  // Get only brands that have products available for this AC type
  const availableBrandIds = getAvailableBrands(acType);
  const availableBrands = brands.filter(brand => availableBrandIds.includes(brand.id));
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SelectionLayout 
      title={`Select ${currentType} Brand`} 
      description="Choose your preferred brand from our premium selection."
      currentStep={1}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {availableBrands.map((brand) => (
          <SelectionCard
            key={brand.id}
            image={brand.logo}
            title={brand.name}
            to={`/select-inverter/${acType}/${brand.id}`}
            className="h-48"
          />
        ))}
      </div>
    </SelectionLayout>
  );
};

export default BrandSelectionPage;
