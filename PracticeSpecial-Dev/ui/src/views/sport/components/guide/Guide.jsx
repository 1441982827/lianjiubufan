import React from 'react';
import {Style} from './StyledGuide';


function Guide  (props){
  
    return (
        <Style>
            <aside>
                { props.data.map((item,index)=>{
                    let {title,content} =item
                    return(
                        <div key={index} >    
                        {title&&<h3>{title}</h3>} 
                        {content
                            &&<article>
                                {content.map((i,k)=>(<p key={k}>{i}</p>))}
                              </article>
                        }
                        </div>
                    ) 

                 })
                }
            </aside>
        </Style>
    )
}

export {
    Guide
}

