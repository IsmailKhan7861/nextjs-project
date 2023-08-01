import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const getData = (data) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={getData} />;
};

export default NewMeetUp;
