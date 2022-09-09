import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const CLIENT_ID = "5cb1e9c29d38429e97767f8a253294bf";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINTS = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token ";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtist = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("http://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINTS}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtist}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        ) : (
          <h2>Please Login</h2>
        )}
      </header>
    </div>
  );
}

export default App;
