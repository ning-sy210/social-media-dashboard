import ReactToggle from "react-toggle";
import "./Toggle.scss";

type ToggleProps = {
  id: string;
  classname: string;
  includeIcons: boolean;
  title: string;
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({
  id,
  classname,
  includeIcons,
  title,
  checked,
  onChange,
}: ToggleProps) => {
  return (
    <ReactToggle
      id={id}
      className={classname}
      icons={includeIcons}
      title={title}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Toggle;
