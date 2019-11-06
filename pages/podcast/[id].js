import 'isomorphic-fetch'

const Clip = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
)

Clip.getInitialProps = async function (context) {
  const { id } = context.query
  const reqClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
  const clip = reqClip.json()
  return { clip }
}


export default Clip
