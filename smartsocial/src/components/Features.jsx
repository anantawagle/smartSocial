import PropTypes from "prop-types";
import SchedulingIcon from "../assets/scheduling.png"
import DashboardIcon from "../assets/dashboardicon.png"
import AutomationIcon from "../assets/automation.png"

function Features() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Content Automation"
          description="Generate posts and captions tailored to your audience. Save time and effort!"
          icon={AutomationIcon}
        />
        <FeatureCard
          title="Analytics Dashboard"
          description="Track engagement and performance metrics in real time. Make data-driven decisions!"
          icon={DashboardIcon}
        />
        <FeatureCard
          title="Scheduling"
          description="Automate posting schedules across multiple platforms. Reach your audience on time!"
          icon={SchedulingIcon}
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// PropTypes validation for FeatureCard
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Features;
