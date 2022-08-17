import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Modal from "../components/Modal";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [nextPage, setNextPage] = useState(2);
  const [currentSearch, setCurrentSearch] = useState("");

  const [isCopied, setCopied] = useState(false);

  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=18";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=18&page=1`;

  const auth =
    process.env.REACT_APP_API_AUTH ||
    "563492ad6f9170000100000182a311b14feb4aadaf4a08a6d9471e9d";

  //fetch from pexels api
  const search = async (url) => {
    setData(null);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });

    //Error Handling
    if (!dataFetch.ok) {
      const message = `An error has occured: ${dataFetch.status}`;
      setData({ status: dataFetch.status });
      throw new Error(message);
    }

    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  //Load More Picture
  const morePicture = async () => {
    let newURL;

    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${nextPage}&per_page=18`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=18&page=${nextPage}`;
    }

    setNextPage(nextPage + 1);

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });

    let parsedData = await dataFetch.json();

    setData(data.concat(parsedData.photos));
  };

  useEffect(() => {
    if (currentSearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch, searchURL]);

  return (
    <div style={{ minHeight: "88vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {!data
          ? "LOADING...."
          : data.status === 400
          ? ""
          : data.length === 0
          ? "No matching results."
          : data.map((d) => {
              return <Picture data={d} key={d.id} setCopied={setCopied} />;
            })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>Load More</button>
      </div>
      <Modal isCopied={isCopied} setCopied={setCopied} />
    </div>
  );
};

export default Home;
