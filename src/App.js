import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Homework !</h1>
       <nav>
          <ul>
            <li>
              <Link to={`/day-1/1`}>Day01 - E1</Link>
            </li>
            <li>
              <a href={`/day-1/2`}>Your Friend</a>
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