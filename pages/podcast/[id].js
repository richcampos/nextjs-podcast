import 'isomorphic-fetch'
import Layout from '../../components/Layout'
import PodcastView from '../../components/PodcastView'

const Clip = props => {
  const { clip } = props

  return (
    <Layout title={`${clip.title} - ${clip.channel.title}`}>
      <PodcastView clip={clip} />
    </Layout>
  )
}

Clip.getInitialProps = async function (context) {
  const { id } = context.query
  const reqClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
  const clipData = await reqClip.json()
  const clip = clipData.body.audio_clip
  return { clip }
}


export default Clip
