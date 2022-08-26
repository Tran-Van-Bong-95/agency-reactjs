import React, { useState } from 'react'
import './freequency.css'
import Question from './Question'
import data from './data'

function FreeQuencyQuestion() {
  const [questions, setQuestions] = useState(data)

  return (
    <section id='freequency-question'>
      <div className='title-services'>
        <h1>FREEQUENCY QUESTIONS</h1>
        <div className='underline-services'>
          <span style={{ width: '65px' }}></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span style={{ width: '65px' }}></span>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='content'>
          <div>
            {questions.slice(0, 3).map((question) => {
              return (
                <Question
                  key={question.id}
                  info={question.info}
                  title={question.title}
                />
              )
            })}
          </div>
          <div>
            {questions.slice(3).map((question) => {
              return (
                <Question
                  key={question.id}
                  info={question.info}
                  title={question.title}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeQuencyQuestion
