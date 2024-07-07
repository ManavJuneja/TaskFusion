import { useSelector } from "react-redux";
import SubscriptionCard from "./SubscriptionCard";
import { store } from "@/Redux/Store";

const annualPlan = [
  "Access to live chat",
  "Add unlimited projects",
  "Add unlimited team members",
  "Advanced Reporting",
  "Priority Support",
  "All features of monthly plan"
];

const freePlan = [
  "Add only 3 projects",
  "Basic Task Fusion",
  "Task Collaboration",
  "Basic Reporting",
  "Email Notification",
  "Basic Support",
  "Basic Access Control"
];

const monthlyPlan = [
  "Access to live chat",
  "Add unlimited projects",
  "Add unlimited team members",
  "Advanced Reporting",
  "Priority Support",
  "Integration Support",
  "Training and Resource",
  "Access Control",
  "Custom Workflow",
  "Advance Security"
];

const Subscription = () => {
  const { subscription } = useSelector((store) => store);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard 
          data={{
            planName: "Free Plan",
            features: freePlan,
            planType: "FREE",
            price: 0,
            buttonName: subscription.userSubscription?.planType === "FREE" ? "Current Plan" : "Get Started"
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Monthly Paid Plan",
            features: monthlyPlan,
            planType: "MONTHLY",
            price: 29,
            buttonName: subscription.userSubscription?.planType === "MONTHLY" ? "Current Plan" : "Get Started"
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Annual Paid Plan",
            features: annualPlan,
            planType: "ANNUALLY",
            price: 139,
            buttonName: subscription.userSubscription?.planType === "ANNUALLY" ? "Current Plan" : "Get Started"
          }}
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Subscription;
