import { buttons } from "../../utils/buttons";

export const showButtons = buttons.map(({ name, label }) => {
  return (
    <button type="button" className="btn btn-outline-secondary" key={name}>
      {label}
    </button>
  );
});
