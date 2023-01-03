import React from 'react';

const Result = ({data}) => {
  console.log(data);
    return (
      <div className="map">
        {data?.length > 0 &&
          data?.map((da, index) => (
            <div key={index} className="show">
              <span>{da?.displayLink}</span>
              <a href={da?.link}>{da?.title}</a>
              <p>{da?.snippet}</p>
            </div>
          ))}
      </div>
    );
};

export default Result;