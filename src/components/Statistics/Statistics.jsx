import { statistics } from "../../assets/data/data";

const Statistics = () => {
  return (
    <>
      <div className="container grid grid-cols-4 space-x-3">
        {statistics.map(({name, count, icon}) => (
          <div className="bg-white grid grid-cols-2 mb-[10px] p-[10px] rounded-lg shadow-[0px_4px_17px_4px_rgba(0,0,0,0.10)] border-x-4 border-l-yellow-500 border-spacing-4 cursor-pointer">
            <div>
              <p className="text-[15px] font-medium">{name}</p>
              <div>
                <p className="text-[15px] font-medium">{count}</p>
              </div>
            </div>
            <div className="ml-auto w-fit bg-black p-[10px] rounded-lg hover:bg-yellow-500">
              {icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistics;
