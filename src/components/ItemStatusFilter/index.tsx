import { showAll, showActive, showDone } from "../../store/actions";
import Button from "./Button";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button label={"Все"} handler={showAll} />
      <Button label={"Готово"} handler={showDone} />
      <Button label={"Активно"} handler={showActive} />
    </div>
  );
};

export default ItemStatusFilter;
