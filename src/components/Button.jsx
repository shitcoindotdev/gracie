const Button = (props) => {
  return (
    <a
      href={props.href}
      target={props.target}
      className={`flex h-10 px-6 lg:text-[20px] items-center justify-center  rounded-full text-[14px] font-extrabold transition duration-300 ease-in-out w-fit border- xl:px-4  ${
        props.blue
          ? 'text-[#f4f4f4] bg-[#08388b]'
          : 'text-white font-extrabold bg-pump-green'
      } ${props.classNames}`}
    >
      <span
        className={`${props.textClasses} flex items-center justify-center gap-2`}
      >
        {props.text}
      </span>
    </a>
  )
}

export default Button
