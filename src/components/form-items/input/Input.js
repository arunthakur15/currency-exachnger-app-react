import './Input.module.scss';

export default function Input({type, value, setValue, title}) {
    return (
        <div>
            <label className="label">
                {title}
            </label>
            <br />
            <input className="input" type={type} value={value} onChange={(e) => {
                setValue(e.target.value);
                }} />
        </div>
    )
}