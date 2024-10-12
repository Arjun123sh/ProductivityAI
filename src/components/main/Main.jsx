import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // Function to handle card clicks and set the prompt input
  const handleCardClick = (prompt) => {
    setInput(prompt); // Set the input to the prompt of the card
    onSent(); // Automatically send the prompt
  };

  return (
    <div className="main">
      <div className="nav">
        ProductivityAI
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello!.</span>
              </p>
              <p>What would you like to accomplish today?</p>
            </div>

            <div className="cards">
              <div
                className="card"
                onClick={() => handleCardClick("Generate a to-do list for the day")}
              >
                <p>Generate a to-do list for the day</p>
                <img src={assets.compass_icon} alt="TO-DO" />
              </div>
              <div
                className="card"
                onClick={() => handleCardClick("Provide some productivity tips")}
              >
                <p>Provide some productivity tips</p>
                <img src={assets.bulb_icon} alt="Tips" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Help me organize my weekly schedule")
                }
              >
                <p>Help me organize my weekly schedule</p>
                <img src={assets.message_icon} alt="Schedule" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest tools for managing tasks efficiently")
                }
              >
                <p>Suggest tools for managing tasks efficiently</p>
                <img src={assets.code_icon} alt="Tools" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="result" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask something about productivity..."
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Note: Information provided may not be 100% accurate. Always verify
            important details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
