### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?</br>
React Router is a JavaScript framework. The purpose of it is to handle routing in single-page applications. Single-page applications allows you to view different pages without reloading.

- What is a single page application?</br>
Single-page application loads a single HTML page, updates its content without reloading the entire webpage

- What are some differences between client side and server side routing?</br>
Client-side routing happens on the browser level, while server-side routing involves routing to a server for each new-page request. Client side routing is much faster.

- What are two ways of handling redirects with React Router? When would you use each?</br>
First is using <Redirect> component. Second is using history.push(). <Redirect> will replace the current location with a new location in the history stack, working like a server-side redirect. Whereas history.push pushes a new entry into the history stack. You would use <Redirect> as you render logic and have conditional redirection. You would use history.push() when you have event triggers, such as clicking on a button. 

- What are two different ways to handle page-not-found user experiences using React Router?</br>
First is to create a catch-all route. Second is to use a custom 404 component, then render it when no routes match. 

- How do you grab URL parameters from within a component using React Router?</br>
You would use useParams hook from react-router-dom.

- What is context in React? When would you use it?</br>
Context in React is a way to pass data down a component tree without having to resort to passing props down through every level. Context is useful when data needs to be shared across multiple components that are not directly related to each other.

- Describe some differences between class-based components and function
  components in React.</br>
Class-based components use class syntax and lifecycle methods, whereas function components would use more concise hooks. Function components are widely used in React due to simplicity.

- What are some of the problems that hooks were designed to solve?</br>
React hooks such as:</br>
useState: simplifies state management in functional components. This hook provides an easy way to initialize state and update state. </br>
useEffect: combines life-cycle methods such as componentDidMount, componentDidUpdate, componentWillUnmout into a single API. This simplifies data fecthing.</br>
useRef: simplifies access to DOM elements and mutable values that persist across renders.</br>



