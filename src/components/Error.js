import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
  return (
    <>
     <h2> {err.status}  !  {err.statusText} </h2>
    </>
  )
}

export default Error;

/*
import React, { useEffect } from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  useEffect(() => {
    const animateTitle = () => {
      const title = document.querySelector('.title');
      title.classList.add('animate');
    };
    animateTitle();
  }, []);

  return (
    <div className="not-found-page">
      <h1 className="title">404 Not Found</h1>
      <p className="message">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;

.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.title {
  font-size: 6rem;
  font-weight: bold;
  color: #555;
  transition: transform 0.5s ease;
}

.animate {
  animation: shake 0.5s linear;
  transform: rotate(-5deg);
}

.message {
  font-size: 2rem;
  color: #555;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

*/