import React from "react"
import '../index.css'
import { ServicesList } from "./Data"
import Title from "./Title"

const Services =()=>{
    return (
        <>
               <section className="section services" id="services">
    <Title title={"our"} subTitle={'services'} />
      <div className="section-center services-center">
        {ServicesList.map(service=>{
            return (
                <article className="service">
                <span className="service-icon"><i className={service.class}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">
                    {service.title} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia.
                  </p>
                </div>
              </article>
            )
        })}
      </div>
    </section>
        </>
    )
}

export default Services