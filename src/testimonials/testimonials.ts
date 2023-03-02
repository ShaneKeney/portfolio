interface Testimonial {
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  position: string;
  company: string;
}

const testimonial1: Testimonial = {
  title: "Technical, Strategic, Lifelong Learner",
  description: `Shane is the rare breed who can excel at both ends of the spectrum. He thrives in the technical detail of back and front end development. He can take a step back and shape the strategic role technology should play within an organization.\n\nIf there's a vital skill he doesn't have in his toolbox, I guarentee he's already enrolled in a class, enlisted a mentor, or checked out a book to help him develop it.`,
  imageUrl: "path to don lasanga",
  name: "Nick Gonzales (Don Lasanga)",
  position: "CMO",
  company: "Spikeball",
};

const testimonial2: Testimonial = {
  title: "Invaluable",
  description: "Shane has been an invaluable asset to our team. He is intelligent, proactive, and best of all, fun to work with. Our product would be leagues behind where it is without him.",
  imageUrl: "path to jason",
  name: "Adam Slater",
  position: "CEO & Founder",
  company: "Sluff",
};

const testimonial3: Testimonial = {
  title:
    "Rockstar Developer with a Knack for Leading and Building Relationships",
  description: `Shane is an absolute rockstar. From the very beginning he took 100% ownership of a mobile application that had been previously outsourced and got to work re-building it from the ground up. He has an uncanny ability to not only do great development work but also put a voice and reason to the work he does, communicating effectively with a team of marketing professionals that doesn't speak developer.  He has always been so intentional and meticulous in the decisions he makes and is as autonomous and efficient as they come. To put it bluntly - you'd be lucky to get to work with Shane. He's truly a fantastic human and as good as they come.`,
  imageUrl: "path to coppola",
  name: "Christina Coppola",
  position: "Head of Marketing",
  company: "Spikeball",
};

const testimonial4: Testimonial = {
  title: "Above and Beyond",
  description:
    "Shane is one of the most selfless, emotionally intelligent people I know. He's a deep thinker who is curious and takes pride in his work. He takes ownership and communicates well. He can get in the weeds while keeping the big picture top of mind. He also build the incredible Spikeball app from the ground up.",
  imageUrl: "path to dickhole",
  name: "Chris Ruder",
  position: "CEO",
  company: "Spikeball",
};

export default Testimonial;
