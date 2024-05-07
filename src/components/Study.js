import React from "react"
import "../Scss/Style.scss"
import img1 from "../images/schedule.png"
import img2 from "../images/course.png"
import img3 from "../images/homework-bg.png"
import Classes from "./Classes"
import img4 from "../images/library.png"
import img5 from "../images/news.png"
import img6 from "../images/reference-book.png"
import '../Scss/Style-languages.scss'

export default function Study() {
  const productsData = [
    {
      id: 1,
      image: img1,
      button: "Перейти",
      name: "Қазақский",
      src: "Kazak",
    },
    {
      id: 2,
      image: img2,
      button: "Перейти",
      name: "Русский",
      src: "Russian",
    },
    {
      id: 3,
      name: "Английский",
      image: img3,
      button: "Перейти",
      src: "English",
    },
    {
      id: 4,
      name: "Французский",
      image: img4,
      src: "French",
      button: "Перейти",
    },
    {
      id: 5,
      name: "Итальянский",
      image: img5,
      src: "Italian",
      button: "Перейти",
    },
    {
      src: "Germany",
      name: "Немецский",
      id: 6,
      image: img6,
      button: "Перейти",
    },
  ]
  return (
    <>
      <div className="widh">
        <div className="blok">
          <section>
            <div className="blok">
              {productsData.map(product => (
                <div key={product.id} className="position">
                  <Classes product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
