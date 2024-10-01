import React from "react"
import '../index.css'
import Title from "./Title"
import { TourDetails } from "./Data"
import Tour from "./Tour"
const Tours =()=>{
 
    return(
        <>
    <section className="section" id="tours">
    <Title title={"Featured"} subTitle={"Tours"}/>


      <div className="section-center featured-center">
        {
          TourDetails.map(tour=>{
            return (
              <Tour key={tour.key} {...tour}/>
            )
          })
        }
        {/* {TourDetails.map(tour=>{
          return(
            <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour.img} className="tour-img" alt="" />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>
               {tour.desc}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {tour.country}
                </p>
                <p>{tour.duration}</p>
                <p>from ${tour.cost}</p>
              </div>
            </div>
          </article>
          )
        })} */}
      </div>
    </section>

        </>
    )
}

export default Tours