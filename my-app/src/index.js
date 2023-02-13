import React from "react";
import ReactDOM from "react-dom/client";

const Person = () => <h1>John Doe</h1>;
const Message = () => <p>This is my story and I am sticking with it</p>

function App() {
	return (<div>
		<Person />
		<Message />

	</div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);



