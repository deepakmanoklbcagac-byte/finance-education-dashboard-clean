export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        EduFinance
      </h1>

      <ul className="space-y-6 text-lg">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Lessons</li>
        <li>Quiz</li>
        <li>Progress</li>
        <li>Certificates</li>
      </ul>

    </div>
  );
}