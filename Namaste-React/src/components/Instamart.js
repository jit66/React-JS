import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      {isVisible ? (
        <>
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      {isVisible && <p>{description}</p>}
        </>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

    </div>
  );
};

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("");
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">InstaMart</h1>
      <Section
        title={"About InstaMart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain"
        }
        isVisible={sectionVisible === "about"}
        setIsVisible={() => setSectionVisible(sectionVisible==="about" ? "" : "about")}
      />

      <Section
        title={"Team InstaMart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain"
        }
        isVisible={sectionVisible === "team"}
        setIsVisible={() => setSectionVisible(sectionVisible==="team" ? "" : "team")
      }
        
      />

      <Section
        title={"Career"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain"
        }
        isVisible={sectionVisible === "career"}
        setIsVisible={() => setSectionVisible(sectionVisible==="career" ? "" : "career")}
      />

      {/* <AboutInstaMart/>
        <DetailsInstaMart/>
        <TeamInstaMart/>
        <Product/>
        <Careers/> */}
    </div>
  );
};

export default Instamart;
