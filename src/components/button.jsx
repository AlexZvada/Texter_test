export default function Button(props) {
  const { active, setActive } = props;
  return (
    <button className="btn" onClick={()=>{setActive(!active)}}>{active ? "Назад" :"Додати"}</button>
  );
}
