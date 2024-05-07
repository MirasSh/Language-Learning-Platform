import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function Kazak() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 қазақ тілін оқыту сабағы",
      videoUrl: "https://www.youtube.com/embed/2otMsGIIfLk?si=8GCvElF2NEQQQLXg",
    },
    {
      id: 2,
      name: "2 қазақ тілін оқыту сабағы",
      videoUrl: "https://www.youtube.com/embed/xs0OpQ-_-JI?si=FFks1NjprMDt5Uct",
    },
    {
      id: 3,
      name: "3 қазақ тілін оқыту сабағы",
      videoUrl: "https://www.youtube.com/embed/8PmozsPnapI?si=H0gHmUTUaM3-M-L5",
    },
    {
      id: 4,
      name: "4 қазақ тілін оқыту сабағы",
      videoUrl: "https://www.youtube.com/embed/ei-iRr71uc0?si=WNTK7qe92KJvLLIF",
    },
    {
      id: 5,
      name: "5 қазақ тілін оқыту сабағы",
      videoUrl: "https://www.youtube.com/embed/gIwCdJXpX0k?si=vQ2hIBicxwNJmQpq",
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
        <h1 className="language-font">Қазақ тілі</h1>
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
              Қазақ тілін үйрену, әсіресе Қазақстанда тұрсаңыз, оның көптеген
              артықшылықтары бар:
              <li> Әлеуметтік интеграция: </li> қазақ тілін білу көмектеседі Сіз
              Қазақстан қоғамына интеграцияланғаныңыз жөн. Сіз оңай жасай аласыз
              жергілікті тұрғындармен сөйлесу, олардың мәдениеті туралы көбірек
              білу және дәстүрлер.
              <li> кәсіби мүмкіндіктер: </li> көптеген жұмыс орындары және
              Қазақстандағы мансаптық мүмкіндіктер қазақ тілін білуді көздейді
              тіл. Егер сіз жұмыс жасасаңыз, бұл өте маңызды болуы мүмкін
              мемлекеттік секторда, білім беру, денсаулық сақтау саласында
              немесе бизнес.
              <li> мәдениетті құрметтеу: </li> қазақ тілін үйрену Қазақстан
              халқы мен мәдениетін құрметтеу қимылымен. Бұл көмектесе алады сіз
              бұл бай мәдени мұраны жақсы түсінесіз және бағалайсыз елдер.
              <li> жеке байыту: </li>жаңа тілді үйрену әрқашан жаңа көкжиектер
              ашады және танымдық дағдыларды дамытуға көмектеседі. Сонымен
              қатар, қазақ тілін білу сізге жақсы көмектеседі егер сізде қазақ
              болса, өз отбасыңызды түсініңіз туыстары.
              <li> саяхат және туризм: </li>егер сіз саяхаттауды жоспарласаңыз
              Қазақстан бойынша қазақ тілін білу сіздікі болуы мүмкін саяхат
              жағымды және қызықты, өйткені сіз жасай аласыз жергілікті
              тұрғындармен еш қиындықсыз байланысыңыз.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
