import React from 'react'

export default function BlockHeader({heading}) {
  return (
    <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
            <h3 class="display-3 font-weight-bold text-white">{heading}</h3>
            <div class="d-inline-flex text-white">

                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <p class="m-0 px-2">/</p>
                <p class="m-0">{heading}</p>
            </div>
        </div>
    </div>
   
  )
}
