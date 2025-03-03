const RepairProcess = () => {
    return (
      <section className="bg-gray-100 p-6 grid grid-cols-3 gap-6">
        {["차량 선택", "손상 부위 선택", "견적 받기"].map((step, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md text-lg font-semibold text-center hover:shadow-xl transition duration-300">
            {step}
          </div>
        ))}
      </section>
    );
  };

  export default RepairProcess;
  