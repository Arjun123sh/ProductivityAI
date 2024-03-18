import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User" />
        </div>

        <div className="main-container">
          {!showResult 
          ?<>
            <div className="greet">
              <p><span>Hello! Sk Nafis Akbar.</span></p>
              <p>How Can I Help You Today?</p>
            </div>

            <div className="cards">

              <div className="card">
                <p>Suggest me some beautiful sjdcb sjicbu knfvhi</p>
                <img src={assets.compass_icon} alt="COMPASS" />
              </div>
              <div className="card">
                <p>vkeiuvhi cveiwvc ewivciuewcv ejwbcruigcuy eiurciwhcvi</p>
                <img src={assets.bulb_icon} alt="COMPASS" />
              </div>
              <div className="card">
                <p>iwdcuiwybdc wicwuircuy wicuiwc wcbwuibc wuchwiubc sucwgci</p>
                <img src={assets.message_icon} alt="COMPASS" />
              </div>
              <div className="card">
                <p>sjidciwch wiucwiuc wiucbbuiwec wicbiwuebc wjkcbwuicb</p>
                <img src={assets.code_icon} alt="COMPASS" />
              </div>
            </div>
          </>
          : <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="hh-ii" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading 
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            </div>
          </div>
          }

            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="g4t" />
                  <img src={assets.mic_icon} alt="db" />
                  {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="sfkjv" /> : null} 
                </div>
              </div>
              <p className="bottom-info">
                  Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main