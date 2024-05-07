import React from "react"

export default function bag() {
  return (
    <div className="flex">
      <a
        href="/"
        class="btn-flip"
        onclick="history.go(-1);"
        data-back="Back"
        data-front="Front"
      ></a>
    </div>
  )
}
