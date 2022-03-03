import './Select.module.scss'

export default function Select({title,value,setValue,data}) {
    return(
        <div>
            <label className="label">{title}</label>
            <br/>
            <select className='select' value={value} onChange={(e) => setValue(e.target.value)}>
                <option className='option' value={''}>
                    No item selected
                </option>
                {data.map((val,i) => <option className='option' key={i} value={val}>{val}</option>)}
            </select>
        </div>
    )
}