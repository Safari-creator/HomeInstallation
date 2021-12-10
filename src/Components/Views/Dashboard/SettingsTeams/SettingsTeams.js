import React from "react";
import './SettingsTeams.css';
 
const SettingsTeams = (props) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-heading">
          <p>{props.name}</p>
      </div>
      <div className="modal-content">
        <div className="columns">
          <div className="column-one">
            <div>
              <label>First Name:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Phone:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Email(required):</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="column-two">
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can schedule new inspections?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can publish reports?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can add new comments to template?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can edit templates?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can manage contacts?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Can access financial date?</label>
                  </div>
                  <div>
                      <input type="checkbox" value="Paneer" />
                      <label>Full company admin?</label>
                  </div>
          </div>
        </div>
        <div className="button">
          <button>{props.name}</button>
      </div>
    </div>
  </div>
  );
};
 
export default SettingsTeams;
