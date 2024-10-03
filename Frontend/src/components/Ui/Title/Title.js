import React from "react";
import "./index.css";
export default function TitleUi({ titleUi }) {
  return (
    <div>
      <p class="button-title" data-text="Awesome">
        <span class="actual-text">&nbsp;{titleUi}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">
          &nbsp;{titleUi}&nbsp;
        </span>
      </p>
    </div>
  );
}
