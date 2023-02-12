import "../css_tyles/card/card-list-container.css";

const Card = ({m}) => {
    const { name, email, id } = m;
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
}

export default Card;
