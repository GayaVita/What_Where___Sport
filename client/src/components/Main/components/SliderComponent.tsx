import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './SliderComponent.module.css';

export default function SliderComponent() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1500)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      {/* <div className={styles.vertical_gradient}></div>
      <div className={styles.horizontal_gradient}></div> */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src="../../../img/main/image-two-tennis-people.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="../../../img/main/on-the-basketball-court.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="../../../img/main/ping-pong.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="../../../img/main/ping-pong2.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide5">
         <img src="../../../img/main/chess.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src="../../../img/main/woman-football.jpg" alt="" />
        </div>
      </div>
    </>
  )
}