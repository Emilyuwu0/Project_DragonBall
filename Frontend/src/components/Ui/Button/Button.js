import React from 'react'
import "./index.css"
export default function Button({titleButton}) {
  return (
    <div>
  <div class="button-wrapper">
  <a href="#" class="anchor">
    <span class="actual-text">{titleButton}</span>
  </a>
</div>
 </div>
  )
}
