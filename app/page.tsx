// Internal imports
import Dock from "@/components/Dock";
import Welcome from "@/components/Welcome/Welcome";
import Terminal from "@/Windows/Terminal";

// Main page function
const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
};

export default page;
