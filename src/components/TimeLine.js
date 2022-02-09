import List from "./List";
import TimeEvent from "./TimeEvent";

const TimeLine = ({data}) => (
  <div className="my-4">
    <List data={data} renderItem={TimeEvent}  />
  </div>
);

export default TimeLine;
