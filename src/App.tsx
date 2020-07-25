import React, { useState } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import './App.css';
export default function App() {
  const firstValue = 50;
  const sliderStart = 0;
  const sliderEnd = 100;
  const stepValue = 2;
  const width = '80%';
  const height = '100vh';
  const [value, setValue] = useState(firstValue);
  const [percent, setPercent] = useState(0);

  // let bcolor = 'transparent'
  // let bcolor = 'linear-gradient(-50deg, #70BEFF 0%, #6999DA 40%, #BAE2FF 79%, #D3E9F8 100%);'
  // if(percent >= 0) {
  //   bcolor = 'linear-gradient(-37deg, #A67F66 0%, #C49A7F 19%, #A2795E 40%, #A47C62 66%, #EBC5A4 100%);'
  // }
  // if(percent > 25) {
  //   bcolor = 'linear-gradient(-50deg, #9FA6AC 0%, #868C94 40%, #C4CBD1 79%, #B3BBC0 100%);'
  // } 
  // if(percent > 50) {
  //   bcolor = 'linear-gradient(-25deg, #EFDA86 0%, #C69637 40%, #FEF2AE 79%, #D3CC72 100%);'
  // }
  // if(percent === 100) {
  //   bcolor = 'linear-gradient(-50deg, #70BEFF 0%, #6999DA 40%, #BAE2FF 79%, #D3E9F8 100%);'
  // }

  let bcolor = 'b1'
  if(percent >= 0) {
    bcolor = 'b2'
  }
  if(percent > 25) {
    bcolor = 'b3'
  } 
  if(percent > 50) {
    bcolor = 'b4'
  }
  if(percent === 100) {
    bcolor = 'b1'
  }
  // const styles = getStyles(bcolor);
  const onSlide = (render: any, handle: any, value: any, un: any, percent: any) => {
    setValue(value[0]);
    setPercent(percent[0]);
  };
  const publish = () => {
    alert("Sending value")
  }
  console.log(percent);
  // console.log(bcolor);

  return (
    <div className="App" style={{marginTop: "100px", position: 'relative', width: width, height: height}}>
      <div style={{width: "100%", height: "100%", marginLeft: '12%'}}>
      <div className={`calculate ${bcolor}`}>
        <div className="calculate_wrap">
        <div className="calculate_center">
          <div className="calculate_amount">
            Publish value
          </div>
          <p className="calculate_text">
            <input type="text" value={value} id="text" className="calculate_input"></input>
          </p>
        </div>
        </div>
      </div>
      <div className="calculate_slider">
          <div style={{
            // width: "100%",
            // marginLeft: "10%"
            }}>
            <Nouislider
              range={{ min: sliderStart, max: sliderEnd }}
              start={firstValue}
              connect={[true, false]}
              onSlide={onSlide}
              step={+stepValue}
              />
          </div>
        </div>
      <div className="calculate_btn_wrapper">
        <button className={`calculate_btn ${bcolor}`}
          // disabled={!props.isConnected}
          onClick={publish}
          >Send</button>
      </div>
      </div>
    </div>
  );
}

// const getStyles = stylesFactory((bcolor: any) => {
//   return {
//     calculate: css`
//       text-align: center;
//       background-image: ${bcolor};
//       padding-bottom: 20px;
//       width: 100%;
//       height: 70%;
//       max-height: 170px;
//       border-radius: 20px 20px 0 0;
//       border-radius: 20px 20px 0px 0px;
//     `,
//     calculate_wrap: css`
//       height: 100%;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     `,
//     calculate_center: css`
//       width: 100%;
//       height: 100%;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       // border-radius: 20px 20px 0 0;
//       // border-radius: 20px 20px 0px 0px;
//   `,
//     calculate_amount: css`
//       color: rgba(255,255,255,0.6);
//       font-size: 18px;
//       font-weight: 400;
//       // font-family: Roboto, sans-serif;
//       line-height: 26px;
//     `,
//     calculate_text: css`
//       color: #fff;
//       font-weight: 700;
//       font-family: Roboto, sans-serif;
//       font-size: 45px;
//       margin: 0;
//     `,
//     calculate_input: css`
//       background: transparent;
//       border: none;
//       color: #fff;
//       font-weight: 700;
//       font-family: Roboto, sans-serif;
//       font-size: 45px;
//       // max-width: 170px;
//       outline: none;
//       // width: 154px;
//       text-align: center;
//     `,
//     calculate_slider: css`
//       padding: 0 60px;
//     `,
//     calculate_inner: css`
//       display: flex;
//       justify-content: space-between;
//       padding: 0 90px;
//     `,
//     calculate_block: css`
//       font-size: 14px;
//       font-weight: 400;
//       color: #a1afc3;
//       text-align: center;
//       line-height: 26px;
//     `,
//     calculate_block_span: css`
//       font-weight: 700;
//       font-size: 25px;
//       // color: #1a273a;
//     `,
//     calculate_btn: css`
//     & {
//       font-weight: 700;
//       text-decoration: none;
//       text-transform: uppercase;
//       color: rgba(255, 255, 255, 0.6);
//       background: ${bcolor};
//       width: auto;
//       display: inline-block;
//       padding: 10px 20px;
//       border-radius: 10px;
//       border: none;
//     }
//     &:hover {
//       opacity: 0.7
//     }
//     `,
//     calculate_btn_wrapper: css`
//       width: 100%;
//       height: 20%;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       margin: 20px 0;
//     `,
//   };
// });

