import React from "react";

import "./channel.css";
import IMG1 from '../assets/Img1.jpg'
import IMG2 from '../assets/Img2.jpeg'
import IMG3 from '../assets/Img1.jpg'
import IMG4 from '../assets/Img2.jpeg'
import IMG5 from '../assets/Img1.jpg'
import IMG6 from '../assets/Img2.jpeg'
import IMG7 from '../assets/Img1.jpg'
import IMG8 from '../assets/Img2.jpeg'


const data =[
{
  id:1,
  image: IMG1,
  title: 'Cartoon Network[4.00 Mbps]',
  description:'udp//224.11.101:1234@192.168.101.200',
  num: 1.50 ,
  channel: 'Stopped'
  
  

},
{
  id:2,
  image: IMG2,
  title: 'ABP News[3.00 Mbps]',
  description:'udp//224.11.101:1234@192.168.101.200',
  num: 1.50 ,
  channel: 'Streaming'
},
{
  id:3,
  image: IMG3,
  title: 'Cartoon Network[4.00 Mbps]',
  description:'udp//224.11.101:1234@192.168.101.200',
  num: 1.50 ,
  channel: 'Stopped',
},
{
id:4,
image: IMG4,
title: 'ABP News[3.00 Mbps]',
description:'udp//224.11.101:1234@192.168.101.200',
num: 1.50 ,
channel: 'Streaming',
},
{
id:5,
image: IMG5,
title: 'Cartoon Network[4.00 Mbps]',
description:'udp//224.11.101:1234@192.168.101.200',
num: 1.50 ,
channel: 'Stopped',
},
{
id:6,
image: IMG6,
title: 'ABP News[3.00 Mbps]',
description:'udp//224.11.101:1234@192.168.101.200',
num: 1.50 ,
channel: 'Streaming',
},
{
id:7,
image: IMG7,
title: 'Cartoon Network[4.00 Mbps]',
description:'udp//224.11.101:1234@192.168.101.200',
num: 1.50 ,
channel: 'Stopped',
},
{
id:8,
image: IMG8,
title: 'Cartoon Network[4.00 Mbps]',
description:'udp//224.11.101:1234@192.168.101.200',
num: 1.50 ,
channel: 'Streaming',
},
]


const Channel = () => {
        return (
            <section id='channel'> 
           
            
            <div className="container">
               {
                data.map(({image,title,description,num,channel}) => {
                  return (
                   
                      <div className="item">
                        <div className="item_image">
                        <img src={image} alt="" ></img>
                        </div>
                        <div className="new">
                        <h1>{description}</h1>
                        <h2>{title}</h2>
                        <h3>{num}</h3>
                        <h4>{channel}</h4>
                       </div>
                        </div>                        
                  
            
                  
                  )
                  })
                }
                
            
         </div>
         </section>
            )
}

export default Channel