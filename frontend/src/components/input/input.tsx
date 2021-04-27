import './input.scss';

type InputType
  = "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

/**
 * Customized input for one room
 * 
 * @param param Attributes required by input component
 * @returns Input component
 */
export default function Input({
  placeholder = '',
  onChange,
  gridArea = undefined,
  type = 'text'
}: {
  placeholder: string,
  onChange: (text: string) => void,
  gridArea?: string | undefined,
  type?: InputType
}) {
  return (
    <input
      className='room-input'
      placeholder={placeholder}
      style={{ gridArea: gridArea }}
      onChange={e => onChange(e.target.value)}
      type={type}
    />
  );
};
