import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function Italian() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 lezione di apprendimento della lingua italiana",
      videoUrl: "https://www.youtube.com/embed/5UwXIsk-FLU?si=I4jIcKzgCcjvdEoW",
    },
    {
      id: 2,
      name: "2 lezione di apprendimento della lingua italiana",
      videoUrl: "https://www.youtube.com/embed/BzRwAHyfPDg?si=cnf7K9PsT3L8LpSA",
    },
    {
      id: 3,
      name: "3 lezione di apprendimento della lingua italiana",
      videoUrl: "https://www.youtube.com/embed/tapPHc05QOc?si=kyKRzmeKdCPEUfSk",
    },
    {
      id: 4,
      name: "4 lezione di apprendimento della lingua italiana",
      videoUrl: "https://www.youtube.com/embed/tWIILzMhq6w?si=4nWXMsZcYk69tS1s",
    },
    {
      id: 5,
      name: "5 lezione di apprendimento della lingua italiana",
      videoUrl: "https://www.youtube.com/embed/CbnRe-EsjJU?si=DFzaQ2a9NK4FD6Yh",
    },
  ])

  useEffect(() => {
    setSelectedVideo(videolist[0]) // Устанавливаем первый элемент как выбранный при загрузке
  }, [])

  const handleVideoSelect = video => {
    setSelectedVideo(video)
  }

  return (
    <div className="height110">
      <Header />
      <div className="flex">
        <a
          href="/"
          class="btn-flip"
          onclick="history.go(-1);"
          data-back="Back"
          data-front="Front"
        ></a>
        <h1 className="language-font">Lingua Italiana</h1>
      </div>
      <div className="Video">
        <div className="big-video">
          {selectedVideo && (
            <iframe
              className="video5"
              src={selectedVideo.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="little-video">
          <section>
            <div className="button-new-style">
              {videolist.map(video => (
                <button
                  key={video.id}
                  className={
                    selectedVideo && selectedVideo.id === video.id
                      ? "video-item active"
                      : "video-item"
                  }
                  onClick={() => handleVideoSelect(video)}
                >
                  {video.name}
                </button>
              ))}
            </div>
          </section>
        </div>
        <div>
          <div>
            <ul className="text">
              Imparare la lingua italiana, soprattutto se vivi in un paese di
              lingua italiana o in un ambiente italiano, offre numerosi
              vantaggi:
              <li>Integrazione sociale:</li> La conoscenza dell'italiano ti
              aiuta ad integrarti meglio nella società. Troverai più facile
              comunicare con gli abitanti locali, imparare di più sulla loro
              cultura e comprendere le loro tradizioni.
              <li>Opportunità professionali:</li> Molti lavori e prospettive di
              carriera richiedono la conoscenza dell'italiano. Questo è
              particolarmente importante in settori come il governo,
              l'istruzione, la sanità e il business.
              <li>Rispetto per la cultura:</li> Imparare l'italiano può essere
              un gesto di rispetto verso la cultura e la gente dei paesi di
              lingua italiana. Ti aiuta a comprendere meglio il ricco patrimonio
              culturale di queste nazioni.
              <li>Arricchimento personale:</li> Imparare una nuova lingua apre
              sempre nuovi orizzonti e aiuta a sviluppare le capacità cognitive.
              Inoltre, la conoscenza dell'italiano può aiutarti a comprendere
              meglio la tua famiglia se hai parenti di lingua italiana.
              <li>Viaggi e turismo:</li> Se prevedi di viaggiare in paesi di
              lingua italiana, conoscere l'italiano può rendere il tuo viaggio
              più piacevole ed emozionante. Sarai in grado di comunicare con gli
              abitanti locali senza sforzo e immergerti più completamente
              nell'esperienza.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
