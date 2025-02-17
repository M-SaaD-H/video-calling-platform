import { useEffect } from "react";
import { useParams } from "react-router-dom"

function Room() {
  const { name } = useParams();

  useEffect(() => {
    // logic to init user to the room
  }, [name]);
  
  return (
    <div>
      Hi, {name}
    </div>
  )
}

export default Room