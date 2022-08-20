import { useRouter } from 'next/router'
import DetailPost from '../../src/components/organisms/DetailPost'

const Details = () => {
  const router = useRouter()
  const { id } = router.query

  return <DetailPost id={id} />
}

export default Details
