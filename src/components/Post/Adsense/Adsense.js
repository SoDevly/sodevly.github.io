import React, { useEffect } from "react"

const Adsense = ({ adClient, adSlot }) => {

  useEffect(()=>{
    (window.adsbygoogle = window.adsbygoogle || []).push({});   
  })

  return(
    <div style={{padding: 8}}>
      <ins class="adsbygoogle"
        style={{display: "block"}}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  )
}

export default Adsense