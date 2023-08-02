//Home Page
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
  {
    id: 2,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
  {
    id: 3,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
  {
    id: 4,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
];
const HomePage = (props) => {
  console.log(props);
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
      revalidate: 1,
    },
  };
}
export default HomePage;
