import Card from "../Components/Card";
import CardLoder from "../Loder/CardLoder";
import Error from "../Loder/Error";
import { useGetBooksQuery } from "../Redux/api/apiSlice";
import { IBook } from "../Sheared/Types/globalTypes";

const Home = () => {
  const { data: allBook, isError, isLoading } = useGetBooksQuery(undefined);

  // what to decide
  let content;
  if (isLoading) {
    content = (
      <>
        <CardLoder />
        <CardLoder />
        <CardLoder />
        <CardLoder />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="there was an error" />;
  }

  if (!isLoading && !isError && allBook?.data?.length === 0) {
    content = <p>Not error but Data is Not found</p>;
  }

  if (!isLoading && !isError && allBook?.data?.length > 0) {
    content = allBook?.data?.map((bookData: IBook) => (
      <Card key={bookData._id} bookData={bookData} />
    ));
  }

  return (
    <>
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl  grid-cols-3 gap-4 p-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {content}
        </div>
      </section>
    </>
  );
};

export default Home;
