import React from 'react';
import './QuestionAnswer.css';

const QuestionAnswer = () => {
    return (
        <div className='container'>
            <div className='qa-container'>
                <h4>Question - Answer</h4>
                <h6>(1) How React works?</h6>
                <p>Ans: <br />
                    React is a JavaScript library that helps to make reusable code for the UI. React works by different components, components are built for varieties piece of web interfaces. Actual DOM manipulation is slower than Virtual DOM manipulation, react creates virtual Dom before actual DOM. Which makes React faster than actual DOM manipulation. React's elements are object, they are responsible to make quicker action rather than HTML and Javascript though they are both part of React that called JSX. One of the reason of popularity of React that here HTML and Javascript code can write in same file in dynamic, reusable way.
                </p>
                <h6>(2) Difference between props and state?</h6>
                <p>Ans: <br />
                    <strong>Props</strong>
                    <li>Prosps used data passed from one component to another component.</li>
                    <li>Props cannot be change it only helps to passing data.</li>
                    <li>Props are read only.</li>
                    <li>Props can components reusable.</li>
                    <strong>State</strong>
                    <li>State are used in same component</li>
                    <li>State used for changing value in component, which change the state of any action.</li>
                    <li>State can be modified.</li>
                    <li>State used in same component that's why it depends on need to reuse of component but reusing not depends on state.</li>
                </p>
                <h6>(3) How useState works?</h6>
                <p>Ans: <br />
                    useState is a hook that required state variables in functional components. We can pass one initial state, it returns a variabele current state value, it also remembered can be empty initial value and another state will update current value. After set useState it can be use anywhere in our component. useState hook can be use for object, array, boolean, string, number and these kind of works. Many useState hook can be use in a component.
                </p>
            </div>
        </div>
    );
};

export default QuestionAnswer;