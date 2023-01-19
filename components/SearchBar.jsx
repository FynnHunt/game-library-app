import styled from "styled-components";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { TextInput } from "grommet";
import { colors } from "../helpers/colors";
import { TextField, Autocomplete } from "@mui/material";

const SuggestionBox = styled.div`
  position: absolute;
  width: 275px;
  border: 2px solid black;
  margin-top: -55px;
  margin-left: -12.5px;
  border-radius: 25px;
  padding-top: 60px;
`;

const Suggestions = styled.div`
  padding: 0 20px;
  max-height: 300px;
  overflow-y: scroll;
  a {
    text-decoration: none;
  }
  a:hover {
    color: purple;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SearchBar = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const searchGames = (query) => {
    fetch(`/api/suggestions?q=${query}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setSuggestions(JSON.parse(data.results)));
  };

  const suggestionsCallback = useMemo(
    () =>
      debounce(async (query) => {
        searchGames(query);
      }, 500),
    []
  );

  console.log(suggestions);

  return (
    <div>
      {/* <TextInput
        onChange={(e) => suggestionsCallback(e.target.value)}
        placeholder="Search for a game..."
        style={{ background: `${colors.lightGrey}` }}
        suggestions={suggestions.map((suggestion) => suggestion.name)}
        onSuggestionSelect={(suggestion) => {
          console.log(suggestion);
          router.push(`/${suggestion}`);
        }}
      /> */}
      {/* {showSuggestionBox && suggestions.length > 1 && (
        <SuggestionBox>
          <Suggestions>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} style={{ padding: "5px 0" }}>
                <a href={`/game/${encodeURIComponent(suggestion.slug)}`}>
                  {suggestion.name}
                </a>
              </div>
            ))}
          </Suggestions>
        </SuggestionBox>
      )} */}
      <Autocomplete
        onKeyUp={(event, values) => {
          suggestionsCallback(event.target.value);
          console.log(event.target.value);
        }}
        disablePortal
        id="combo-box-demo"
        options={suggestions.map((suggestion) => suggestion.name)}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Games" />}
        onSelect={(e) => {
          console.log(
            suggestions.find((sug) => sug.name === e.target.value)?.slug
          );
          const slug = suggestions.find(
            (sug) => sug.name === e.target.value
          )?.slug;
          if (slug) {
            window.location.href = `/game/${slug}`;
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
