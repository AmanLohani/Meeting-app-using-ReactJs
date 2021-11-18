import classes  from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
function NewMeetupForm(props) {

  const titleInputref = useRef();
  const imageInputref = useRef();
  const addressInputref = useRef();
  const descriptionInputref = useRef();

  function SubmitHandler(event){
    event.preventDefault();

    const enteredTitle = titleInputref.current.value;
    const enteredImage = imageInputref.current.value;
    const enteredAddress = addressInputref.current.value;
    const enteredDescription = descriptionInputref.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description : enteredDescription,
    };

    props.onAddMeetup(meetupData);

  }
  
  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlfor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputref}></input>
        </div>
        <div className={classes.control}>
          <label htmlfor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputref}></input>
        </div>
        <div className={classes.control}>
          <label htmlfor="address">Address</label>
          <input type="text" required id="address" ref={addressInputref}></input>
        </div>
        <div className={classes.control}>
          <label htmlfor="description">Description</label>
          <textarea required rows='5' id="description" ref={descriptionInputref}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
