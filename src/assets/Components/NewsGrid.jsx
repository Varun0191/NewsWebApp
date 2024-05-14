const NewsGrid = ({ news }) => {
    return (
      <div className="grid gap-4 lg:grid-cols-4">
        {news.map((item) => (
           <div className="w-full lg:w-auto rounded-lg shadow-md mt-16" key={item.url}>
            <img
              className="object-cover w-full h-48"
              src={item.urlToImage}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold text-black-600">
                <a href={item.url}>{item.title}</a>
              </h4>
              <p className="mb-5 mt-3.5 leading-normal content-text">{item.content}</p>
              <div className="flex justify-between items-center">
                <div className="text-black-200">Published: {formatDate(item.publishedAt)}</div>
                <div className="font-semibold  author ">Author: {item.author ? item.author : 'Unknown Author'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  
  export default NewsGrid;
  