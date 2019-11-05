import Link from 'next/link'

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
    return <div>
      <header>Podcast</header>
      <h1>{channel.title}</h1>
      <h3>Ultimos Podcast</h3>
      <div className="channels">
        {
          audioClips.map(clip => {
            return (
              <Link href={`/podcast/${clip.id}`} prefetch>
                <a className="channel">
                  <img src={clip.urls.image} />
                  <h2>{clip.title}</h2>
                </a>
              </Link>
            )
          })
        }
      </div>
      <h3>Series</h3>
      <div className="channels">
        {
          series.map(serie => {
            return (
              <Link href={`/podcast/${serie.id}`} prefetch>
                <a className="channel">
                  <img src={serie.urls.logo_image.original} />
                  <h2>{serie.title}</h2>
                </a>
              </Link>
            )
          })
        }
      </div>
      <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .channels {
            display: grid;
            grid-gap: 30px;
            padding: 20px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5;
          }
          .channel img {
            width: 100%;
          }
          h1 {
            padding-left: 2%;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
          h3 {
            font-size: 1.5em;
            padding-left: 2%;
          }
        `}</style>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }  
        `}</style>
    </div>
  }
}