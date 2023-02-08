import "./App.css";
import { useState } from "react";
export default function App() {
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(urlString);
  };
  const iframe_logo = "<IFrame/>";
  const [Url, setUrl] = useState("");
  const [updated, setUpdated] = useState(Url);
  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleClick = () => {
    setUpdated(Url);
    if (Url === "") {
      handleReset();
    } else if (!isValidUrl(Url)) {
      handleReset();
    }
  };
  const handleReset = () => {
    setUpdated("");
  };
  return (
    <div className="App">
      <h1>
        <code className="top_iframe_logo">{iframe_logo}</code>
        <code> Previewer</code>
      </h1>
      <header className="App-header">
        <div className="main">
          <div className="input">
            <input
              className="url_input"
              type="url"
              id="input"
              onChange={handleChange}
              placeholder="https://example.com"
              value={Url}
            />
            <button id="btn" className="preview_btn" onClick={handleClick}>
              Preview
            </button>
            <button id="btn" className="preview_btn" onClick={handleReset}>
              Reset
            </button>
            <div className="iframe">
              <h1>
                Insert your URL and click on <code>Preview</code> to see the
                result.
              </h1>
              <iframe src={updated} title="Iframe" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}