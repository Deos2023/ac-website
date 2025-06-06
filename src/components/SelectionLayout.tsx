
import { ReactNode } from "react";
import Layout from "@/components/Layout";
import StepIndicator from "@/components/StepIndicator";
import BackButton from "@/components/BackButton";

interface SelectionLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  currentStep: number;
  showBackButton?: boolean;
}

const steps = [
  "AC Type",
  "Brand",
  "Inverter Type",
  "Tonnage",
  "Star Rating",
  "Products"
];

const SelectionLayout = ({ 
  children, 
  title, 
  description, 
  currentStep,
  showBackButton = true
}: SelectionLayoutProps) => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <StepIndicator steps={steps} currentStep={currentStep} />
          
          <div className="mt-8">
            {showBackButton && <BackButton />}
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              {description && (
                <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
              )}
            </div>
            
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SelectionLayout;
