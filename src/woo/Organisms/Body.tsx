import NumberOfSpectators from "../Molecules/NumberOfSpectators";
import SeatsChoose from "../Molecules/SeatsChoose";
import ViewingCheck from "../Molecules/ViewingCheck";

type CheckProps = {
  price: Number;
};

const Body = () => {
  
  return (
    <div className="w-screen h-screens">
      <div
        className="w-full max-w-5xl m-auto flex gap-10"
        style={{ paddingBottom: "100px" }}
      >
        <NumberOfSpectators />
      </div>
      <div className="flex justify-center items-center relative ">
        <SeatsChoose />
        <div className="flex absolute inset-y-0 right-32">
          <ViewingCheck />
        </div>
      </div>
    </div>
  );
};
export default Body;