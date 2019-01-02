import './Input.css'

/**
 * Input is a DOM input element with a label.
 */

export default function ({ label, value, placeholder, onChange }) {
  return <div class="Input">
    <p>{label}</p>
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value} />
  </div>
}
