import Counter from "./Counter";

function ErrorBoundary() {
  return (
    <div className="container">
      <h1> Error Boundary Page</h1>
      <h4>The counter should not exceed the number 10</h4>
      <Counter
      
       />
    </div>
  );
}

export default ErrorBoundary;
