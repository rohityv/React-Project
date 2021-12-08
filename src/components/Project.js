import React, {Fragment, useState, useEffect} from "react";
import TvShowInfo from "./TvShowInfo";


export default function Project() {
  // -----Consume Api -----

  const [apidata, setApiData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuote(count);
  }, [count]);

  const nextPage = function () {
    setCount(count + 1);
  };

  const prevPage = function () {
    setCount(count - 1);
  };

  const getQuote = async function (pageNum) {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows?page=${pageNum}`);
      const data = await res.json();

      //Or  const data = await Api.fetchIndividualPage(pageNum)

      console.log(data);
      setApiData(data);
      setLoading(false);

      return setApiData(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <TvShowInfo
          allData={apidata}
          nextPage={nextPage}
          prevPage={prevPage}
          pageCount={count}
          isLoading={loading}
        />
      </div>
    </Fragment>
  );
}
