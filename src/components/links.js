import "../App.css";

function Links(link1, link2) {
  return (
    <p>
      Check out my <a href={link1}> LinkedIn</a> or my{" "}
      <a href={link2}>Github</a>!
    </p>
  );
}

export default Links;
