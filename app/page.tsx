// Internal imports
import Dock from "@/components/Dock";
import Welcome from "@/components/Welcome/Welcome";
import Safari from "@/Windows/Safari";
import Terminal from "@/Windows/Terminal";

// Main page function
const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  );
};

export default page;
