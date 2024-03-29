import Loader from "@/components/Loader";

const loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
