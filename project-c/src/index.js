import './input.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home/Index';
import Error from './routes/Error/Error';
import Test from './routes/Test/Test';
import Contact from './routes/Contact/Index';
import NewProject from './routes/NewProject/Index';
import WhoWeAre from './routes/WhoWeAre/Index';
import Projects from './routes/Projects/Index';
import Project from './routes/Project/Index';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/teste',
          element: <Test />
        },
        {
          path: '/who_we_are',
          element: <WhoWeAre />
        },
        {
          path: '/contacts',
          element: <Contact />
        },
        {
          path: '/new_project',
          element: <NewProject />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/project/:id',
          element: <Project/>
        },
      ],
      errorElement: <Error />
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
