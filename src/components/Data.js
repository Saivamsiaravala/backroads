import tour_1 from "../images/tour-1.jpeg"
import tour_2 from "../images/tour-2.jpeg"
import tour_3 from "../images/tour-3.jpeg"
import tour_4 from "../images/tour-4.jpeg"
export const Options=[{id:1,name:"home", add:'#home'},
               {id:2,name:"about", add:'#about'},
               {id:3,name:"services", add:'#services'},
               {id:4,name:"tours", add:'#tours'}]


export const Media=[{id:1,name:'facebook', add:'www.facebook.com' , class:'fab fa-facebook'},
                    {id:2,name:'twitter', add:'www.twitter.com' , class:'fab fa-twitter'},
                    {id:3,name:'squarespace', add:'www.squarespace.com' , class:'fab fa-squarespace'},
                    {id:4,name:'zomato', add:'www.zomato.com' , class:'fab fa-squarespace'}]

export const ServicesList=[{id:1,name:"wallet", title:"Saving money",desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores, officia.`, class: 'fas fa-wallet fa-fw'},
                            {id:2,name:"tree", title:"Endless hiking",desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores, officia.`, class: 'fas fa-tree fa-fw'},
                            {id:3,name:"socks", title:"Amazing comfort",desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores, officia.`, class: 'fas fa-socks fa-fw'}]    
                                    
export  const TourDetails=[ {id:1,img:tour_1,date:'august 26th, 2020',title:"Tibet Adventure" ,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    country:"China",
    duration:"6 days",
    cost: '2100',
     },
    {id:2,img:tour_2,date:'october 01st, 2020',title:"best of java" ,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,

      country:"indonesia",
      duration:"11 days",
      cost: '1400',
    },
    {id:3,img:tour_3,date:'september 15th, 2020',title:"explore hong kong" ,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
        country:"hong kong",
        duration:"8 days",
        cost: '5000',
    },
    {id:4,img:tour_4,date:'december 5th, 2019',title:"kenya highlights" ,
          desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                  vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.`,
          country:"kenya",
          duration:"20 days",
          cost: '3300',
    }]

