const CardLoder = () => {
  return (
    <>
      <div className="rounded-xl bg-gray-50 p-2 w-[265px]">
        <div>
          <div className="h-96 bg-gray-300 w-full rounded-xl mb-4"></div>

          <div className="mt-1 p-2">
            <h2 className="bg-gray-300 px-10 py-2"></h2>
            <p className="mt-1 bg-gray-300 px-10 py-2"></p>

            <div className="my-2 flex items-end justify-between">
              <p className="mt-1 bg-gray-300 px-10 py-1"></p>
              <p className="mt-1 bg-gray-300 px-10 py-1 rounded-lg"></p>
            </div>

            <div className="flex justify-center space-x-1.5 rounded-lg bg-gray-300 px-4 py-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLoder;
