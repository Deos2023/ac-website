
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full py-4 px-2 sm:px-0">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className={cn("flex-1", index === steps.length - 1 ? "" : "")}>
            <div className="flex flex-col items-center">
              {index < currentStep ? (
                <div className="w-8 h-8 mx-auto rounded-full bg-cool-blue text-white flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
              ) : (
                <div className={cn(
                  "w-8 h-8 mx-auto rounded-full text-white flex items-center justify-center",
                  index === currentStep ? "bg-cool-blue" : "bg-gray-300"
                )}>
                  <span className="text-sm font-medium">{index + 1}</span>
                </div>
              )}
              <div className={cn(
                "text-xs font-medium mt-2 text-center",
                index === currentStep ? "text-cool-blue" : 
                index < currentStep ? "text-gray-900" : "text-gray-500"
              )}>
                {step}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-full bg-gray-200 h-0.5 my-3">
                  <div
                    className={cn(
                      "h-full bg-cool-blue transition-all duration-300",
                      index < currentStep ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
