import MenuItem from "./MenuItem";

export default function Menulist({ list = [] }) {
  return (
    <ul>
      {list && list.length
        ? list.map((ListItem) => <MenuItem item={ListItem} />)
        : null}
    </ul>
)}