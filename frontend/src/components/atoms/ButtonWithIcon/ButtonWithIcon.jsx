import Image from 'next/image'

const ButtonWithIcon = ({ iconPath, addClasses, clickHandler }) => {
  return (
    <button className={`button-with-icon ${addClasses}`} onClick={clickHandler} >
      <Image src={iconPath} alt="" height={48} width={40} />
    </button>
  )
}

export default ButtonWithIcon
