import react from "react";

const AddInputList = (props) => {
  return (
    <>
      <div className="addList">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id)
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default AddInputList;
