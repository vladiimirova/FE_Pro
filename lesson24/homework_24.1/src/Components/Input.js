export function Input() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter SWAPI URL or ID (e.g. people/1)"
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">Get Info</button>
        </div>
      </div>
    </div>
  );
}
