import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import lunr from "lunr";

import { useInput } from "../hooks/input";

import { normaliseStr } from "../utils/normalize";
import SearchResult from "./search-result";

const RESULTS_LIMIT = 7;
const SEARCH_FIELDS = ["title", "description", "keywords", "partners"];
const SEARCH_EXAMPLES = [
  "quotient familial",
  "revenu fiscal de référence",
  "cadastre",
  "…"
];

const normalise = builder => {
  // Define a pipeline function that normalise string
  const pipelineFunction = token => {
    return token.update(normaliseStr);
  };

  // Register the pipeline function so the index can be serialised
  lunr.Pipeline.registerFunction(pipelineFunction, "normalise");

  // Add the pipeline function to both the indexing pipeline and the
  // searching pipeline
  builder.pipeline.before(lunr.stemmer, pipelineFunction);
};

const APISearchBar = ({ q, list }) => {
  const [input, setInput] = useInput(q);
  const [results, setResults] = useState([]);
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    if (list && list.length > 0) {
      const idx = lunr(function() {
        this.ref("url");
        SEARCH_FIELDS.map(field => this.field(field));

        this.use(normalise);

        list.forEach(function(doc) {
          this.add(doc);
        }, this);
      });
      setIdx(idx);
    }
  }, [list]);

  useEffect(() => {
    if (input && idx) {
      const normalise = normaliseStr(input).replace(/:/g, ""); // Remove ":" to avoid lurn fields search
      const lunrResults = idx.search(`${normalise}* ${normalise}`);
      const results = list.filter(api =>
        lunrResults.slice(0, RESULTS_LIMIT).find(r => r.ref === api.url)
      );
      setResults(results);
    } else {
      setResults([]);
    }
  }, [input, idx]);

  return (
    <>
      <div className="ui search">
        <div className="ui fluid left icon input">
          <input
            value={input}
            className="prompt"
            placeholder={SEARCH_EXAMPLES.join(", ")}
            type="search"
            onChange={setInput}
          />
          <i className="search icon" />
        </div>

        <div
          className={`results transition ${
            input.length > 0 ? "visible" : "hidden"
          }`}
        >
          {input.length > 0 && results.length === 0 && (
            <div className="ui message empty">
              <div className="ui header">Aucun résultat</div>
              <div className="ui description">
                Votre recherche n'a donné aucun résultat
              </div>
            </div>
          )}

          {results.map(api => (
            <SearchResult key={api.title} api={api} />
          ))}
        </div>

        <style jsx>{`
          input:focus::-webkit-input-placeholder {
            color: transparent !important;
          }
          input:focus::-moz-placeholder {
            color: transparent !important;
          }

          .input {
            min-width: 60% !important;
            margin-bottom: 3% !important;
          }

          .results {
            width: 100% !important;
          }

          .results .result-highlight {
            font-weight: 600;
            color: black;
          }
        `}</style>
      </div>
    </>
  );
};

APISearchBar.propTypes = {
  q: PropTypes.string,
  list: PropTypes.array.isRequired
};

export default APISearchBar;
