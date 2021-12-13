import { removeSelectedItem, toggleImportant } from "../../store/actions";
import { TodoListItemI } from "../../interfaces/interfaces";
import Trash from "../icons/Trash";
import Exclamation from "../icons/Exclamation";
import { Button } from "./Button";

export const Buttons = ({ item }: TodoListItemI) => {
  return (
    <>
      <Button
        component={<Exclamation />}
        item={item}
        classes={"btn btn-outline-success btn-sm float-end"}
        handler={toggleImportant}
      />
      <Button
        component={<Trash />}
        item={item}
        handler={removeSelectedItem}
        classes={"btn btn-outline-danger btn-sm float-end"}
      />
    </>
  );
};
