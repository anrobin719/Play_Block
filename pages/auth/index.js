import React from "react";
import Course from "../../components/Course";

const authIndexPage = props => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <Course
      title="이더리움 입문과정"
      sub="이더리움 스마트컨트랙트 작성법과 솔리디티에 대해 학습합니다."
    />
  </div>
);

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Play Block (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
