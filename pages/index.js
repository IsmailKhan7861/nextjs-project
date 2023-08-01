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
    id: 1,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
  {
    id: 1,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
  {
    id: 1,
    title: "First Meetup",
    image: "https://picsum.photos/200",
    address: "New York 123 ",
    description: "First Meetup",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
