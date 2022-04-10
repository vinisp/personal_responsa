type Props = {
  title: string;
  children?: JSX.Element;
};

export function Box({ title, children }: Props) {
  return (
    <div
      style={{
        border: "solid 2px red",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: "25px 4px",
      }}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}
