function Story(props) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5]
      border-red-500 border-2
      object-contain cursor-pointer 
      hover:scale-110 transition-transform duration:150 ease-out"
        src={props.img}
      />
      <p
        className="text-xs w-14 truncate text-center
      "
      >
        {props.username}
      </p>
    </div>
  );
}

export default Story;
