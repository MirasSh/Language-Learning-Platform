import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function Germany() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 Lektion des Deutschlernens",
      videoUrl: "https://www.youtube.com/embed/poH9Ke7SHtE?si=zt4BK29W_QpQM8CE",
    },
    {
      id: 2,
      name: "2 Lektion des Deutschlernens",
      videoUrl: "https://www.youtube.com/embed/prNoO4nrr-w?si=wLMRNTOzAQ0Q4IE6",
    },
    {
      id: 3,
      name: "3 Lektion des Deutschlernens",
      videoUrl: "https://www.youtube.com/embed/prNoO4nrr-w?si=Rn9BJuQkUI1WIJkF",
    },
    {
      id: 4,
      name: "4 Lektion des Deutschlernens",
      videoUrl: "https://www.youtube.com/embed/UTOfBedlu6Y?si=-gR6_dMOlmfoS6kR",
    },
    {
      id: 5,
      name: "5 Lektion des Deutschlernens",
      videoUrl: "https://www.youtube.com/embed/mHEfbEqxp80?si=11eNjA2tfmnCBVU3",
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
        <h1 className="language-font">Deutsche Sprache</h1>
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
              Das Erlernen der deutschen Sprache, insbesondere wenn Sie in einem
              deutschsprachigen Land oder Umfeld leben, bietet zahlreiche
              Vorteile:
              <li>Soziale Integration:</li> Die Beherrschung der deutschen
              Sprache hilft Ihnen, sich besser in die Gesellschaft zu
              integrieren. Sie werden es einfacher finden, mit den Einheimischen
              zu kommunizieren, mehr über ihre Kultur zu erfahren und ihre
              Traditionen zu verstehen.
              <li>Berufliche Möglichkeiten:</li> Viele Jobs und Karrierechancen
              erfordern Kenntnisse der deutschen Sprache. Dies ist besonders
              wichtig in Bereichen wie Regierung, Bildung, Gesundheitswesen und
              Wirtschaft.
              <li>Respekt vor der Kultur:</li> Das Erlernen der deutschen
              Sprache kann eine Geste des Respekts gegenüber der Kultur und den
              Menschen in deutschsprachigen Ländern sein. Es hilft Ihnen, das
              reiche kulturelle Erbe dieser Nationen besser zu schätzen.
              <li>Persönliche Bereicherung:</li> Das Erlernen einer neuen
              Sprache öffnet immer neue Horizonte und fördert die kognitiven
              Fähigkeiten. Darüber hinaus kann die Kenntnis der deutschen
              Sprache Ihnen helfen, Ihre eigene Familie besser zu verstehen,
              wenn Sie deutschsprachige Verwandte haben.
              <li>Reisen und Tourismus:</li> Wenn Sie planen, in
              deutschsprachige Länder zu reisen, kann die Kenntnis der deutschen
              Sprache Ihre Reise angenehmer und aufregender machen. Sie werden
              mühelos mit den Einheimischen kommunizieren können und sich tiefer
              in das Erlebnis eintauchen können.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
