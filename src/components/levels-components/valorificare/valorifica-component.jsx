/* eslint-disable react/prop-types */
import React from 'react';

export const ValorificaComponent = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <img src={data.imgPath} alt="imagine de cct" width={400} />
      </div>
      <h2>{data.title}</h2>
      <h4>{data.subTitle}</h4>
      <h4>{data.header}</h4>
      <h6>
        {data.description.map((i, key) => {
          return (
            <div key={key}>
              <ol>
                <li>{i}</li>
              </ol>
            </div>
          );
        })}
      </h6>
      <h4>{data.sealent}</h4>
      <h5>{data.subDescription.title}</h5>
      <h6>
        {data.subDescription.description.map((i, key) => {
          return (
            <div key={key}>
              <ul>
                <li>{i}</li>
              </ul>
            </div>
          );
        })}
      </h6>
      <h6>
        <p>{data.title1}</p>
        {data.whyChooseUS.map((i, key) => {
          return (
            <div key={key}>
              <ul>
                <li>{i}</li>
              </ul>
            </div>
          );
        })}
      </h6>
    </div>
  );
};
