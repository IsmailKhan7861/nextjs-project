import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const getData = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return <NewMeetupForm onAddMeetup={getData} />;
};

export default NewMeetUp;
