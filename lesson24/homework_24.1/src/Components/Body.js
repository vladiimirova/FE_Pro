export function Body() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mt-4">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">Character Information</div>
            <div className="card-body">
              <h5 className="card-title">Name: Luke Skywalker</h5>
              <ul>
                <li>
                  <strong>Height:</strong> 172 cm
                </li>
                <li>
                  <strong>Mass:</strong> 77 kg
                </li>
                <li>
                  <strong>Hair Color:</strong> Blond
                </li>
                <li>
                  <strong>Skin Color:</strong> Fair
                </li>
                <li>
                  <strong>Eye Color:</strong> Blue
                </li>
                <li>
                  <strong>Birth Year:</strong> 19BBY
                </li>
                <li>
                  <strong>Gender:</strong> Male
                </li>
              </ul>
              <a href="#" className="btn btn-info">
                View all info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
