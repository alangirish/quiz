export const jsQuizzes = {
    questions: [
        {
            question: "React is a JavaScript library for building?",
            choices: [
                "Database",
                "Connectivity",
                "User Interface",
                "Design Platform"
            ],
            type: "MCQs",
            correctAnswer: "User Interface"
        },
        {
            question: "Which of the following is NOT a core concept in React?",
            choices: [
                "Components",
                "Props",
                "State",
                "Loops"
            ],
            type: "MCQs",
            correctAnswer: "Loops"
        },
        {
            question: "JSX stands for ___.",
            choices: [
                "JavaScript XML",
                "JavaScript X-ray",
                "JavaScript Extra",
                "JavaScript Extension"
            ],
            type: "MCQs",
            correctAnswer: "JavaScript XML"
        },
        {
            question: "Data is passed from parent to child components in React using ___.",
            choices: [
                "props",
                "state",
                "context",
                "hooks"
            ],
            type: "MCQs",
            correctAnswer: "props"
        },
        {
            question: "The hook used to manage component state in React is ___.",
            choices: [
                "useState",
                "useEffect",
                "useContext",
                "useReducer"
            ],
            type: "MCQs",
            correctAnswer: "useState"
        },
        {
            question: "The process of updating the UI in React without re-rendering the entire component tree is called ___.",
            choices: [
                "reconciliation",
                "rendering",
                "re-rendering",
                "refactoring"
            ],
            type: "MCQs",
            correctAnswer: "reconciliation"
        },
        {
            question: "What is the syntax for creating a functional component in React?",
            choices: [
                "class MyComponent extends Component {}",
                "function MyComponent() {}",
                "const MyComponent = () => {}",
                "All of the above"
            ],
            type: "MCQs",
            correctAnswer: "const MyComponent = () => {}"
        },
        {
            question: "How do you conditionally render elements in React?",
            choices: [
                "Using the if statement",
                "Using the ternary operator",
                "Using the switch statement",
                "All of the above"
            ],
            type: "MCQs",
            correctAnswer: "Using the ternary operator"
        },
        {
            question: "Which hook is used to perform side effects in React?",
            choices: [
                "useEffect",
                "useState",
                "useContext",
                "useReducer"
            ],
            type: "MCQs",
            correctAnswer: "useEffect"
        }
    ]
};


export const initialResult = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
};