import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function Russian() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 урок обучение Русского языка",
      videoUrl: "https://www.youtube.com/embed/OSRBxtP0KMs?si=mBX976b4SVs13Znv",
    },
    {
      id: 2,
      name: "2 урок обучение Русского языка",
      videoUrl: "https://www.youtube.com/embed/y3bYFSWRycQ?si=eGtKYTeZdW32L-7s",
    },
    {
      id: 3,
      name: "3 урок обучение Русского языка",
      videoUrl: "https://www.youtube.com/embed/2eivQULiqM8?si=AduMIFzFfWZoxj0o",
    },
    {
      id: 4,
      name: "4 урок обучение Русского языка",
      videoUrl: "https://www.youtube.com/embed/LoPnoC3JXuw?si=8CYgWR1f3WXANfam",
    },
    {
      id: 5,
      name: "5 урок обучение Русского языка",
      videoUrl: "https://www.youtube.com/embed/GyTa8INlLts?si=w-6HGuGYOz09QJTJ",
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
        <h1 className="language-font">Русский язык</h1>
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
              Изучение русского языка, особенно если вы живете в России или в
              русскоязычном окружении, имеет множество преимуществ:
              <li>Социальная интеграция:</li> Знание русского языка поможет вам
              лучше интегрироваться в общество. Вы сможете легче общаться с
              местными жителями, узнавать больше о их культуре и традициях.
              <li>Профессиональные возможности:</li> Многие рабочие места и
              карьерные возможности предполагают знание русского языка. Это
              может быть особенно важно в государственном секторе, в
              образовании, медицине или бизнесе.
              <li>Уважение к культуре:</li> Изучение русского языка может быть
              жестом уважения к культуре и народу России. Это поможет вам лучше
              понимать и ценить богатое культурное наследие страны.
              <li>Личное обогащение:</li> Изучение нового языка всегда открывает
              новые горизонты и помогает развивать когнитивные навыки. Кроме
              того, знание русского языка может помочь вам лучше понимать
              собственную семью, если у вас есть русскоязычные родственники.
              <li>Путешествия и туризм:</li> Если вы планируете путешествовать
              по России или в русскоязычные регионы, знание русского языка может
              сделать ваше путешествие более приятным и увлекательным, так как
              вы сможете общаться с местными жителями без проблем.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
