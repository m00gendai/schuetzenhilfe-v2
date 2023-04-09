import s from "../styles/Target.module.css";

interface targetProps {
  name: string;
}

export default function Target({ name }: targetProps) {
  return (
    <section
      className={s.container}
      style={{ backgroundImage: `url("/${name}.jpg")` }}
    ></section>
  );
}
