import 'isomorphic-fetch'
import Layout from '../components/Layout'
import PodcastGrid from '../components/PodcastGrid'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    let idChannel = query.id

    let [reqChannel, reqSeries, reqAudio] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ])

    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudio.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return {channel, audioClips, series}
  }

  render() {
    const { channel, audioClips, series } = this.props
    return (
      <Layout title={channel.title}>
        <h1>{channel.title}</h1>
        <h3>Ultimos Podcast</h3>
        <PodcastGrid channels={audioClips} />
        <h3>Series</h3>
        <ChannelGrid channels={series} />
        <style jsx>{`
            h1 {
              padding-left: 2%;
            }
            h3 {
              font-size: 1.5em;
              padding-left: 2%;
            }
          `}</style>
      </Layout>
    )
  }
}