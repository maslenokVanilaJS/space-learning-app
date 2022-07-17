export const AuthorDate = ({ props }) => {
  return (
      <div className="Box">
          <h2>{props.author}</h2>
          <h2>{props.date}</h2>
      </div>
  ) ;
};