import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="mt-10">
          <h1 className="text-4xl font-bold text-blue-700">
            Interactive Financial Education Platform
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Learn financial concepts through interactive modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <CourseCard
            title="Stock Market Basics"
            lessons="12 Interactive Lessons"
          />

          <CourseCard
            title="Investment Planning"
            lessons="8 Interactive Lessons"
          />

          <CourseCard
            title="Risk Management"
            lessons="10 Interactive Lessons"
          />

        </div>

      </div>

    </div>
  );
}