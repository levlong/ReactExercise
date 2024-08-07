import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Homework !</h1>
       <nav>
          <ul>
            <li>
              <Link to={`/day-1/E1`}>Day01 - E1</Link>
            </li>
             <li>
              <Link to={`/day-1/E2`}>Day01 - E2</Link>
            </li>
            <li>
              <Link to={`/day-2/E1`}>Day02 - E1</Link>
            </li>
            <li>
              <Link to={`/day-2/E2`}>Day02 - E2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}