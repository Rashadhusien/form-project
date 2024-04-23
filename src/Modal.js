function Success({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div
        style={{
          backgroundColor: "#00000075",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            color: "green",
            padding: "5px",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: " 50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
          }}
        >
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage !== null
              ? errorMessage
              : "The Form Has Been Submited Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Success;
