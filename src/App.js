import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-5 p-0">
          <div className="employer-dashboard-container">
            <div className="d-flex align-items-center justify-content-center employer-zone-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
              <h1 className="employer-zone-heading">Employer Zone</h1>
            </div>
            <div className="employer-left-container">
              <div className="d-flex align-items-center employer-welcome-container mb-4">
                <img
                  className="user-logo"
                  src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
                  alt="user"
                />
                <div>
                  <p>
                    Welcome back,
                    <br />
                    <b>SATHISH KUMAR T</b>
                  </p>
                </div>
              </div>
              <div className="dashboard-list-items">
                <p className="d-flex dashboard-item align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                  </svg>
                  Dashboard
                </p>
                <p className="d-flex dashboard-item align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-file-earmark-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
                  </svg>
                  Department
                </p>
                <p className="d-flex dashboard-item align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-clipboard2-pulse-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                  </svg>
                  Notice Board
                </p>
                <p className="d-flex dashboard-item align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-trophy-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                  </svg>
                  Awards
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-7 p-0">
          <div className="employee-details-container">
            <div className="row mb-4">
              <div className="col-3">
                <div className="d-flex align-items-center detail-items-container justify-content-evenly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#29b0ff"
                    class="bi bi-calendar-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                  </svg>
                  <div>
                    <h6>Joining Date</h6>
                    <p>
                      <b>15-05-2023</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="d-flex align-items-center detail-items-container justify-content-evenly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#02ba1a"
                    class="bi bi-alarm-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                  </svg>
                  <div>
                    <h6>Login Time</h6>
                    <p>
                      <b>12.00 PM</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="d-flex align-items-center detail-items-container justify-content-evenly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#de8004"
                    class="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  <div>
                    <h6>Logout Time</h6>
                    <p>
                      <b>9.00 PM</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="d-flex align-items-center detail-items-container justify-content-evenly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#c93402"
                    class="bi bi-hourglass-bottom"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                  </svg>
                  <div>
                    <h6>Working Hours</h6>
                    <p>
                      <b>8.5 HRS</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="employer-right-container">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex justify-content-between login-status-container mb-4">
                    <button className="btn btn-success">Check In</button>
                    <button className="btn btn-danger">Check Out</button>
                    <button className="btn btn-warning">Lunch</button>
                  </div>
                  <div className="notice-board-container">
                    <h5>Notice Board</h5>
                    <hr className="notice-horizontal" />
                    <ul>
                      <li>
                        <b>Urgent & Import</b>
                      </li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p className="author-name">by Sathish Kumar T</p>
                      <li>
                        <b>Social Welfare</b>
                      </li>
                      <p>
                        Ut enim ad minim veniam, aliquip ex ea commodo
                        consequat.
                      </p>
                      <p className="author-name">by Sathish Kumar T</p>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column justify-content-center align-items-center user-container">
                    <div className="d-flex flex-column justify-content-center align-items-center user-logo-container p-6">
                      <img
                        className="user-logo"
                        src="https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg"
                        alt="user"
                      />
                      <h4>SATHISH KUMAR T</h4>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center user-department-container">
                      <h6>Software Engineer</h6>
                      <p>
                        sed quia non numquam eius modi tempora incidunt ut
                        labore et dolore magnam aliquam quaerat voluptatem. Ut
                        enim ad minima veniam, Quis autem vel eum iure
                        reprehenderit qui in ea voluptate velit esse quam nihil
                        molestiae consequatur, vel illum qui dolorem eum fugiat
                        quo voluptas nulla pariatur?
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-danger">
                          Request Leave
                        </button>
                        <button className="btn btn-success butt">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
