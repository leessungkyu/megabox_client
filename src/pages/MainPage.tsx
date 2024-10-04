import MovieList from "../components/login/organism/MovieList";

const MainPage = () => {
    return <div>
        <div className="w-fit h-[50px]"></div>
    <div className="flex justify-center">
        <div>
            <div className="flex relative h-10">
                <div className="w-full text-center mb-5 text-base"><span className="p-2 border-b-2 border-gray-500">박스오피스</span></div>
                <div className="w-[100px] my-auto text-sm cursor-pointer">더보기 +</div>  
                {/* absolute right-0 text-sm */}
            </div>
            <MovieList />
        </div>
    </div>
    <div className="w-fit h-[50px]"></div>
</div>
}

export default MainPage;
