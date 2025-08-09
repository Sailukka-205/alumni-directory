import { useNavigate } from "react-router-dom";

const AlumniCard = ({ alumni }) => {
  const navigate = useNavigate(); 

  return (
    <div
      className="bg-white border border-blue-200 shadow-md rounded-2xl hover:shadow-2xl transition overflow-hidden cursor-pointer"
      onClick={() => navigate(`/projects/${alumni.id}`)} // ✅ Navigates directly to projects page
    >
      <img src={alumni.image} alt={alumni.name} className="w-full h-60 object-cover object-center rounded-t-2xl" />
      <div className="p-4 text-left">
        <h2 className="text-lg font-bold text-blue-700">{alumni.name}</h2>
        <p className="text-sm text-gray-600">{alumni.role}</p>
        <p className="text-sm text-gray-500 mt-1">{alumni.year}</p>
      </div>
    </div>
  );
};

export default AlumniCard;
