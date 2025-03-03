const Header = () => {
    return (
      <header className="h-16 bg-white shadow-md flex justify-between items-center px-6">
        <div className="text-xl font-bold">CarDoc</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-blue-500">홈</a>
          <a href="#" className="hover:text-blue-500">서비스 소개</a>
          <a href="#" className="hover:text-blue-500">수리견적</a>
          <a href="#" className="hover:text-blue-500">문의하기</a>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          로그인
        </button>
      </header>
    );
  };

  export default Header;