function TodoItem2() {
  let todoName = 'Go to Collage';
  let todoDate = '4/10/2023';
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6"><p>{todoName}</p></div>
        <div className="col-4"><p>{todoDate}</p></div>
        <div className="col-2 text-center ">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
