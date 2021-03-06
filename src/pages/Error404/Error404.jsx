import { withRouter } from "react-router-dom";

function Error404(props) {
  const handleGoBack = () => props.history.goBack();

  return (
    <>
      <h2>Error404 page</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}

export default withRouter(Error404);
