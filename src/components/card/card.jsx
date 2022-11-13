import React from 'react';
import './card.css';

export const Cards = () => {
  return (
    <div className='card-wrapper'>
      <div class='card'>
        <div class='content'>
          <div class='front'>
            <h3 class='title'>VALORIFICARE</h3>
          </div>

          <div class='back'>
            <p class='description'>
              Serviciile noastre de detailing ofer full aspect asupra
              tratamentelor pentru valorificarea, restaurare si viitoarele
              mentineri ale masinii
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div class='card'>
        <div class='content'>
          <div class='front'>
            <h3 class='title'>PROTEJARE</h3>
          </div>

          <div class='back'>
            <p class='description'>
              Serviciile noastre de detailing ofer full aspect asupra
              tratamentelor pentru valorificarea, restaurare si viitoarele
              mentineri ale masinii
            </p>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='content'>
          <div class='front'>
            <h3 class='title'>MENTINERE</h3>
          </div>

          <div class='back'>
            <p class='description'>
              Serviciile noastre de detailing ofer full aspect asupra
              tratamentelor pentru valorificarea, restaurare si viitoarele
              mentineri ale masinii
            </p>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='content'>
          <div class='front'>
            <h3 class='title'>PERSONALIZARE</h3>
          </div>

          <div class='back'>
            <p class='description'>
              Serviciile noastre de detailing ofer full aspect asupra
              tratamentelor pentru valorificarea, restaurare si viitoarele
              mentineri ale masinii
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
