import { IParams } from "../../interfaces/interfaces";

const ItemStatusFilter = ({ all, done, active }: IParams) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary"
        key="all"
        onClick={() => {
          all();
        }}
      >
        Все
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        key="done"
        onClick={() => {
          done();
        }}
      >
        Готово
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        key="active"
        onClick={() => {
          active();
        }}
      >
        Активно
      </button>
    </div>
  );
};

export default ItemStatusFilter;
