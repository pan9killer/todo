const ItemStatusFilter = () => {
  const buttons = [
    { name: "all", label: "Все" },
    { name: "done", label: "Готово" },
    { name: "active", label: "Активно" },
  ];

  const buttonss = buttons.map(({ name, label }: any) => {
    return (
      <button type="button" className="btn btn-outline-secondary" key={name}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttonss}</div>;
};

export default ItemStatusFilter;
