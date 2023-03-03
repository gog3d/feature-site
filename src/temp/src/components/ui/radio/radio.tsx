import { FC, useContext, useEffect, useRef } from "react";
import styles from "./radio.module.css";
import { AppContext } from "../../../services/context";

interface IPropsRadio {
  value: string;
  name: string;
}
const Radio: FC<IPropsRadio> = ({ value, name }) => {
  const radioRef = useRef<HTMLInputElement | null>(null);
  const { context, setContext } = useContext(AppContext);

  const handleRadio = () => {
    if (radioRef.current === null) return;
    setContext({ ...context, course: radioRef.current.value });
  };

  useEffect(() => {
    if (context.course === radioRef.current?.value)
      radioRef.current.checked = true;
  }, [context.course]);

  return (
    <div className={styles.radio}>
      <input
        id={value}
        type="radio"
        ref={radioRef}
        name="category"
        value={value}
        onChange={handleRadio}
      />
      <label htmlFor={value}>{name}</label>
    </div>
  );
};

export default Radio;
