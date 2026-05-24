type Props = {
  title: string;
  lessons: string;
};

export default function CourseCard({ title, lessons }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        {lessons}
      </p>

      <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg">
        View Course
      </button>

    </div>
  );
}