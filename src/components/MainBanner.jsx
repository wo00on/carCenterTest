// Main Banner Component
const MainBanner = () => {
    return (
      <section className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <h1 className="text-3xl font-bold drop-shadow-lg">자동차 수리 견적, 쉽고 빠르게</h1>
        <button className="mt-4 bg-orange-500 px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
          견적 요청하기
        </button>
      </section>
    );
  };

  export default MainBanner