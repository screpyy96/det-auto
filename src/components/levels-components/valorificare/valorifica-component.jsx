import React from 'react'

export const ValorificaComponent = ({level1}) => {

  return (
    <div>
      <div>
        <img src={level1.imgPath} alt="img" width={400}/>
      </div>
      <h2>{level1.title}</h2>
      <h4>{level1.subTitle}</h4>
      <h4>{level1.header}</h4>
      <h6>{level1.description.map((i, key) => {
        return (
          <div key={key}>
            <ol>
              <li>
                {i}
              </li>
            </ol>
          </div>
        )
      })}</h6>
      <h4>
        {level1.sealent}
      </h4>
      <h5>
        {level1.subDescription.title}
      </h5>
      <h6>
        {level1.subDescription.description.map((i, key) => {
          return (
            <div key={key}>
              <ul>
                <li>{i}</li>
              </ul>
            </div>
          )
        })}
      </h6>
      <h6>
        <h2>{level1.title1}</h2>
        {level1.whyChooseUS.map((i, key) => {
          return (
            <div key={key}>
              <ul>
                <li>{i}</li>
              </ul>
            </div>
          )
        })}
      </h6>

    </div>
  )
}
