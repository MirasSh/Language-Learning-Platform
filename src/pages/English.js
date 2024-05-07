import React, { useState, useEffect } from "react"
import Header from "../components/header"

export default function English() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videolist, setVideolist] = useState([
    {
      id: 1,
      name: "1 lesson of learning English language",
      videoUrl: "https://www.youtube.com/embed/Hp9wUEDasY4?si=9mCKolIkJLJryVzB",
    },
    {
      id: 2,
      name: "2 lesson of learning English language",
      videoUrl: "https://www.youtube.com/embed/nXI9CN5a6ew?si=UEdHc-m-trISgBkq",
    },
    {
      id: 3,
      name: "3 lesson of learning English language",
      videoUrl: "https://www.youtube.com/embed/GCNEqFJM3GA?si=01w12YxBLX4Dj5xv",
    },
    {
      id: 4,
      name: "4 lesson of learning English language",
      videoUrl: "https://www.youtube.com/embed/1nkoP6NosxU?si=K_LKpT73gOC1vJdB",
    },
    {
      id: 5,
      name: "5 lesson of learning English language",
      videoUrl: "https://www.youtube.com/embed/nPXmJZx60K0?si=qnKS34ds1PSu-s0V",
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
        <h1 className="language-font">English language</h1>
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
              Learning the English language, especially if you live in an
              English-speaking country or environment, offers numerous benefits:
              <li>Social integration:</li> Proficiency in English helps you
              better integrate into society. You'll find it easier to
              communicate with locals, learn more about their culture, and
              understand their traditions.
              <li>Professional opportunities:</li> Many jobs and career
              prospects require proficiency in English. This is particularly
              important in fields like government, education, healthcare, and
              business.
              <li>Respect for culture:</li> Learning English can be a gesture of
              respect towards the culture and people of English-speaking
              countries. It helps you better appreciate the rich cultural
              heritage of these nations.
              <li>Personal enrichment:</li> Learning a new language always opens
              new horizons and helps develop cognitive skills. Additionally,
              proficiency in English can help you better understand your own
              family if you have English-speaking relatives.
              <li>Travel and tourism:</li> If you plan to travel to
              English-speaking countries, knowing the English language can make
              your journey more enjoyable and exciting. You'll be able to
              communicate with locals effortlessly and immerse yourself more
              fully in the experience.
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
