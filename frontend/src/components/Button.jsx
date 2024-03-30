// eslint-disable-next-line react/prop-types
const Button = ({ handleClick }) => {
  return (

    <div className="p-2 bg-blue-600 rounded cursor-pointer hover:bg-indigo-500 ">

      <button className="text-white hover:text-green-300" onClick={handleClick}>

        Print/Download

      </button>

    </div>

  )
}

export default Button;