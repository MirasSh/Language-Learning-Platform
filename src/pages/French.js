import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function French() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 leçon d'apprentissage de la langue française",
      videoUrl: "https://www.youtube.com/embed/SQnKmmoAqYM?si=ruvgmrjbD9lC68Aq",
    },
    {
      id: 2,
      name: "2 leçon d'apprentissage de la langue française",
      videoUrl: "https://www.youtube.com/embed/_acJ-kQ_X_Q?si=_4mTosLVe8j6OCZu",
    },
    {
      id: 3,
      name: "3 leçon d'apprentissage de la langue française",
      videoUrl: "https://www.youtube.com/embed/HYsxrSBSZzA?si=cqxU0VqaITUhQR5g",
    },
    {
      id: 4,
      name: "4 leçon d'apprentissage de la langue française",
      videoUrl: "https://www.youtube.com/embed/CNR54Js05vM?si=Kv_CA7Mbp62m27pS",
    },
    {
      id: 5,
      name: "5 leçon d'apprentissage de la langue française",
      videoUrl: "https://www.youtube.com/embed/YEMoIyj7bD8?si=QbckViF9mq3ff2Uf",
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
        <h1 className="language-font">Français</h1>
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
              Apprendre la langue française, surtout si vous vivez dans un pays
              francophone ou un environnement francophone, présente de nombreux
              avantages :<li>Intégration sociale :</li> La maîtrise du français
              vous aide à mieux vous intégrer dans la société. Vous trouverez
              plus facile de communiquer avec les habitants, d'apprendre
              davantage sur leur culture et de comprendre leurs traditions.
              <li>Opportunités professionnelles :</li> De nombreux emplois et
              perspectives de carrière exigent la maîtrise du français. C'est
              particulièrement important dans des domaines tels que le
              gouvernement, l'éducation, les soins de santé et les affaires.
              <li>Respect de la culture :</li> Apprendre le français peut être
              un geste de respect envers la culture et les habitants des pays
              francophones. Cela vous aide à mieux apprécier le riche patrimoine
              culturel de ces nations.
              <li>Enrichissement personnel :</li> Apprendre une nouvelle langue
              ouvre toujours de nouveaux horizons et aide au développement des
              compétences cognitives. De plus, la maîtrise du français peut vous
              aider à mieux comprendre votre propre famille si vous avez des
              membres de la famille francophones.
              <li>Voyages et tourisme :</li> Si vous prévoyez de voyager dans
              des pays francophones, la connaissance de la langue française peut
              rendre votre voyage plus agréable et excitant. Vous pourrez
              communiquer avec les habitants sans effort et vous immerger
              davantage dans l'expérience.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
