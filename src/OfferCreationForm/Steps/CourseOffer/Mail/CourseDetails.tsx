import React from "react";
import translations from "./translations";

interface ICourseDetails {
  courseName: string;
  courseDescription: string;
  courseIntro: string;
  currentLanguage: string;
  amountOneTimePayment: string;
  otherPaymentAmount: string;
  otherPaymentMethod: string;
  coursePlan: any[];
}

const CourseDetails: React.FC<ICourseDetails> = (props) => {
  const currentTranslation = translations.find(
    (translation) => translation.language === props.currentLanguage
  );

  const convertCurrencyStringToDouble = (currencyString: string) => {
    return Number(currencyString.replace(/[^0-9\.-]+/g, ""));
  };

  return (
    <div>
      <h4>
        <b>{props.courseName}</b>
      </h4>
      <p>
        <i>{props.courseIntro}</i>
      </p>
      <br />
      <p>
        <i>{props.courseDescription}</i>
      </p>
      <p>{currentTranslation?.Price}</p>
      {props.amountOneTimePayment !== undefined && (
        <div>
          <p>
            <b>{props.amountOneTimePayment}</b>
          </p>
          <p>{currentTranslation?.OR}</p>
        </div>
      )}
      {convertCurrencyStringToDouble(props.otherPaymentAmount) > 0 && (
        <p>
          {props.otherPaymentMethod}: <b>{props.otherPaymentAmount}</b>
        </p>
      )}
      {props.otherPaymentAmount !== undefined &&
        convertCurrencyStringToDouble(props.otherPaymentAmount) === 0 && (
          <p>
            <b>{props.otherPaymentAmount}</b>
          </p>
        )}
      <p><b>{currentTranslation?.lessonPlan}</b></p>
      {props.coursePlan.map((lesson) => (
        <div style={{ alignItems: "left", textAlign: "left" }}>
          <p>
            <b>{lesson.title}</b>
          </p>
          <ul>
            <li>{lesson.description}</li>
          </ul>
        </div>
      ))}
      <p><b>{currentTranslation?.availableDates}</b></p>
      <hr></hr>
    </div>
  );
};

export default CourseDetails;
