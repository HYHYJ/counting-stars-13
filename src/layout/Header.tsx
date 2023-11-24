import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="relative z-10">
      <div className="w-full border-b-2 flex justify-center fixed h-[96px] bg-white">
        <div className=" w-4/5 ">
          <h1 className="sr-only">별해달</h1>
          <nav className="flex gap-9 justify-between">
            <ul className="w-4/10 flex items-center gap-14 font-bold">
              <li className="px-2 py-5">
                <Link to="/brand">Brand</Link>
              </li>
              <li className="group/item  px-2 py-5 relative">
                <Link to="/shop">Shop</Link>
                <div className="group/edit group-hover/item:visible  invisible  absolute bg-white rounded-md py-1 border w-36 text-center text-sm font-medium left-[-40px] mt-2">
                  <Link to="" className="block py-1">
                    디저트/케이크
                  </Link>
                  <Link to="" className="block py-1">
                    자연식/특식
                  </Link>
                  <Link to="" className="block py-1">
                    육포/우유껌
                  </Link>
                  <Link to="" className="block py-1">
                    천연껌/뼈간식
                  </Link>
                  <Link to="" className="block py-1">
                    파티용품/굿즈
                  </Link>
                </div>
              </li>

              <li className="group/item  px-2 py-5 relative">
                <Link to="/community ">Community</Link>

                <div className=" group/edit group-hover/item:visible  invisible  absolute bg-white rounded-md py-1 border w-32 text-center text-sm font-medium  left-[-13px] mt-2">
                  <Link to="/community" className="block py-1">
                    Notice
                  </Link>
                  <Link to="/qna" className="block py-1">
                    Q&A
                  </Link>
                  <Link to="/review" className="block py-1">
                    Review
                  </Link>
                </div>
              </li>
            </ul>
            <Link to="/" aria-label="홈페이지로 가기" className="mx-12">
              <img src="/logoChar.png" className="min-w-[90px] w-[90px]" />
            </Link>
            {/* <button aria-label="홈페이지로 가기" ></button> */}
            <div className="flex gap-4 relative items-center">
              <ul className="flex w-4/10 text-xs items-center gap-5">
                <li className="min-w-[32px]">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="min-w-[45px]">
                  <Link to="/join">회원가입</Link>
                </li>
                <li className="min-w-[45px]">
                  <Link to="/myCart">장바구니</Link>
                </li>
                <li className="min-w-[45px]">
                  <Link to="/myOrder">주문조회</Link>
                </li>
                <li className="min-w-[49px]">
                  <Link to="/myShopping">+마이쇼핑</Link>
                </li>
              </ul>
              <Link
                to="/search"
                aria-label="검색 버튼"
                className="inline-block"
              >
                <img
                  src="/headerSearch.png"
                  className="min-w-[20px] w-[20px]"
                />
              </Link>
              {/* <form className="flex justify-around  w-[70%] h-[40%] absolute bottom-[-1px]  right-0 border-starPink border-[1px] rounded-xl z-30">
                <input
                  type="search"
                  placeholder="검색"
                  className="w-[70%] mx-2 "
                />
                <button
                  aria-label="검색 버튼"
                  className="text-end mt-1 w-[15%]"
                >
                  <img
                    src="/headerSearch.png"
                    width="75%"
                    className="w-[50%]"
                  />
                </button>
              </form> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
