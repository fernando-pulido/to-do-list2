import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
  type: string
  value: number | string
  className: string
  onChange: void
  onSubmit: void
}

const Form = ({ type, className, value, onChange, onSubmit }: Props) => {
  return (
    <form>
      <input type={type} value={value} className={className}></input>
      <button>save</button>
    </form>
  )
}
export default Form
