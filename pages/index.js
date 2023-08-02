//Home Page
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
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
  const client = await MongoClient.connect(
    "mongodb+srv://ismail6119050it:UhxRGWqBQEh2@cluster0.xkzbbp3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((elem) => {
        return {
          title: elem.data.title,
          address: elem.data.address,
          image: elem.data.image,
          id: elem._id.toString(),
        };
      }),
      revalidate: 1,
    },
  };
}
export default HomePage;
