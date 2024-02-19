import hanbit from '../assets/hero/Hanbit_Title.png';

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="border h-36 flex flex-col justify-between mt-6 px-5">
        <h1 className="text-5xl font-bold">A Front End Developer for you</h1>
        <p className="text-3xl w-1/2">
          Currently living in South Korea and I’m looking for opportunities to
          increase my experience in this field.
        </p>
      </div>
      <div className="w-full h-96">
        <img
          src={hanbit}
          alt="Oriental Blue Hanbit Icon"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
