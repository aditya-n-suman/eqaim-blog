import { useRouter } from 'next/router'
import ButtonWithIcon from '../ButtonWithIcon'

const HomeButton = ({ addClasses = '' }) => {
  const router = useRouter()
  const homeClickHandler = () => router.push('/')
  return (
    <ButtonWithIcon
      addClasses={`button-action-wrap ${addClasses}`}
      clickHandler={homeClickHandler}
      iconPath="/home.svg"
    />
  )
}

export default HomeButton
