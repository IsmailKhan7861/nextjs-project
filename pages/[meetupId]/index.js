import MeetupDetails from "../../components/meetups/MeetupDetails";
const MeetUpDetails = () => {
  return (
    <MeetupDetails
      image={"https://picsum.photos/200/300"}
      title={"First Meetup"}
      address={"New York 35 "}
      description={"This is the firs Meetup"}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "1" } }, { params: { meetupId: "2" } }],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "https://picsum.photos/200/300",
        id: meetupId,
        title: "First Meetup",
        address: "New York 35 ",
        description: "This is the firs Meetup",
      },
    },
  };
}

export default MeetUpDetails;
