import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Voice Actress",
    fact: "Coraline's voice was performed by Dakota Fanning, who was chosen for her ability to convey both Coraline's curiosity and her bravery in the face of danger.",
  },
  {
    id: 2,
    title: "Character Development",
    fact: "Coraline's character was deliberately designed to challenge typical gender stereotypes in children's literature. She's depicted as resourceful, independent, and unafraid to confront danger head-on.",
  },
  {
    id: 3,
    title: "Blue Hair",
    fact: "In the film, Coraline's hair color is a vibrant blue. This choice was made to symbolize her uniqueness and to set her apart visually from the other characters, emphasizing her adventurous spirit.",
  },
  {
    id: 4,
    title: "Name Origin",
    fact: "The name 'Coraline' is a combination of 'coral' and 'Caroline,' chosen to reflect both the underwater and everyday aspects of her character's journey between realities.",
  },
  {
    id: 5,
    title: "Influence and Reception",
    fact: "Coraline has become a cultural icon, praised for its imaginative storytelling and distinctive animation style. The character of Coraline herself has resonated with audiences for her bravery and determination in the face of supernatural challenges.",
  }
]

const ParamPage = () => {
    
    const { id } = useParams();
    const item = data.find(item => item.id === Number(id));
    if(!item){
        return <div>Fact Not Found</div>
    }


    return(
        <div>
            <h1>{item.title}</h1>
            <h4>{item.fact}</h4>
        </div>
    )
}

export default ParamPage