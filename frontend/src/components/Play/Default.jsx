function Default({togglePopup, setGameMode}) {
  return (
    <>
      <h1 className="text-2xl font-semibold ">
        Get Ready For Challenge!!
      </h1>
      <div className="flex flex-row justify-between">
        <button
          onClick={()=>setGameMode("mode")}
          className="bg-gray-800 hover:bg-gray-900 w-44 text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8 me-5"
        >
          I'm Ready
        </button>
        <button
          onClick={togglePopup}
          className="bg-gray-800 hover:bg-gray-900 w-44 text-white px-8 py-2 rounded-lg font-medium transition-colors mt-8"
        >
          Daily Quest
        </button>
      </div>
    </>
  );
}

export default Default;
